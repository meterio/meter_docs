# Adding Custom Tokens to MetaMask

## Native Tokens

In Meter, both MTR and MTRG are native network coins. However, Metamask can only display one native coin (ETH in Ethereum's case). We configured the gas token MTR to replace the default ETH in the wallet.&#x20;

To properly display and transact MTRG, we created ERC-20 wrappers for MTRG and MTR so MetaMask and dApps could treat them as ERC-20 tokens as well.&#x20;

MTRG can be treated as a custom ERC20 token in Metamask:

_ERC20 System Interface:_

\-MTRG: 0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3

## Popular ERC20 tokens on Meter can be found at:

{% embed url="https://github.com/meterio/token-list/blob/master/generated/chain-configs/meter.json" %}

{% embed url="https://youtu.be/W_uc52uR27s" %}
