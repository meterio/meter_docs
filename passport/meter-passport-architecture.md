# Meter Passport Architecture

_**NOTE:** The current version of Meter Passport is V1.5_

One of Meter's goals is maximizing interoperability with other public blockchains.  Meter Passport is a multi-chain router that enables smart contracts to both transfer assets and communicate across blockchains.

It can transfer native tokens, and tokens in various token standards like ERC20, ERC721, ERC1155 in addition to passing arbitrary generic messages between blockchains.

<figure><img src="https://lh4.googleusercontent.com/B-qCAiDrSm2Qiq3HlLnU-K2iIjF8XbdcUN17VXw5e38icYwVmWuU4F8czihjKLJbYWiUP2mWVNetFfvHp5lZQLHd5ZpzkJMqIR1ARd8k0MQDG_r1-sinSf3tnbLINgMqlt7CQvfncv2tDUfCfre2jmfjmaY2LgtxMZ0LCxCRcbHdsdv6mGch85HjL05R" alt=""><figcaption></figcaption></figure>

The overall Architecture is as follows;

A user transferring tokens from ChainA to ChainB, first deposits the tokens into the bridge contract of ChainA. The contract locks the tokens on ChainA, emitting an event once deposit is successful.

The relayers, off-chain operators of the system, will listen to these events and create a relay transaction to the relay chain. The Relayers will sign the data of the deposit and submit their signatures on the relay chain. Once the threshold is met, one of the relayers or any user can collect all the signatures and send them to Chain B. The smart contract on ChainB will validate again all the signatures and the deposit data and then release the fund on ChainB.

The initial implementation of Meter Passport was further developed on top of Chainsafe's multisig based v2 bridge contract.  Operational wise it is secured by five relayers including Protofire, Harshquark, Wetez, InfinityStones, and Meter Foundation. &#x20;
