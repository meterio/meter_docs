# MTR - The Metastable Coin

## What is MTR?

Meter Stable \(MTR\) is the unit of account and medium of exchange of the Meter network. It is a fully-decentralized, permissionless, low-volatility cryptocurrency that is created using SHA256 Proof of Work, the same method used by Bitcoin. 

Meter uses the cost of production and the PoW miners’ arbitraging behavior to establish a long-term equilibrium price for the market. This equilibrium price essentially anchors MTR to the global competition of electricity prices, which is more stable in real value than any fiat currency, based on historical data \(from 1960 to now electricity price went up 6.3x when measured by USD, but stayed the same after adjusted by inflations\).

![US Electricity Price Measured by USD vs Adjust for Inflations](.gitbook/assets/image%20%282%29.png)

The supply of MTR is uncapped.  Miners will expand the supply when there is more demand for MTR based on usage and the internal MTRG auction process will continuously remove MTR from circulation. This makes the value of MTR neither deflationary or inflationary in the long run.

## What is MTR used for?

Externally, MTR can be used to make everyday payments and as a store of value. 

In the Meter network, MTR is used to pay transaction, gas, and storage fees to PoS validators who approve transactions.

Additionally, MTR can be converted to MTRG through a competitive bidding process. In Bitcoin, the miners directly use their hash power to compete for the newly created Bitcoins. In Meter, the miners first convert their hash power into mining credits \(MTR\) and use MTR to compete for MTRG.  Please refer to the "[On-Chain Auctions](on-chain-auctions.md)” section for more information.

## How is Meter different than other stablecoins?

Meter solves many of the issues that existing stablecoins face. 

Fiat-backed stablecoins like USDT and USDC are centralized and thus are subject to regulatory restrictions. 

Crypto-backed stablecoins like DAI first have capacity issues.  The cryptocurrency used as collaterals could only be a small percentage of the its circulation to avoid avalanche crashes during the liquidation scenarios.   They also have to rely on oracles which are typically centralized \(there are only limited sources of high quality data\).  If the oracle provides wrong data \(could be as simple as a software/hardware glitch\), the entire financial system may fail.  This maybe too much of systematic risk for the most fundamental building blocks of a financial system. 

Meter's full decentralization and permissionless nature is designed to avoid such systematic risks. It gives up strong pegging to USD, but maintains a long term purchasing power stable value and eliminates counter-party, regulatory, and oracle risks typically found with crypto- and fiat-backed stablecoins.

Read more here: [https://www.meter.io/why-meter-is-different-than-other-stablecoins/](https://www.meter.io/why-meter-is-different-than-other-stablecoins/)

## How does MTR maintain stability?

Each MTR is created with 10 kWh of electricity using SHA256 Proof of Work, the same method used by BTC. 

Miners’ profit chasing behavior will drive the coin to the cost of global competitive electricity price, which is more stable in purchasing power than any fiat currency in the world. When the price of MTR goes up, miners, who are profit-driven, will allocate more of their mining equipment to mining MTR; when the price of MTR decreases, they will point their mining equipment to other PoW chains. 

Their actions will cause the Meter block reward to elastically change in response, which will bring the price of MTR back to its equilibrium or competitive state. 

In Bitcoin, miners use hash power to directly bid on newly created BTC. The block reward is constant, but the price is not. In Meter, miners convert their hash power to mine MTR, where the price is constant but block rewards are variable based on total network hash power. 

We expect the long term sustainable market equilibrium to be in the 0.6 to 1.25 USD range for MTR to be continuously created.  Once the MTRG on-chain auction starts, even the MTR price drops, the auction consumptions will remove any surplus MTR from circulation and bring the price to the sustainable range. The system it will be more stable as it grows. 

Meter has a [reserve mechanism](the-meter-reserve.md) to account for larger price fluctuations.

