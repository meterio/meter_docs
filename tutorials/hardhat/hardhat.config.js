require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const METER_TESTNET_PRIVATE_KEY = process.env.METER_TESTNET_PRIVATE_KEY
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
    },
    meter_testnet: {
      url: "https://rpctest.meter.io",
      accounts: [`${METER_TESTNET_PRIVATE_KEY}`],
      gas: 99999999999999,
      gasPrice: 999999999999999999,
      chainId: 83
    }
  },
};