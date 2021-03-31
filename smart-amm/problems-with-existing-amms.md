# Problems with Existing AMMs

Most of today’s Automated Market Makers \(AMMs\), including Uniswap, Balancer, and many others, operate on a constant product market maker \(CPMM\) model. 

This means that for any liquidity pool, a simple equation - _x\*y=k_ - determines the price of each asset in that pool. We won’t go deep into the mechanics but if you would like to read more about how the CPMM model works, check out this [Medium post](https://medium.com/dragonfly-research/what-explains-the-rise-of-amms-7d008af1c399#b183).

The CPMM model exposes LPs to two types of potential profit loss.

First, LPs are exposed to loss because of the 50/50 constantly-rebalancing portfolio composition, which may be completely different from their target portfolio. For example, when an LP provides 1 ETH and $340 to a pool \(assuming that is the price of ETH when adding liquidity\), the AMM will automatically sell a portion of ETH to USDT as ETH price appreciates to $380. In this case, the LP is better off holding the original position than providing liquidity to the pool.

Second, LPs are exposed to losses by arbitrage. This problem is especially serious in a big pool. Imagine the price of ETH suddenly increases from $340 to $380 on a centralized exchange. However, the Uniswap ETH/USDT pool is completely blind to this information and still quotes $340 per ETH. In the Uniswap pool, it would take $23M to move the price from $340 to $380, and this would open a big window for arbitrageurs to take profit from the pool’s LPs. This loss is actually a permanent loss instead of “impermanent loss”.

Recently there are many new DEXs like Sushiswap trying to introduce tokens as a transaction fee-sharing mechanism.  The ugly truth is that providing liquidity is often a money-losing business without this token subsidy, and there is fundamentally no real profit to be shared with token holders.

