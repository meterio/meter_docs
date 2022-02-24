// scripts/deploy.js
async function main () {
  const Box = await ethers.getContractFactory('Greeter');
  console.log('Deploying Greeter...');
  const box = await Box.deploy("Hello!");
  await box.deployed();
  console.log('Greeter deployed to:', box.address);

  const Mtrg = await ethers.getContractFactory('Mtrg');
  console.log('Deploying Mtrg...');
  const mtrg = await Mtrg.deploy();
  await mtrg.deployed();
  console.log('Mtrg deployed to:', mtrg.address);

  const Volt = await ethers.getContractFactory('Volt');
  console.log('Deploying Volt...');
  const volt = await Volt.deploy();
  await volt.deployed();
  console.log('Volt deployed to:', volt.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });