# Interacting with Meter Mainnet Using Ledger

## **Introduction**

Hardware wallets provide a safer way to store crypto assets due to their ability to manage the private key (used for signing transactions) offline. They provide an additional layer of security against the risks of compromised private keys (phishing attacks) or malicious smart contracts frequently experienced by users relying on web wallets for safety of their assets.

_**Note:** The assets are always stored on the blockchain and not on the hardware wallet._

Ledger offers three hardware wallet solutions at the time of writing: Ledger Nano S, Ledger Nano S Plus and Ledger Nano X.

You can interact with Meter using your Ledger hardware wallet through the Meter Ledger Live app. Meter Network is also supported through the Ethereum App on Ledger Live. The difference in using the applications is outlined below;

| Meter App on Ledger Live                                                           | Ethereum App on Ledger Live                                             |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Dedicated application, always connected to the right network                       | Need to confirm chain ID (Meter Chain ID: 82) for every transaction     |
| Specific to Meter Network, cannot be used across other Networks setup on Meter SDK | Generic, can be used across other Networks in addition to Meter Network |

In this tutorial, you will learn how to get started with your Ledger hardware wallet on Meter Network using the Meter app. These steps are applicable across all 3 devices (Ledger Nano X,  Ledger Nano S and Ledger Nano S Plus).

## **Supported Assets**

As the Meter App is supported through third party service (MetaMask), all assets available on Meter Network are currently supported.

The native assets - MTR and MTRG - are not currently available on Ledger Live.

## **Prerequisites**

Before you get started, update [Ledger Live](https://www.ledger.com/ledger-live/download) to the latest version available. Also, make sure you've your Ledger hardware wallet device running the latest firmware. The Ledger support website offers tutorials on how to update the firmware of [Ledger Nano S](https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware), [Ledger Nano S Plus](https://support.ledger.com/hc/en-us/articles/4445777839901-Update-Ledger-Nano-S-Plus-firmware?docs=true) and [Ledger Nano X](https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware) devices.

At the time of writing, the following versions were used:

* [Ledger Live 2.46.2](https://support.ledger.com/hc/en-us/articles/360020773319-What-s-new-in-Ledger-Live-?docs=true)
* [Ledger Nano S firmware v2.1.0](https://support.ledger.com/hc/en-us/articles/360010446000-Ledger-Nano-S-firmware-release-notes?docs=true)
* [Ledger Nano S Plus firmware v1.0.3](https://support.ledger.com/hc/en-us/articles/4494540771997-Ledger-Nano-S-Plus-Firmware-Release-Notes?docs=true)
* [Ledger Nano X firmware v2.0.2](https://support.ledger.com/hc/en-us/articles/360014980580-Ledger-Nano-X-firmware-release-notes?docs=true)

In addition, you'll need MetaMask as an intermediary between your Ledger device and Meter. Make sure that your MetaMask is [connected to Meter](https://docs.meter.io/wallet-setup/interacting-with-meter-mainnet-using-metamask). As of [MetaMask version 10.5.0](https://consensys.net/blog/metamask/metamask-and-ledger-integration-fixed/), connecting your Ledger device with MetaMask on Chrome is easy again. You just need to have the latest version of MetaMask installed.

## **Install the Meter Ledger Live App**

The Meter app is dependent on the Ethereum app, so first you will need to install the Ethereum app. Once the Ethereum app is installed you will be able to install the Meter app without a problem. Please note that the Meter app is only for the Meter network.

**Video Tutorial:**

{% embed url="https://youtu.be/68VhSfb6FyE" %}

**Step-by-Step Guide:**

To get started, open up Ledger Live and:

1. Select **'My Ledger'** from the menu
2. Connect and unlock your device (this must be done before installation)
3. In the **App catalog** search for Ethereum (ETH) and click **Install**. Your Ledger device will show **Processing** and once the installation is complete, the app will appear on your Ledger device
4. Search for Meter (MTR) in the **App catalog** and click **Install**. Again, your Ledger device will show **Processing** and once complete, the Meter app will appear on your Ledger device

In the Ledger Live app, you should see the Ethereum and Meter app listed under the **Apps installed** tab on the **'My Ledger'** page. After the apps have been successfully installed, you can close out of Ledger Live.

## **Import your Ledger Account to MetaMask**

Now that you've installed the Ledger Live apps, you can connect your Ledger to the computer, unlock it, and open the Meter app.

Then import your Ledger account to MetaMask as shown below;

{% embed url="https://youtu.be/VO453rD6IyU" %}

If you're using Chrome or a Chrome-based browser like Brave, you'll be prompted to select your Ledger device to via a pop-up to connect via WebHID. If a pop-up doesn't appear, you may need to change your MetaMask settings to enable a WebHID connection. You can check and update your MetaMask settings by following these steps:

1. Expand the top-right menu and go to **Settings**
2. Navigate to **Advanced**
3. Scroll down to **Preferred Ledger Connection Type** and select **WebHID** from the dropdown

_**Note:** The Preferred Ledger Connection Type setting is only available on Chrome and Chrome-based browsers. This setting doesn't exist on other browsers such as Firefox._

If MetaMask was able to connect successfully to your Ledger device, you should see a list of five Meter/Ethereum-styled accounts. If not, double-check that Ledger Live is closed, you've connected your Ledger device to the computer, unlocked it, and have the Meter app open.

## **View Balances**

If you've imported your Ledger account successfully, you should see your account and balance displayed in the main MetaMask screen

You can switch accounts in MetaMask at any time to view the balance of your other imported Ledger accounts.

## **Receive Tokens**

To get started interacting with your Ledger device, you will need to send some funds to it. Copy your address from MetaMask by clicking on your account name and address in MetaMask.

Next, you will need to obtain some MTR tokens and using the address you just copied, send the tokens to your account. After the transaction has successfully gone through, you will see your balance update.

{% embed url="https://youtu.be/KyjeDCMHYMM" %}

_**Note:** You can receive both native tokens - MTR and MTRG from different sources (CEX, Address)_

## **Send Tokens**

_**Note:** You need MTR tokens as gas currency for Meter Mainnet to send any assets. You can perform_ [_gasless swap_](https://wallet.meter.io/swap) _if you have MTRG tokens available in your wallet._

Next up is sending and signing transactions on Meter using your Ledger device.&#x20;

{% embed url="https://youtu.be/yL3RrArPxho" %}

Here are the steps to review on your ledger device:

1. Click the button to proceed to the next screen. Your Ledger device is only warning you to review the transaction
2. Check the number of tokens being sent then proceed to the next screen
3. Check the recipient's address and proceed to the next screen
4. Check the max fees applicable to this transaction. This is the gas price multiplied by the gas limit you've set on MetaMask. When ready, proceed to the next screen
5. If you agree with all the transaction details, approve it. This will sign the transaction and will trigger MetaMask to send it. If you don't agree with all the transaction details, reject it. This will cancel the transaction, and MetaMask will mark it as failed

Right after you've approved the transaction, MetaMask sends it to the network. Once the transaction is confirmed, it will be displayed as **Send** on the **Activity tab** in MetaMask.

And that is it! You've signed a transaction and sent some MTR tokens using your Ledger hardware wallet!

## **Interact with Contracts Using your Ledger**

By default, Ledger devices don't admit a data field in the transaction object. Consequently, users can't deploy or interact with smart contracts.

However, if you want to use your Ledger hardware wallet for transactions related to smart contracts, you need to change a configuration parameter inside the app on your device. To do so, take the following steps:

1. On your Ledger, open the Meter or Ethereum app
2. Navigate to **Settings**
3. Find the **Blind signing** page. It should state **NOT Enabled** at the bottom
4. Select/validate the option to change its value to **Enabled**

_**Note:** This option is necessary to use your Ledger device to interact with ERC-20 token contracts that might live inside the Meter ecosystem._

## **Support**

Users can reach out on [Telegram](https://t.me/Meter\_IO), [Twitter](https://twitter.com/Meter\_IO) or [Discord](https://discord.gg/WPjTpMG) for immediate support related to ledger integration. You can also reach out to us via email __ at __ info@meter.io.

