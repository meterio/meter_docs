// scripts/deploy.js
async function main () {
  const MeterStore = await ethers.getContractFactory('MeterStore');
  console.log('Deploying MeterStore...');
  const meterStore = await MeterStore.deploy();
  await meterStore.deployed();
  console.log('MeterStore deployed to:', meterStore.address);

  const Attack = await ethers.getContractFactory('Attack');
  console.log('Deploying Attack...');
  const attack = await Attack.deploy(meterStore.address);
  await attack.deployed();
  console.log('Attack deployed to:', attack.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });