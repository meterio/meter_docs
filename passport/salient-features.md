# Salient Features

### Meter Network as Relay Chain

With Meter Passport V1.5, **Meter Network is now used as the relay chain** with a signature collection contract deployed on Meter for the relayers to vote.&#x20;

Compared to other EVM chains, the **instant finality** behavior on Meter Network **makes it an ideal Relay Chain**. Every transaction in the block is 100% finalized, introducing **minimal delay** and ensuring **certainty** to the cross-chain transactions.

### Lower Bridging Cost

The new relay chain design significantly **reduces the operational overhead** for the relayers. They just have to listen to the transactions on multiple networks and send transactions on the Meter network.

Once a proposal passes on the relay chain, only one transaction is needed on the destination chain to complete the bridging process.

### Increased Relayer Uptime

The addition of dual RPC endpoints for the relayers further **increases the Relayer uptime**. Such design allows more Relayers to join the cross chain validation and makes the process more secure and censorship resistant.

### Increased Liveness

As long as there are enough relayers online to sign cross-chain transactions on the relay chain, **anyone could submit the relayers’ signatures directly** on the destination Chain. These will dramatically enhance the liveness and usability of the bridge.

We believe the relay chain voting approach is almost as efficient as the ECDSA threshold signature based approach in terms of gas cost, but provides significantly better liveness, fully transparency, and more security to the users.
