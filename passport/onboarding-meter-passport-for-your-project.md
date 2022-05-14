# Onboarding Passport for Your Project

The primary purpose of this document is to provide guidelines for projects on how they can onboard their tokens to the Meter Passport bridge and start transferring assets to/from Moonbeam/Moonriver.\


The document is divided into the following sections:

* Roadmap of the onboarding process
* Which token model to use
* Deploying wrapped token representation
* Register tokens on the bridge
* Technical limitations
* Security concerns
* Contact information

### Roadmap of the Onboarding Process

The roadmap of onboarding your token to the bridge is the following:\


* Decide which token model to use
* Deploy the wrapped token contract on the destination chain
* Register the tokens

The following sections go through each of the steps.

### Decide which token model to use

There are two main possibilities for transferring tokens from one chain to another: the lock-unlock mechanism and the lock/mint - burn/unlock mechanism. In both models, tokens in the destination chain are typically called “wrapped representations” of the original tokens.\


Each model has pros and cons in terms of user experience, setup, token accountability, and security. You can read more about each token model in the [Technical Guidelines](technical-guideline-for-meter-passport.md) document.\


The token model you decide defines the smart contract you’ll need to deploy for the wrapped token representation for the destination chains.\


### Deploy the wrapped token representation

Once your team has decided which token model to use, you’ll need to deploy the smart contract to the destination chain, in this case, Moonriver/Moonbeam. At its core, it doesn’t matter what EIP the token is based on, as long as it complies with the following ERC20 token functions (you could also send a request to the Meter Passport team (email [moonriver@meter.io](mailto:moonriver@meter.io) to deploy a [preset ERC20 contract](https://github.com/meterio/chainbridge-solidity-v1.0.0-eth/blob/master/contracts/ERC20Safe.sol) for you if there are no customized functions needed:\


Origin chain (original tokens):

* Transfer (standard ERC20 transfer function)

Destination chain (wrapped representation):\


* Transfer (standard ERC20 transfer function)
* Minting and burning function, needed if using the lock/mint - burn/unlock token mode. Needs to add the handler contract as minter/burner

If you use the same private key/nonce as for your original token contract, the wrapped representation will have the same address (which is pretty cool!).\


You’ll have to provide the token address to the Meter Passport team to register the asset on the bridge.

### Register the tokens on the bridge

With the smart contracts deployed, both in the origin (original token contract) and destination (wrapped token contract) chains, the next step is to register them in the bridge’s smart contract and front-end interface.\


To do so, please send the following information to moonriver@meter.io (Moonbeam is not yet available):\


* Team Name/Website
* Github link of the original token contract, must live under the team’s official Github repository
* Github link of the wrapped token contract, must live under the team’s official Github repository
* Address of the original token contract, specifying in which blockchain it is deployed (for example: “Ethereum: 0x12345….”
* Address of the wrapped token contract, specifying in which blockchain it is deployed (for example: “Moonriver: 0x98765….”
* Logos and names that your team wants to use for each of the tokens

### Technical limitations

Currently, Meter Passport is based on a slightly modified version of ChainSafe’s Chainbridge. The bridge offers a generic handler contract that can carry out any action in the destination chain, passed as bytes in the event emitted on the origin chain. However, interacting with the generic handler requires allocating resources to adapt the use case to the contract’s interface.\


Therefore, the bridge offers two other handlers: one for the basic ERC20 token standard and one for the ERC721 token standard. Currently, the Meter Passport bridge works with ERC20 token standard only. Thus, to transfer tokens through the bridge, they must comply with a basic ERC20 token interface and, depending on the token model chosen, have mint/burn capabilities.\


Currently, Meter Passport uses 25 block confirmations for all transactions on Ethereum.  Therefore, a transfer out of Ethereum typically takes 6 to 10 minutes after the bridge deposit transaction is confirmed, while a transfer to Ethereum takes around the same time.  From time to time when Ethereum is highly congested and the gas price changes dramatically in a very short time period, transactions may take longer to complete.  Feel free to direct the users to the Meter telegram channels if they run into any transfer related issues.  \


Another current limitation of the bridge is the gas consumption. The transaction that the user will send in the origin chain, which initiates the subsequent chain of events, costs around 280000 gas units (gas units\* gasPrice is the total transaction cost for the user). The total cost on the destination chain (including all the transactions that the bridge mechanism needs by design) is around 730000 gas units.\


Meter team is working on a new release that should dramatically reduce gas consumption.&#x20;

### Security concerns

The Meter Passport bridge runs with a set of trusted relayers that relay messages between EVM-compatible blockchains. These messages subsequently transfer assets between chains (wrapped tokens representing the original token). \


The bridge works with a multisig mechanism to prevent single relayers from abusing the system. Proposals (actions to be executed on the destination chain) are executed only if a signature threshold is achieved. Meter Passport works with a 3/5 threshold.\


Therefore, the main security concern of this bridging mechanism is that it relays in a semi-centralized set of relayers and not a fully decentralized model. But, due to how the contracts work, as the number of relayers and multisig threshold increases, the gas consumption on the destination chain increases.\


Meter Passport is currently secured by [Protofire](https://protofire.io/), [Hashquark](http://hashquark), [InfinityStones](https://infinitystones.io/), [Wetez](https://www.wetez.io/) and the [Meter team](https://www.meter.io/). It is aimed to be a shared secure infrastructure for various blockchains and multichain dApps. 3 out of 5 the relayers group were securing the Avalanche-Ethereum Bridge with more than $300M value locked on the bridge and the other relayers are highly reputable staking service providers validating on Polkadot, BSC, Cosmos, and many other PoS networks.  The Ampleforth team has leveraged Meter Passport to launch its multi-chain AMPL. The Meter team is working on a threshold signature based implementation that supports an unlimited number of relayers for a higher level of security.  \


### Contact information

For any inquiries regarding the bridge, please contact:\
\


* Moonriver: [moonriver@meter.io](mailto:moonriver@meter.io)
* Moonbeam (not yet available)

If you have any questions related to Moonbeam/Moonriver, please use the following channels:\


* Discord: [https://discord.gg/PfpUATX](https://discord.gg/PfpUATX)
* Telegram: [https://t.me/Moonbeam\_Official](https://t.me/Moonbeam\_Official)

For Meter passport related support questions, please use the following channels:

* Discord: [https://discordapp.com/invite/WPjTpMG](https://discordapp.com/invite/WPjTpMG)

Telegram: [https://t.me/Meter\_IO](https://t.me/Meter\_IO)
