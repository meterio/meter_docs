# Frequently Asked Questions

### Basics

#### Where do I stake on Meter Mainnet? <a href="#92fd" id="92fd"></a>

Users can leverage Web staking with MetaMask on [staking.meter.io](https://staking.meter.io/). Existing users can continue using Meter Desktop Wallet to stake MTRG.

#### **What is the staking APY?** <a href="#3ab0" id="3ab0"></a>

The staking APY is variable. Staking APY = (Annual Inflation %) divided by (staking ratio %). While the annual inflation can only be changed through governance, the staking ratio fluctuates based on addition/ removal of MTRG from staking. Annual Inflation and Staking Ratio is available on scan.meter.io homepage.

> As on June 27, 2022: Staking Ratio — 48.31%, Annual Inflation — 5%
>
> Staking Returns — 10.35%

#### How long can I stake? <a href="#36ff" id="36ff"></a>

Staking is non-custodial and the user can stake as long as he wishes. Staked tokens are locked. The tokens can be unlocked through the ‘unbound’ process in 1 week

### Prerequisites

#### What is the minimum number of MTRG required for Staking? <a href="#84c0" id="84c0"></a>

100 MTRG

#### How much MTR is required for staking transactions? <a href="#97f3" id="97f3"></a>

Around 0.3 MTR should suffice for over 8–10 staking transactions

#### I do not have MTR for transaction fees, is there a faucet? <a href="#0a80" id="0a80"></a>

Users can perform gasless swap on Meter Mainnet using ‘wallet.meter.io/swap’

### Bridging

#### I have MTRG on Ethereum/ Binance Smart Chain, How can I stake? <a href="#5931" id="5931"></a>

Transfer the funds through passport.meter.io to stake on Meter Mainnet. User can leverage the guide here — [How to bridge](https://docs.voltswap.finance/how-to-bridge-funds/meter-mainnet)

### Wallets

#### Which wallets are supported for staking <a href="#9a53" id="9a53"></a>

Web Wallets — MetaMask, Wallet Connect

Application — Meter Desktop Wallet

#### Does staking support Cold wallets? <a href="#210a" id="210a"></a>

Staking through MetaMask can be done through cold wallets like Ledger. Meter Desktop Wallet does not support cold wallets.

### Staking

#### How do I choose a candidate? <a href="#c21d" id="c21d"></a>

Typical criteria for choosing candidates is uptime or commission. All candidates on Meter have had historically very high uptime. User can choose any candidate from the list of available candidates. A good practice would be to get rewards notifications from Meter Validator bot to keep an eye on the rewards received every 24 epochs.

#### Do we enable Auto-bid? <a href="#7e90" id="7e90"></a>

Yes, Enable Auto-bid provides users with MTRG as staking rewards. When Auto-bid is not enabled, users receive MTR (Metastable gas token) as staking rewards.

#### What is ‘Enable Auto-bid? <a href="#b5a0" id="b5a0"></a>

Daily emitted MTRG through 5% Network inflation are distributed to the stakers through the on-chain auction process. (See [Meter Docs](https://docs.meter.io/overview-of-meter/on-chain-auctions) for more information).

### Staking Rewards

#### How often does one get staking rewards? <a href="#7034" id="7034"></a>

Staking rewards are distributed every 24 epochs (typically 1 day) to the address staking on the Meter Mainnet.

#### Do I receive MTR or MTRG as staking rewards? <a href="#c90f" id="c90f"></a>

This depends on whether “Enable Auto-bid” has been checked on the Vote ID or not. Users receive MTRG when “Enable Auto-bid” is checked, else they will receive MTR (Metastable gas token)

#### How do I check the MTRG earned through staking? <a href="#f5d4" id="f5d4"></a>

Users can DM “/staking (wallet address)” to @MeterValidatorBot on Telegram to get daily messages when your wallet receives the staking rewards

#### How are staking rewards calculated? <a href="#1d11" id="1d11"></a>

Staking rewards can be approximately calculated as below;

**Annual:**

Number of MTRG staked x Annual Inflation / Staking Ratio x (1 minus Candidate Commission rate)

For e.g.: 1000 MTRG x 5% /48.31% x (1 minus 10%) = 93.15 MTRG

**Daily:**

Annual Staking Rewards / 365

For e.g.: 93.15 MTRG / 365 = 0.26 MTRG

#### Does Meter Mainnet support auto-compounding of rewards? <a href="#8e34" id="8e34"></a>

No, Meter Mainnet currently does not support auto-compounding. Next best option is to use the “Add More” option on the existing Vote ID periodically to increase the rewards.

#### Can I lose staking rewards? <a href="#677e" id="677e"></a>

Yes, delegators can lose potential staking rewards if the candidate they delegated to is jailed. Validators typically bail out the nodes from the jail after fixing issues so that they can continue earning staking rewards. If your validator has not bailed out, user can “undelegate” from current candidate to choose a new candidate.

### Vote ID/ Buckets

#### What are bonus votes on my Vote ID? <a href="#0cc0" id="0cc0"></a>

Bonus votes increase at the rate of 8% per annum and incentivize long term staking. The weight of user stake increases by the bonus votes during staking rewards distribution.

#### Can I multiple Vote IDs (buckets) on the same account/ address? <a href="#2daf" id="2daf"></a>

Yes, you can create multiple Vote IDs (buckets) on the same account adhering to the constraint of 100 MTRG per Vote ID. Users looking to diversify their stake against loss of staking rewards from jailed nodes can use the option. Almost all nodes on Meter Network have very high uptime.

### 'Vote More'

#### Is there minimum number of MTRG that I can add to an existing Vote ID? <a href="#a523" id="a523"></a>

No, there is no minimum no. of MTRG that the user can add to an existing Vote ID. User can add any amount to the Vote ID up to the MTRG available in the wallet.

### 'Undelegate' and 'Unbound'

#### Do I need to undelegate before unbounding? <a href="#5de0" id="5de0"></a>

No. Unbounding without Undelegating will enable users earn staking rewards during the unbound period of 1 week.

#### The unbound timer says ‘Matured x minutes ago’ but MTRG is still locked, should I unbound again? <a href="#e16d" id="e16d"></a>

No, MTRG is locked in staking until the end of current epoch when the unbound timer ends. This may take up to 1 hr depending on when the unbound timer has ended. Please wait until end of epoch to get the MTRG unlocked. Clicking ‘Unbound’ again will reset the timer to 7 days.
