---
description: >-
  Here are details about how MTRG staking works and a tutorial on how to stake
  with the Meter wallet.
---

# Staking MTRG

#### As part of the dual chain infrastructure, Meter Network leverages the Proof-Of-Stake chain for record keeping consensus. The key purpose of staking is to secure the Meter Network against Sybil attacks. &#x20;

Community users not planning on running a full-node can leverage staking solution to secure the Network while ensuring that their MTRG is non-dilutive.&#x20;

## Brief Background

#### **Edison Mainnet Launch**

July 4, 2020 (Functional mainnet without Staking and on-chain MTRG auctions). Nodes are run by the Meter Foundation

Further Reading: [Edison Mainnet Launch](https://medium.com/meter-io/the-meter-mainnet-is-now-live-3d0a4a1e1174)

**Tesla Mainnet Launch**

March 19, 2021 (Fully functional Mainnet with Staking and On-chain MTRG auctions). Node Operations are open to the community.

Further Reading: [Tesla Mainnet](https://medium.com/meter-io/the-meter-mainnet-is-now-live-3d0a4a1e1174)

**Staking Launch Block height on Mainnet:** 9,470,000

## Important Information

### **Minimum Staking Amount**&#x20;

100 MTRG

### **Staking Applications**

Meter Network supports web staking with [staking.meter.io](https://staking.meter.io/) as well as staking on Meter Desktop wallet

\*Meter Desktop wallet will be sunset gradually and no longer be maintained. It is available to download on Meter.io homepage (section “Meter Desktop Wallet at the bottom of the page)

### **Staking Rewards**

Staking rewards are sourced from the annual network emission and are provided every 24 epochs (typically 24 hours) to the address staking on the Meter Mainnet.

\*_Users can DM “/staking (wallet address)” to @MeterValidatorBot on Telegram to get daily messages when their wallet receives the staking rewards. Users lose potential rewards only when the candidate they have delegated gets jailed._

### **Staking Reward Token**

Community can earn either MTRG or MTR through the staking program.

### **Network Emission Rate**

Annual 5% (this can be changed through governance). Current Annual Inflation is available on [scan.meter.io](https://scan.meter.io/) .&#x20;

Daily emission available here: [Meter on-chain auctions](https://scan.meter.io/auction)

### **Circulating Supply**

Circulating Supply includes the daily emission of MTRG through the network inflation required to secure the network. Current Circulating supply is available on [scan.meter.io](https://scan.meter.io/) .

### **Consensus Committee Size**

A consensus committee size determines how many Node Operators will take part in the record keeping consensus every epoch. **Only the validators active in the consensus committee for the epoch earn staking rewards for that epoch.** The current committee size of Meter Mainnet is 500 nodes enabled by the highly performant HotStuff Consensus capable of supporting 1000s of nodes. This is in start contrast to other BFT consensus mechanisms supporting 100s of nodes.

### **Staking Ratio**

The proportion of circulating supply of MTRG that is staked. Current Staking Ratio is available on [scan.meter.io](https://scan.meter.io/) homepage.

### **Staking Returns**

Annual inflation rate divided by Staking Ratio

As on June 27, 2022:

Staking Ratio — 48.31%,

Annual Inflation — 5%

Staking Returns — 10.35%

Current Staking Ratio and Annual Inflation available on [scan.meter.io](https://scan.meter.io/) homepage.

## **General Definitions**

### Buckets/ Vote ID

MTRG staking is done via “buckets/ Vote ID” which includes a specific amount of MTRG the community users want to stake.&#x20;

### Candidate

The node operators with whom the user would like to delegate their MTRG tokens. You can choose a bucket either to vote for your own validator candidate nodes (the top 500 validator nodes by votes can participate in the consensus currently) or other candidate nodes.

### Unbound

In order to withdraw MTRG stake from the staking application, the user must 'unbound' the bucket and then wait for a period of 7 days and at the end of the epoch, MTRG will be available in the user's wallet.

### Bonus Votes&#x20;

Bonus votes are MTRG votes accrued to the bucket/ Vote ID to incentivize long term staking on the Network. The longer a user stakes, the more votes the user bucket/ vote ID will accrue. The accumulation rate is 5% annually based on the 7 day unbounding period.

### Add More/ Partial Unbound

Users will be able to increase the bucket size by any amount of MTRG available in their account. The functionality to reduce the bucket/ Vote ID size is under development. Currently, users will have to unbound and completely withdraw the entire bucket.&#x20;

### Undelegate

Users have to ability to change the candidate they have delegated to at any time. This is particularly helpful when the Node on which MTRG is delegated is not performing well (jailed multiple times) leading to loss of rewards for the delegator or the delegator wishes to move to a Node Candidate with lower commission or starts their own node.

### Commission

The commission percentage is the portion of Delegator rewards shared with the node operator for the ability to participate in record-keeping consensus. Currently, the maximum commission charged is 10%

### Auto Bid

New emitted MTRG is earned by the delegators through the [on-chain auctions](../../overview-of-meter/on-chain-auctions.md). The brief staking rewards process is as below;

1. Delegators/ Node Operators earn MTR rewards every epoch for participating in record keeping consensus. These MTR are sourced from previous days' auction process
2. If auto-bid is selected by the delegator on their bucket/ Vote ID, MTR received is deposited in the duction auction to bid for newly emitted MTRG on the current day
3. At the end of 24 epochs, Delegators get the MTRG based on the MTR submitted in to the Dutch auctions
4. If auto-bid is not selected by the delegator on their bucket/ Vote ID, the delegators receives MTR as the reward for the day

## &#x20;Tutorials

{% content-ref url="how-to-stake-mtrg/" %}
[how-to-stake-mtrg](how-to-stake-mtrg/)
{% endcontent-ref %}

{% content-ref url="how-to-stake-incremental-mtrg.md" %}
[how-to-stake-incremental-mtrg.md](how-to-stake-incremental-mtrg.md)
{% endcontent-ref %}

{% content-ref url="how-to-undelegate-mtrg.md" %}
[how-to-undelegate-mtrg.md](how-to-undelegate-mtrg.md)
{% endcontent-ref %}

{% content-ref url="how-to-unbound-mtrg.md" %}
[how-to-unbound-mtrg.md](how-to-unbound-mtrg.md)
{% endcontent-ref %}

## FAQs

{% content-ref url="frequently-asked-questions.md" %}
[frequently-asked-questions.md](frequently-asked-questions.md)
{% endcontent-ref %}

