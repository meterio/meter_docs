# Configure the Full Node to Validator Node

After you Successfully starting a full node, you may want to run a validator node on the network.  **Please make sure the block height on your node (http://IPofYourNode:8670/probe) is the same as the** [**official block explorer**](https://scan.meter.io) **before proceeding.**  It may take a long time to sync all the data on the mainnet depending on your network bandwidth and CPU power.

## Become a delegate (Validator) node

Becoming a delegate node requires staking MTRG tokens. You will also need a little MTR to pay for transaction fees.

1. **Configure network ports for your node.**&#x20;

It is recommended to have a public IP address if you want to become a delegate node and have the following ports open for inbound TCP connections on your firewall or cloud network security group.

| Port Range | Functions                              |
| ---------- | -------------------------------------- |
| 9209       | PoW P2P (required)                     |
| 8332       | PoW API                                |
| 8669       | Wallet RESTful API                     |
| 8670-8671  | PoW/PoS Messages (required)            |
| 55555      | Discovery Server                       |
| 11235      | PoS P2P (required)                     |
| 8545       | Ethereum Compatible http RPC interface |
| 8546       | Ethereum Compatible ws RPC interface   |
| 9100       | node explorers                         |

&#x20; **2. Elect your node to be a candidate In Meter Wallet**

In the [Staking portal](https://staking.meter.io), you could self elect to be a candidate for delegate node by creating a "New Candidate" and stake least 2000 MTRG tokens.  The "New Candidate" diagloue box collects all the required information for your node. You will have to name your validator, put in the IP address of your node, select whether you want to system to automatically participate in the onchain MTRG auction (enable autobid) and also submit the public key used to sign the block proposals (**this is the BLS key for the node running the validator, you could find the key in $METER\_MAIN\_DATA\_PATH/public.key** file, its corresponding private key is in the master.key file)&#x20;

At launch, there is a 300 delegator nodes limit, which mean only the top 300 candidate nodes will be selected as delegates to participate in the consensus.  You could have other accounts delegate their votes to you as well to increase the chance of becoming a delegate node. The candidate transaction is recorded immediately and the node could start to receive votes. However, the votes won't be counted until the next k-block even with enough votes. You could check the list of candidate nodes through the [Staking Portal](https://staking.meter.io) or [Meter scan](https://scan.meter.io).

The votes for each validator automatically increases at 5% annualized rate to encourage validator to stay in long term. if you uncandidate and recandidate, you will lose these bonus votes. Whenever you uncandidate or unbound, it will take one week before the tokens become unbounded and transferrable.

Please be aware that the public.key file in the docker container is generated when the container is launched. If you start a container from scratch, the public.key will be different from the one you used for the "Candidate" transaction. You could either "Uncandidate" and "Candidate" again with the new public key or change the public key to the one you used before.

Your node will automatically pick up by our [Meter Scan](https://scan.meter.io) once you successfully become a candidate.

**Please be aware that the candidate transaction require tokens that are not staked**. Please use the Update button in the candidate tab for changes.  If you uncandidate you node, the staked token will be unbounded and available for withdraw after 7 days.

If a candidate receives enough votes and ranked in the top 300, it will become a delegate node. You could find the list of delegates through [http://mainnet.meter.io/staking/delegates](http://mainnet.meter.io/staking/delegates)

## Jailing

Meter has a variable block period with a minimum of 2 seconds.  For every block, a validator nodes in the active consensus committee is elected randomly to be the leader to propose and gather votes.  If the node fails to propose the block, the committee will fall to the next node.  Therefore, a misbehaving node may introduce time out in the network.  To remove misbehaving nodes from the consensus group, we introduced a jailing mechanism.  If a node misses more than two proposals in 2 epochs in the past 8 epochs, double signs or fail to start an epoch, it will be jailed (or removed from the consensus group).  The cost of bailing out a node on the main net is 10 MTRG.

## Uncandidate

If you no longer want to validate in the network, you will have to choose Uncandidate in the Meter wallet first.  **Keep the node running until the end of an epoch (about 1 hour) before turning it off to avoid impacting the network performance.**
