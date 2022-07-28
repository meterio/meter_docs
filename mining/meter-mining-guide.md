# Meter Mining Guide

Mining is how cryptocurrency is created and one way to acquire coins. It is an intensive computing activity, and involves the use of specialized hardware to get rewarded for processing transaction blocks on a blockchain. Meter (MTR) itself is no exception to this.

There are a number of interlinked factors to consider when it comes to mining. Just to name a few:

* Whether it is more economical or profitable to mine or buy cryptocurrency.
* What blockchain to focus on, and why.
* How to approach mining. For example, doing it all yourself, cooperating with others, or have somebody else do it for you.

## Making the Case for Mining <a href="#making-the-case-for-mining" id="making-the-case-for-mining"></a>

Every miner will have their own reasons whether or not to choose mining. For example, under some circumstances it may be highly profitable to mine, while in other situations the costs may be too high and the return on investment too low.

When it comes to owning equipment, the main expenses involved will include the cost of the equipment and the expenses involved in operating and maintaining it. Mining equipment is specialized hardware that is much more expensive than a standard PC computer, and requires a big upfront investment. That equipment also needs to be housed somewhere, under optimal conditions, such as keeping it cool while running. And the other big operational factor is the price of electricity and dependability of delivery wherever the equipment is being operated.

When these challenges can be met in the right combination, the other side that needs to be looked at is the return. If the expenses are manageable, and the return on each coin is high enough, then that should equate to a good profit margin. However, it may be the case that at the time of mining a coin it is not actively being traded yet, but the anticipated return sometime later is expected to be profitable.

Meter mining is in its early stages, and thus provides very good incentives for early adopters to more easily and economically acquire MTR via mining before it becomes more widely available.

## How to Mine

Generally speaking, miners may choose to operate their own equipment, and gain all the rewards for their efforts, or join together with others in a mining pool and share the rewards (see [What is a Mining Pool](meter-mining-guide.md#what-is-a-mining-pool)). In some cases people can subscribe to a pool and gain some of the rewards, but without owning any equipment of their own. This is called cloud mining. Each has its own benefits and drawbacks, and it is up to each person to determine which approach suits them best.

The remainder of this document is in support of those that already operate their own equipment (or wish to), and are interested in mining MTR. This will primarily include those that will mine directly on their own, mining pools that choose to support Meter, or those that want to setup cloud mining for Meter.&#x20;

However, this information might also be of interest to others, such as those that are already part of a mining pool, and want to request that their pool add support for Meter.

## What is a Mining Pool?

When miners group together to use their combined processing power, this is called a mining pool. The rewards from mining are split proportionally according to the amount of hash power miners contribute to the pool.

Mining pools can be split into both public and private. Public pools will generally charge a fee.

Mining is strictly voluntary, and as such miners can opt to switch their mining capabilities whenever they choose, according to their own objectives or criteria. For example, if a miner that traditionally was in a Bitcoin mining pool decided to divert some or all processing power to mine another blockchain, such as Meter, it is simply a case of making a few minor configuration changes to point the mining equipment to the new pool.

## Mining Hardware

ASIC miners are specialized hardware machines that are required to efficiently mine Meter.

Since Meter uses SHA256, the same as Bitcoin, miners can use the same hardware for mining both coins, and the mining setup for the two is very similar.

#### Hardware Setup Guide <a href="#hardware-setup-guide" id="hardware-setup-guide"></a>

Meter uses an account-based system, rather than the UTXO based method that Bitcoin uses. However, this difference only amounts to a small change that needs to be made in the configuration.

Follow [this guide](https://www.bitcoin.com/get-started/how-to-setup-a-bitcoin-asic-miner-and-what-they-are) on installing and configuring your ASICs.

## The Meter Solo Mining Pool

Meter is actively working with mining pool providers for future mining support. We have provided a [mining pool sample implementation](https://github.com/meterio/meter-nomp). This implementation can be used for solo mining, but is by no means a general purpose mining pool as it doesn't have reward distribution mechanism.

The following are the rough production parameters for different mining hardware on the Meter testnet, tuned to 1 meter = 10 kwh for a miner with 53 W/T energy efficiency. The system has a built-in smooth curve that will reduce this parameter by half every 18months. Daily MTR production per TH/s is 0.123 when the mainnet launches initially and will go down each day.

The adaption speed to hash rate changes is still relatively slow on the testnet. However, closer to the mainnet launch, parameters will be tuned to more efficient mining hardware and faster response speed.

The Meter mining pool status statistics can be viewed at http://54.184.235.97:8088/stats.

### Miner Configurations

In order to configure a miner to join the mining pool, the following fields in the `Miner configuration` tab of the ASIC's web panel need to be set:

![S9 Configuration](../.gitbook/assets/conf\_s9.png)

Where:

* `URL` is the address of the mining pool.
* `Worker` is the Meter wallet address.
* `Password` is the password associated with the wallet.

## Running a Private Mining Pool on the Meter Network

An example implementation of the Meter mining pool is available on [GitHub](https://github.com/meterio/meter-nomp), based on the open source nomp Bitcoin mining pool. This code has been provided to show the changes needed compared to standard bitcoin mining pools, and is not intended to be used in a production environment.

### Requirements

There are three things required to run Meter nomp:&#x20;

1. Node.js
2. A database (Redis or MySQL),&#x20;
3. A connection to a coin daemon on the Meter Network, which is a Meter full node that monitors transactions on both the Meter PoW and PoS chains.

On the testnet, coin daemons have already been set up by the Meter team. Normally a pool operator would set up its own coin daemon, and this will be possible in the future.

The following are the minimal version requirements for Node.js and Redis. If older versions than the following are used (e.g. installed by a package manager) then problems will arise:

* [Node.js](http://nodejs.org/) v0.10+ ([follow these installation instructions](https://tecadmin.net/install-nodejs-with-nvm/))
* [Redis](http://redis.io/) v2.6+ ([follow these instructions](http://redis.io/topics/quickstart))

In Ubuntu, you could use the following command to install nodejs and Redis:

```
$ sudo apt install npm
$ sudo apt install nodejs
$ sudo apt install redis
```

**Important Warning!** It is always a good idea to learn about and understand any software that you are using. An important security measure to implement for nomp is to secure the database so it cannot be accessed externally. An easy way to do this for Redis is to include `bind 127.0.0.1` in your `redis.conf` file, and use a firewall with strict rules in place to only allow accessing Redis locally. For more information please read [Security](http://redis.io/topics/security). Another good place to start for additional information about using Redis for nomp is [Data Persistence](http://redis.io/topics/persistence).

### Downloading & Installing

Clone the repository and run `npm update` for all the dependencies to be installed:

```
git clone https://github.com/meterio/meter-nomp.git
cd meter-nomp
npm install
```

### Pool Configuration

There is a json config file `meter.json` in the `pool_configs` sub-directory. Make sure to configure the appropriate fields in this file, especially the `rewardBeneficiary` and the `daemon`/`daemons` fields.

In the following example, the pool owner's Meter address is `0a05c2d862ca051010698b69b54278cbaf945ccb` (no 0x in the beginning), the `rewardBeneficiary` should be configured accordingly. In addition, the mining pool has to connect to a coin daemon (full node) on the Meter network. We will use a full node on the testnet. The value for Meter in the `daemons` section should be configured as follows:

```
[
    {
        "host": "c04.meter.io",
        "port": 8332,
        "user": "testuser",
        "password": "testpass"
    }
]
```

c04.meter.io is a node we provided for testing only, its availability is not guaranteed. If you are running a pool, you should be running a full node on Meter mainnet (Please refer to the mainnet full node tutorial on Github).

There are many other fields in `meter.json`. We could ignore them for now as only limited functions was ported in the current Nomp implementation for Meter.

For more information on these configuration options see the [pool module documentation](https://github.com/meterio/meter-stratum-pool/blob/master/README.md#module-usage).

### Start the Portal

After all the configuration files have been set up, it is time to start the mining pool.

If everything is installed locally on the host, initiate using the following:

```
$ node init.js
```

The pool should now start running and we could see the status of the pool from the log and http://pool\_ip:8080/stats.
