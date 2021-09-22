# Technical Guideline for Meter Passport

The primary purpose of this document is to provide guidelines for projects on how they can transfer assets to/from Moonbeam/Moonriver using the Meter Passport bridge implementation.  


The document is divided into the following sections:

* How the bridge works
* Different token transfer models supported by the bridge
* As a project, what do you have to do
* Links of interest
* Contact information

### How does the bridge work at a high level?

--

TL-DR: Meter Passport works with a set of trusted decentralized relayers that read events from a source chain and execute actions on a destination chain. Users will pay for gas in the source chain to initiate the action, while relayers will pay for gas to execute it on the destination.

--

Meter Passport bridge is, at its core, a message-passing protocol. Events on a source chain are used to send a message that is routed to the destination chain. There are three main roles:

* Listener: extract events from a source chain and construct a message
* Router: passes the message from the Listener to the Writer
* Writer: interpret messages and submit transactions to the destination chain

Passport currently relies on trusted relayers that carry messages from an event on a source chain to a destination chain. It features a mechanism that prevents any individual relayer from abusing their power and mishandling funds. At a high level, relayers create proposals in the target chain submitted for approval by other relayers. Approval voting also happens in the target chain, and each proposal is only executed after it meets a certain voting threshold.

In terms of paying for gas, users of the bridge will cover gas costs in the source chain, while relayers will pay for gas related to the execution of the action on the destination chain. The bridge can charge a fee to the users to help cover expenses associated with running the bridge.

On both sides of the bridge, there are a set of smart contracts, where each has a specific function:

Bridge contract — users and relayers interact with this contract. It delegates calls to the handler contracts for deposits, starts a transaction on the source chain, and executes the proposals on the target chain.

Handler contracts — validates the parameters provided by the user, creating a deposit/execution record.

Target contract — as the name suggests, this is the contract we are going to interact with on each side of the bridge.

### Token transfers - The different models

--

TL-DR: There are two supported token transfer models for the bridge. A lock-unlock model locks tokens on the origin chain and unlocks wrapped tokens \(representations\) on the destination chain. A lock/mint - burn/unlock model locks token on the origin chain and mints wrapped tokens \(representations\) on the destination chain. To transfer wrapped tokens back, these would be burned in the now origin chain, enabling an unlocking event in the now destination chain.

--  


There are two main possibilities for transferring tokens from one chain to another: the lock-unlock mechanism and the lock/mint - burn/unlock mechanism. In both models, tokens in the destination chain are typically called “wrapped representations” of the original tokens.  


Each model has pros and cons in terms of user experience, setup, token accountability and security. Let’s briefly review each model.  


Lock-unlock  


In this model, tokens from the source chain \(original tokens\) are locked inside the handler contract of the source chain. The relayer’s multisig account can only withdraw them. When locking tokens, an event is emitted with the transfer data, picked by the relayers.  


Once the multisig threshold is reached, wrapped tokens can then be unlocked from the handler contract of the destination chain. This creates the lock-unlock sequence. Therefore, a certain amount of wrapped tokens need to be minted at contract creation and locked in the handler contract.  


For example, Alice wants to transfer 5 TACO tokens to Bob from chain A to chain B. When she initiates the transfers, those 5 TACO tokens are locked in the token handler contract on chain A. An event is emitted stating, among other things, the recipient address and amount of tokens, which is picked up by the relayers. If the multisig threshold is reached, 5 wTACO \(wrapped TACO\) tokens are unlocked from the handler contract on chain B, and transferred to Bob. If Bob wanted to send 5 wTACO tokens to Charlie on chain A, he would then lock these tokens in the handler contract on chain B, initiating the series of events that leads to unlocking of 5 TACO tokens on chain A, which are transferred to Charley.  
  
The main benefit of this token model is that it gives your team certain control on the maximum amount of tokens that can be wrapped in the target network, because wrapped tokens need to be preminted and transferred to the handler’s address. However, the main drawback is that token accountability becomes an issue, and the lack of wrapped tokens in the handler contract  can prevent the bridge from operating properly. This method is not preferred by the Meter Passport team.  


Lock/mint - burn/unlock  
  
In this model, as before,  tokens from the source chain \(original tokens\) are locked inside the handler contract of the origin chain. The relayer’s multisig account can only withdraw them. When locking tokens, an event is emitted with the transfer data, picked by the relayers.  


Once the multisig threshold is reached, wrapped tokens can then be minted as a wrapped representation, via the handler contract, in the wrapped token contract on the destination chain. This creates the lock/mint sequence. Note that the handler’s contract address needs to be given a minter role in the wrapped token contract on the destination chain.   


To transfer back wrapped tokens, these would be burned via the handler contract in the origin chain \(previously the destination chain\). As before, an event is emitted with the transfer data, picked up by the relayers. Once the multisig threshold is reached, tokens locked in the handler contract of the destination chain \(previously the origin chain\) are unlocked and transferred to the recipient. This creates the burn/unlock sequence. Note that the handler’s contract address needs to be given a burner role in the wrapped token contract on the destination chain.   


For example, Alice wants to transfer 5 TACO tokens to Bob from chain A to chain B. When she initiates the transfers, those 5 TACO tokens are locked in the token handler contract on chain A. An event is emitted stating, among other things, the recipient address and amount of tokens, which is picked up by the relayers. If the multisig threshold is reached, 5 wTACO \(wrapped TACO\) tokens are minted in the wrapped token contract on chain B, and transferred to Bob. If Bob wanted to send 5 wTACO tokens to Charlie on chain A, he would then burn these tokens via the handler contract on chain B \(not directly\), initiating the series of events that leads to an unlocking of 5 TACO tokens on chain A, which are transferred to Charley.  


The main benefit of this token model is that there is a wrapped token per locked original token in the origin chain. Therefore, token accountability is easier and assets can freely flow through the bridge, as long as users initiate the action. The main drawback is that the contract to be deployed as the wrapped token representation needs to support the mint/burn \(mint and burnFrom interfaces in the [contract](https://github.com/ChainSafe/chainbridge-solidity/blob/master/contracts/ERC20Safe.sol)\) mechanisms. This model is preferred by the Meter Passport team.

### As a project - What do we need to know about the Bridge?

Fungible tokens that will be transferred using this bridging mechanism need to have a minimum set of functionalities to work with the bridge. At its core, it doesn’t really matter what EIP the token is based on, as long as it complies with the following  ERC20 token functions:  


Origin chain \(original tokens\):  


* Transfer \(standard ERC20 transfer function\)

Destination chain \(wrapped representation\):  


* Transfer \(standard ERC20 transfer function\)
* Minting and burning function, needed if using the lock/mint - burn/unlock mechanism. Needs to add the handler contract as minter/burner

An example token contract can be found here.

With either token transfer model, a token registration procedure needs to take place. As such, your project should communicate to the relayers which token contract you want to link on which chain. For example, let’s say we want to have a TACO token \(originated on Ethereum\):  
  


* TACO token Ethereum: 0x123456….
* wTACO token Moonriver: 0x987654…

Note: if you use the same private key and nonce that you used to deploy the original token contract to deploy the token contract on other chains, they will all have the same address \(which is awesome!\)  


To register the token on the bridge please send an email to the following address:  


* Moonriver: [moonriver@meter.i](mailto:moonriver@meter.io)o
* Moonbeam \(not yet available\)

### Links of interest

Chainbridge explained: [https://docs.moonbeam.network/integrations/bridges/ethereum/chainbridge/](https://docs.moonbeam.network/integrations/bridges/ethereum/chainbridge/)  


Meter Passport bridge tokens Github:

[https://github.com/meterio/token-list](https://github.com/meterio/token-list)  


Chainbridge Github: 

[https://github.com/ChainSafe/chainbridge-solidity](https://github.com/ChainSafe/chainbridge-solidity)  


Chainbridge original documentation:

[https://chainbridge.chainsafe.io/](https://chainbridge.chainsafe.io/)  


### Contact Information

For any inquiries regarding the bridge, please contact:

* Moonriver: [moonriver@meter.io](mailto:moonriver@meter.io)
* Moonbeam \(not yet available\)

For Meter passport related support questions, please use the following channels:

* Discord: [https://discordapp.com/invite/WPjTpMG](https://discordapp.com/invite/WPjTpMG)
* Telegram: [https://t.me/Meter\_IO](https://t.me/Meter_IO)

