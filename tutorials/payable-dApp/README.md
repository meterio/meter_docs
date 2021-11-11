# INSTALLATION
npm install

# CONTRACT DEPLOYMENT
1. Go to https://remix.ethereum.org/
2. Create a new file named Payable.sol in the "contracts" folder
3. Copy the content of contracts/Payable.sol into the newly created Payable.sol file in Remix
4. Go to the "Compile" section and click on the "Compile Payable.sol" button
5. Go to the "Deploy" section and click on the "Deploy" button. Sign the transaction & wait a few seconds for the transaction to be valid
6. Copy the address of the deployed contract

# CONFIGURATION
1. Open the file src/payableContract.js file
2. Paste the contract address in the "address" variable
3. If you make changes to the solidity contract you will need copy the ABI and paste in the "abi" variable

# RUN
npm run start