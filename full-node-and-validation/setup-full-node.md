# Running a Full Node on Meter Mainnet

## Overview

Meter is a hybrid PoW and PoS blockchain system with dual chain structure. All the accounts and transactions are recorded on the PoS chain while PoW chain (currently a modified version of Bitcoin starting from the same genesis of Bitcoin) just maintains the crypto puzzles for mining. The PoW chain submits the solutions for the crypto puzzles to the PoS chain and the winning miners receive reward on their accounts on the PoS chain.

**Epoch:**

Meter operates on epochs, which are signaled by k-blocks (regular blocks are called m-blocks). At the end of epoch, the committee nodes vote on the longest PoW chain and distribute mining rewards to all the PoW miners, it also pass the information to the PoW chain and all the PoW miners will have to start mining for the stamped PoW block. To create a k-block, the PoW chain typically has to have more than 60 blocks. Since the average PoW block period is 1 minute, each epoch is therefore around 1 hour (currently the time for epoch is completely decided by PoW, but we will implement cross interactions for epoch adjustments in the future). All system financial related activities like reward distribution, entering and exiting the delegate node pool only happen at k-blocks.

It is also required to run both PoS and PoW processes on the same physical or virtual machine to ensure security.

In Meter, there are several types of full nodes in the network:

1. **Regular full node:** They sync for each block and can support interactions with wallets
2. **Delegate nodes:** These nodes are candidates for the committee nodes and have opportunity to propose and sign blocks. To become a delegate node, the top N (N is a protocol parameter) staked full nodes(including both self staking and votes from other stakers) are the delegate nodes.
3. **Committee nodes:** A random subset of the delegate nodes are selected for every epoch. These nodes form a committee quorum and perform consensus. The committee nodes take turns to propose blocks. If a proposed block receives endorsement signatures from 2/3 of nodes in the committee, the signatures form a QC (Quorum Certificate). Each newly proposed block carries QC for the previous block. Once the newly proposed block obtains a QC, the previous block is considered as confirmed and finalized.

In the initial launch of the main net. The number of Delegate Nodes will be the same as the number of the committee nodes, which are set at 500.

Requirements for running a delegate/committee node: To achieve the full performance of the Meter network, the recommended hardware configuration is more than 8 compute optimized vCPU, 16GB of memory, and 200GB of SSD (AWS c5.2xlarge instance or better). The maximum block size in Meter is around 1.3MB. It is also recommended to have data center class 1Gbps to 10Gbps internet connection. However the Meter consensus protocol is capable of adapting to transaction load, network, and node processing speed to some extent by varying the block period from 2 sec to up to 30 sec. The minimum requirement is 2 vCPU and 8GB of memory. Currently, the average monthly block data is around 1.7GB.

## Tutorials (Community Version)

This [step by step tutorial](https://medium.com/@Paolo\_G/step-by-step-guide-to-creating-a-node-in-meter-mainnet-4cdde1085fbb) on how to setup a full node and validator for Meter was created by a community member. The following guide is officially maintained.

This [setup tool](https://github.com/daveodwyer/meter-node-creator) is created by the community for doing everything for you on a Ubuntu Linux machine.  There is also a [telegram group](https://t.me/joinchat/as-AgBXmUAxjMDA0) with automatic alerts and helps from the community.

## Setting up Docker

Since Meter full node consists of multiple processes, we packaged the entire node to a docker container image. The following instructions assume Ubuntu Linux.  It is recommended to use the latest Ubuntu LTS version for building the node.  If you are using Windows, you could [install WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) with an Ubuntu image. Please refer to [Ubuntu Docker Installation Guide](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04) for adding Docker support on Ubuntu.  **The current docker image release requires docker version higher than  20.10.12 (default in fully updated Ubuntu 20 or Ubuntu 22).**

On Ubuntu, you could use the following commands to install docker

```
sudo apt update
sudo apt install docker.io
```

By default, if you installed docker through apt install, it requires root user privilege to run. However, this may introduce security concerns. It is actually pretty simple to run Docker as non-root user.

Setup Docker usergroup to run Docker as non-root user. We assumed the non-root user that will be running docker is "ubuntu", please change the commands accordingly if you are using a different user.

```
sudo groupadd docker
sudo usermod -aG docker ubuntu
```

After this, please logout and log back in to refresh the user group setting and you will be ready to go.

## Setting up a full node

1. Download the latest [desktop wallet](https://www.meter.io/wallets/)
2. Prepare host working directory for Meter Docker container It is recommended to have a host working directory for the container to save important keys and block database, so we could retain them in future upgrades. We will create a directory called meter-data and set its path to and environment variable called **METER\_MAIN\_DATA\_PATH** (you will have to modify accordingly if you have a different directory structure) and map it to the /pos directory inside the container.
3. Prepare a clean working directory

```
$ mkdir meter_main_data
$ cd meter_main_data/
$ echo export "METER_MAIN_DATA_PATH=$PWD" >> ~/.bashrc
$ source ~/.bashrc
```

1. Launch the Meter container

**The following instructions assume the user operates in METER\_MAIN\_DATA\_PATH. Please pay attention to the parameters in the commands and replace the path accordingly to your environment, especially the path after -v in docker run commands**.

```
docker run --network host --name meter_main --restart always -e NETWORK="main" -v $METER_MAIN_DATA_PATH:/pos -d meterio/mainnet:latest
```

1. Check that container is actually working

```
docker container ls -a
```

The output will be like the following:

```
CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS               NAMES
260bbd571d1a        meterio/mainnet           "/usr/bin/supervisord"   23 hours ago        Up 23 hours                             meter_main
```

```
docker container stop meter_main              //stop the container
docker container start meter_main             //start the container
docker container rm meter_main                //remove the container
docker image ls
docker image rm [image ID]                   //remove the container image, will trigger redownloading the image at the next docker run, it is recommended to do this every time we upgrade the testnet
docker container exec -it meter_main bash     //launch a bash in the container
```

The log files can be located inside the container, under /var/log/supervisor directory. If you file any bugs, please remember to attach the logs for PoS (both the stderr and stdout) in the bug. You could either copy and paste the log or use

```
docker cp meter_main:/var/log/supervisor/[LogFileNameHere]     //replace with the log file name
```

After confirming the node is running properly through the log, you could then connect the desktop wallet to your own full node.

## Fast Syncing from a snapshot

The previous commands will start a full node syncing from scratch which may take several days.  The fully synced node contains entire history of the Meter blockchain and is an achieved node.  If you want to sync faster and reduce the usage of your hard disk or if you are running a validator node and running low on disk space, you could sync from a snapshot using the following commands:

```
$ sudo docker container stop meter_main  //stop the meter container to replace the database
$ cd $METER_MAIN_DATA_PATH  //enter the meter_main_data directory
$ sudo rm -rf instance-e695c63b238f5e52  //remove the database directory
$ wget https://snapshot.meter.io/instance-pruned-mainnet-63742946.tar.gz
$ tar -xvf instance-pruned-mainnet-63742946.tar.gz
$ rm instance-pruned-mainnet-63742946.tar.gz
$ sudo docker container start meter_main
```

## Track node sync status

You can compare the height of your running node with the [Explorer](http://scan.meter.io/) maintained by the team

1. Use http://IPaddrOfYourNode:8670/probe to check the current sync status and configurations of your node.  Compare "bestBlock" with the most recent block number in the [Explorer](https://scan.meter.io).
2. If you installed the [Meter desktop wallet](https://meter.io/wallets), you could point it to your own full node: In the settings of the wallet, under node, you could and connect add your own full node by adding [http://IPaddrOfYourNode:8669](http://ipaddrofyournode:8669) . The icon in the left of the address bar should turn green if everything is running properly. You could use the explorer inside the wallet to look at the status of the block productions.&#x20;

[![Adding Your Node in Wallet Settings](https://github.com/meterio/mainnet\_docs/raw/master/addnode.png)](https://github.com/meterio/mainnet\_docs/blob/master/addnode.png) [![Connecting to Your Node](https://github.com/meterio/mainnet\_docs/raw/master/connectnode.png)](https://github.com/meterio/mainnet\_docs/blob/master/connectnode.png)

Please make sure the block height in the wallet is the same as the [official block explorer](https://scan.meter.io).

## Upgrade a full node automatically

Since the mainnet just launches, we expect there could be urgent upgrades from time to time. To ease the node operator's work, we have provided an automatic upgrade service called watchtower. It periodically pulls the docker container image releases and upgrades accordingly. For non-professional validators who can not monitor the node 24/7, **we highly recommend using the watchtower service.**

```
docker run -d --name watchtower --restart always -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --include-stopped --revive-stopped --enable-lifecycle-hooks --interval 10 --cleanup meter_main
```

## Upgrade a full node manually

Stop and remove the current CONTAINER

```
docker container rm -f meter_main
```

Pull the latest container image

```
docker pull meterio/mainnet:latest
```

Start the new image

```
docker run --network host --name meter_main --restart always -e NETWORK="main" -v $METER_MAIN_DATA_PATH:/pos -d meterio/mainnet:latest
```
