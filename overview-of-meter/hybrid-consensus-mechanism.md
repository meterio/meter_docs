# Hybrid PoV Consensus Mechanism

## Overview of Proof-of-Value Consensus Mechanism

The Meter network employs an innovative Proof of Value \(PoV\) consensus mechanism, a hybrid of Proof of Work \(PoW\) and Proof of Stake \(PoS\).

The Meter system consists of two tokens:

1. MTR, the low-volatility meta-stable token created by PoW miners.
2. MTRG, the governance token used by PoS validators to validate transactions.

Unlike traditional cryptocurrencies the Meter protocol separates the economic consensus from the record-keeping consesus. The economic consensus determines how much new value will be added to the economy whereas the record-keeping consesus prevents double spending. In the Meter system MTR represents the economic consesus while MTRG represents the record-keeping consensus.

This division of work mirrors the physical world where miners extract gold or silver from the Earth while bankers maintain the financial system. Miners and validators collaborate to make the Meter system more stable, secure, and scalable.

## Why is Proof of Value better than Proof of Work and Proof of Stake?

Most existing blockchains mix currency creation with record keeping despie them being fundamentally two separate consensus.

The advantages of seperating the two are as follows:

1. PoW mining of MTR consumes less energy due to the economic game design
2. Transactions are processed extremely quickly with instant finality.
3. Traditional problems with PoS such as long-range attacks and the 'rich-get-richer' problem can are avoided.

The hybrid consensus mechanism makes Meter extremely secure. In order to attack the Meter network you would be required to pass the sybil resistance for both PoW and PoS. Since transactions settle instantly in our system it is more secure than Bitcoin or Ethereum where transaction roll back problems exist.

More details about Proof of Value can be found here:

{% embed url="https://medium.com/meter-io/what-is-proof-of-value-consensus-meter-c47f989065fa" caption="" %}

## What is the difference between HotStuff consensus and Tendermint or Capser FFG

[HotStuff consensus](https://arxiv.org/abs/1803.05069) is a variant of Byzantine fault-tolerant \(BFT\) consensus protocol proposed and mathematically proven by [Ted Yin](https://www.cs.cornell.edu/~tedyin/) during his internship at VMware Research in 2018. Compared to the traditional pBFT consensus proposed in the 1970s HotStuff has the following benefits:

1. Simple and elegant leader change \(censorship and network failure resistance\). In traditional pBFT consensus like Tendermint if the leader \(block proposer\) fails or becomes malicious the system will not be able to reach consensus and finalize blocks. Changing leader is extremely complicated and communication intensive. Most implementations have had to change certain assumptions to avoid dealing with leader change. In Tendermint, for example, the developer assumed that the network has strong synchrony \(meaning all the nodes share the same well-synced global clock\). If a leader fails to reach consensus within the time slot all the validator nodes will move to the next round. HotStuff-based BFT has a built-in leader change algorithm. The complexity of changing the leader is the same as that of creating a regular block. One of the advantages of HotStuff consensus is that it doesn't rely on the synchronized global clock. It assumes the network is partially synchronous, meaning the network may be jammed or partitioned from time to time, but will eventually become synchronized. This brings the tremendous benefit of preventing malicious nodes and censorship in the network. ETH 2's Casper FFG is a variant of BFT consensus with a partially synchronous network assumption with the help of the VRF random beacon. This however requires a different trade off of liveness and consistency. In ETH2 the system continuously generates new blocks even though there are not enough validators to reach a 2/3 majority and finalize the block \(the blocks then become unusable as they could be reverted in the future\). In Meter's PoV we use PoW to create a source of randomness, while the HotStuff consensus halts committing new blocks if 2/3s majority is not reached. This is much more desirable behavior for financial applications.
2. Higher performance than pBFT, HotStuff consensus is designed as a pipeline consensus. This means the system processes two or three blocks at the same time. Since HotStuff doesn't have to run a synchronous mode it is able to reach consensus as quickly as the network speed allows. Therefore the block period can be much shorter than pBFT and be variable based on the network on the node status. Meter limits the smallest the block period to be 2 seconds, with the typical block period being 2 to 3 seconds. The throughput potential is 6~7 times that of Tendermint

A more technical comparison of HotStuff, Capser FFG and Tendermint can be found at the following Link:

{% embed url="https://dahliamalkhi.github.io/posts/2018/03/bft-lens-casper/" caption="" %}

{% embed url="https://dahliamalkhi.github.io/posts/2018/04/BFT-lens-tndrmnt/" caption="" %}

1. Less communication and lower data storage requirements.  The pipeline implementation and BLS signature aggregation we used in Meter's HotStuff consensus means Meter's consensus message is o\(n\) in complexity compared to the o\(n^2\) complexity in Tendermint. With the communication required for the current 125 committe node configuration in Tendermint Meter would be able to run 15,625 nodes - a

This means the communication required in the current 125 committee nodes configuration in Tendermint Meter could run 15,625 nodes - an increase of over 12,000%. Using Meter's current transaction volume the block database is expected to grow at a rate of 2~3GB/month.

A more technical comparison of HotStuff, Capser FFG, and Tendermint can be found [here](https://dahliamalkhi.wordpress.com/2018/03/13/casper-in-the-lens-of-bft/).

