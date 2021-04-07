# Hybrid PoV Consensus Mechanism

## Overview of Proof-of-Value Consensus Mechanism

The Meter network employs an innovative Proof of Value \(PoV\) consensus mechanism, which is a hybrid of Proof of Work \(PoW\) and Proof of Stake \(PoS\). 

The Meter system consists of two tokens: 

1. MTR, the low-volatility currency token, which is created by PoW miners.
2. MTRG, the governance token, which is used by PoS validators to validate transactions.

Unlike traditional cryptocurrencies, the Meter protocol separates the economic consensus, which determines how much new value will be added into the economy, from the record-keeping consensus, which prevents double spending. MTR represents the economic consensus while MTRG represents the record-keeping consensus.

This division of work mirrors the physical world where there are miners who extract gold or silver from the Earth and bankers who maintain the financial system. Miners and validators collaborate to make the Meter system more stable, secure, and scalable.

## Why is Proof of Value better than Proof of Work and Proof of Stake?

Most existing blockchains mix currency creation with record keeping. However, they are fundamentally two separate consensuses.

Because Meter separates these, PoW mining of MTR will consume less energy due to the economic game design, and transactions can be processed really fast with instant finality. Also some of the problems with PoS, such as the long-range attack and rich-gets-richer problems, can be avoided.

This hybrid consensus mechanism also make Meter extremely secure. In order to attack the Meter network, you will have to pass the sybil resistance for both PoW and PoS. Because transactions settle instantly in the system, it is more secure than Bitcoin or ETH which have transaction roll back issues in their PoW systems.

More details about Proof of Value can be found here: 

{% embed url="https://medium.com/meter-io/what-is-proof-of-value-consensus-meter-c47f989065fa" %}

## What is the difference between HotStuff consensus and Tendermint or Capser FFG 

[HotStuff consensus](https://arxiv.org/abs/1803.05069) is a variant of Byzantine fault-tolerant \(BFT\) consensus protocol proposed and mathematically proved by [Ted Yin](https://www.cs.cornell.edu/~tedyin/) during his internship at VMware Research in 2018.  Compared to the traditional pBFT consensus which was proposed in the 1970s, HotStuff has the following benefits:

1. Simple and elegant leader change \(censorship and network failure resistance\).  In the traditional pBFT consensus \(like Tendermint\), if the leader \(block proposer\) fails or becomes malicious, the system will not be able to reach consensus and finalize blocks.  Changing leader is extremely complicated and communication intensive.  Most implantations had to change certain assumption to avoid dealing with leader change.  For example, in Tendermint, the developer assumed that the network is strong synchrony, which means all the nodes share the same well synced global clock.  If a leader failed to reach within the time slot, all the validator nodes will move to the next round.  HotStuff based BFT has a built-in leader change algorithm.  The complexity of changing the leader is the same as creating a regular block.  Therefore, HotStuff consensus doesn't rely on the synchronized global clock.  It assumes the network is partially synchronous, meaning the network maybe jammed or partitioned from time to time but eventually become synchronized.  This brings tremendous benefit of preventing malicious nodes and censorship in the network.  ETH 2's Casper FFG is a variant of BFT consensus with a partially synchronous network assumption with the help of VRF random beacon, however it took a different trade off on liveness and consistency.  In ETH2, the system continuously generating new blocks even there are not enough validators to reach 2/3 majority and finalize the block \(the blocks are not usable as they could be reverted in the future\).  In Meter's PoV, we use PoW to generate create one source of randomness, the HotStuff consensus will halt committing new blocks if 2/3 majority is not reached.  We believe it more desirable behavior for financial applications.
2. Higher performance than pBFT.  HotStuff consensus is designed as a pipeline consensus, there are two to three blocks constantly being processed in the system at the same time.  In addition, because of the consensus doesn't have to run a synchronous mode, the consensus could be reached as quickly as the network speed allows.  Therefore the block period could be much shorter than pBFT, and variable based on the network on the node status.  In Meter we limit the smallest the block period to be 2 seconds.  The typical block period is 2 to 3 seconds.  The throughput could be 6~7 times of Tendermint
3. Less communication and data storage requirement.  Because of the pipeline implementation and BLS signature aggregation we used Meter HotStuff consensus, Meter's consensus message is o\(n\) complexity compared to the o\(n^2\) complexity in Tendermint, which means with the communication required in the current 125 committee nodes configuration in Tendermint, Meter could run 15,625 nodes.  On Meter, when there are not many transactions, the block database expected to grow at a rate of 2~3GB/month.

A more technical comparison of HotStuff, Capser FFG and Tendermint can be found at the following Link:

{% embed url="https://dahliamalkhi.github.io/posts/2018/03/bft-lens-casper/" %}

{% embed url="https://dahliamalkhi.github.io/posts/2018/04/BFT-lens-tndrmnt/" %}



