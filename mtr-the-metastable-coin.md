# MTR - The Metastable Coin

## What is MTR?

Meter Stable \(MTR\) is the unit of account and medium of exchange for the Meter network. It is a fully-decentralized, permissionless, low-volatility cryptocurrency that is created using SHA256 Proof of Work, the same method used by Bitcoin. 

Meter uses the cost of production and the PoW miners’ arbitraging behavior to establish a long-term equilibrium price for the market. This equilibrium price anchors MTR to the competitive global electricity price which is more stable in value than any fiat currency based on historical data. Between 1960 and 2021 electricity prices went up 6.3x when measured in USD, but stayed the same after adjusting for inflation.

![US Electricity Price Measured by USD vs Adjust for Inflations](.gitbook/assets/image%20%282%29.png)

The supply of MTR is uncapped.  When demand is higher miners will expand the supply whereas when demand is lower the internal MTRG auction process wil continually remove MTR from circulation, reducing supply. This makes the value of MTR neither deflationary nor inflationary.

## What is MTR used for?

Externally MTR can be used to make everyday payments and as a store of value. 

On the Meter network MTR is used for transaction payments, gas, and storage fees PoS validators receive for approving transactions.

MTR may also be converted to MTRG through a competitive bidding process. In Bitcoin the miners use their hash power to directly compete for the newly created Bitcoins. In Meter the miners first convert their hash power into mining credits \(MTR\) and then use the MTR to compete for MTRG.  Please refer to the "[On-Chain Auctions](on-chain-auctions.md)” section for more information.

## How is Meter different than other stablecoins?

Meter solves many of the issues that existing stablecoins face. 

Fiat-backed stablecoins like USDT and USDC are centralized and are thus subject to regulatory restrictions, while crypto-backed stablecoins like DAI face capacity challenges. 

The cryptocurrencies used as collateral may only be a small percentage of circulating supply in order to avoid avalanche crashes during liquidation scenarios. They must also rely on oracles which are typically centralized since there are limited sources of high quality data.  If the oracle provides wrong data something as simple as a software/hardware glitch could cause the entire financial system to fail. This is a far too systemic risk for the most fundamental building blocks of a financial system. 

Meter's true decentralization and permissionless nature is designed to avoid such systemic risks. By giving up the USD peg MTR maintains long term purchasing power and stable value. This also eliminates counter-party, regulatory, and oracle risks typically found in crypto and fiat-backed stablecoins.

Read more[ here](https://medium.com/meter-io/meter-why-we-are-different-7cd94ea6eead).

## How does MTR maintain stability?

Each MTR is created with 10 kWh of electricity using SHA256 Proof of Work, the same method as BTC. 

Miners’ profit chasing behavior ties the cost of global competitive electricity price to the value of MTR. This creates more stable purchasing power than any fiat currency in the world. When the price of MTR goes up profit-driven miners will allocate more of their mining equipment to mine MTR; when the price of MTR decreases they will point their mining equipment to other PoW chains. 

The miners actions cause the Meter block reward to elastically change in response which brings the price of MTR back to its' state of competitive equilibrium. 

In Bitcoin miners use hash power to bid on newly created BTC. The block reward is constant, but the price is not. In Meter miners convert their hash power to mine MTR, where the price is constant but block rewards are variable based on total network hash power. 

We expect the long term sustainable market equilibrium to be in the 0.6 to 1.25 USD range for MTR to be continuously created.  Once the MTRG on-chain auction starts even if the price of MTR drops the auction consumptions will remove any surplus MTR from circulation and bring the price back to the sustainable range. The stability of the system is ever increasing as it grows.

Meter has a [reserve mechanism](the-meter-reserve.md) to account for larger price fluctuations.

