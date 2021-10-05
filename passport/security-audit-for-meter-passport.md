# Security Audit for Meter Passport

The v1 version of Meter Passport is forked from Chainsafe chainbridge v1, which was audited by Consensys.  The audit report can be found [here](https://consensys.net/diligence/audits/private/adash47d-chainbridge/).

The changes made by Meter Passport were intentionally limited to the peripherals of the Chainbridge smart contracts to ensure the original security parameters were intact.  

The changes include:

1. Automatically wrapping and unwrapping native gas tokens, for example converting betwen ETH and WETH.
2. Configuring different bridge fees based on source and destination networks
3. Configuring different proposal expiration block count to accommodate various block speed on different networks

The changes have been thoroughly peer-reviewed by other teams who are familiar with the Chainbridge implementation including the Ampleforth team.  An official security report will be posted later when it is published.

The relayers running Meter Passport are: Protofire, Hashquark, InfinityStones, Wetez, and Meter.  3 out of the 5 relayers were previously running the original Avalanche-Ethereum bridge, which was also based on Chainbridge and had more than $300M TVL with no security incidents.  They are also running validator nodes on various other networks including Binance Smart Chain, Polkadot, Polygon, Avalanche, Meter, and Fantom.

