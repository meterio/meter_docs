# How Smart AMM Uses Uniswap Oracle

Since Uniswap is the main onchain source for arbitrages, Uniswap price is extremely important.  However Uniswap price generated within the same block is considered unsafe due to potential flash loan attacks.  Uniswap V2 therefore introduced a [PriceCumulative oracle](https://uniswap.org/docs/v2/core-concepts/oracles/).  Unfortunately Uniswap only provides the price cumulative for the last trade.  Oracle users have to build history of the price cumulative to create the time weighted average price. 

Smart AMM uses the Uniswap price cumulative last time when smart AMM was called and the current price cumulative to calculate time weighted average price from Uniswap.

