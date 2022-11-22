# Programming For Meter Passport

Meter Passport shares the same programming interface as [Sygma (Chainsafe) Bridge.](https://buildwithsygma.com/)

#### Adding ERC20 token support in existing supported chains:

For adding standard ERC20 tokens to Meter Passport, please submit a Pull Request in Meter Passports token repo:&#x20;

{% embed url="https://github.com/meterio/token-list" %}
ERC20 Token List Repo
{% endembed %}

ERC20 tokens with special features like transfer tax and burning, please reach out to our team through telegram or discord channel.

#### Generic Message Passing

Meter Passport is the first bridge that supports generic cross chain messaging in production.  [Ampleforth](https://ampleforth.org) team uses Meter Passport for both AMPL token transfers and crosschain rebasing.  The details of the generic messaging passing can be found in the Sygma bridge documents.

{% embed url="https://docs.buildwithsygma.com/architecture/generic" %}
Sygma Generic Message Passing Docs
{% endembed %}
