# Interacting with Meter Mainnet Using MetaMask

Meter mainnet now supports two transactions (tx) formats:&#x20;

1. The native Meter tx: which is more expansive and supports staking, on-chain auctions, validator transactions, and future multiple chains/shards. This tx format is used by the Meter mainnet wallet which is a PC/Mac application [downloadable](https://www.meter.io/wallets/) from the Meter website or [Github](https://github.com/meterio/meter-wallet).&#x20;
2. Ethereum tx: This is designed for backward compatibility with existing Ethereum dApps and ecosystem including wallets like [Metamask](https://metamask.io/).

Metamask communicates with the Meter mainnet through an RPC (Remote Procedure Call) emulation layer.  The user will have to configure a custom RPC network inside MetaMask. Here is how to do so.

**For the browser plugin version of Metamask:**

The easiest way to configure Metamask for your browser extension is to select Meter Network from "SupportNetworks" in the [Meter Passport Wallet](https://wallet.meter.io).

If you are configuring manually, there following are the details:

1. Select the network drop-down menu, and then click on the custom RPC at the bottom.

![](<../.gitbook/assets/image (3).png>)

If you are using the mobile app version of Metamask, the custom RPC setup is under "Settings" and then "Networks".

![](<../.gitbook/assets/image (6).png>)



2\. Enter the following information for the Custom RPC and click "Save":

![](<../.gitbook/assets/image (4).png>)

In Meter, both MTR and MTRG are native network coins. However, Metamask can only display one native coin (ETH in Ethereum's case). We configured the gas token MTR to replace the default ETH in the wallet. To properly display and transact MTRG, we created ERC-20 wrappers for MTRG and MTR so MetaMask and dApps could treat them as ERC-20 tokens as well. Please add the following ERC20 contract addresses as custom tokens in MetaMask:

\-MTRG: 0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3

\-MTR (Optional): 0x687A6294D0D6d63e751A059bf1ca68E4AE7B13E2

These two ERC-20 contracts will only be effective after block 4.9M on the Meter mainnet.

![](<../.gitbook/assets/image (1) (1).png>)

One potential confusing issue is that the minimum gas price is 500 gwei in Meter.  In some pages of Metamask, it may estimate the transaction fees too low unless the user set custom gas price 500 gwei.  Meter al

so doesn't use the gas limit passed from Metamask.

Please be aware there is no nonce concept in Meter.  **Therefore, there is no point to click on the "Speed up" or "Cancel" button for the transaction**.  Any transactions that are not processed within 320 seconds are automatically canceled in Meter.

Finally, since Metamask interacts with the Ethereum network by default, it adds wait and delay time for sending transactions. Therefore, it may take up to 30 seconds for Metamask to show that a Meter transaction is confirmed, although it may already be confirmed on the Meter mainnet.&#x20;









