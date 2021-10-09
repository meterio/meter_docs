const path = require('path');
const fs = require('fs');
const solc = require('solc');

const demoPath = path.resolve(__dirname, 'contracts', 'Demo.sol');
const source = fs.readFileSync(demoPath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Demo.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
exports.abi = output.contracts['Demo.sol']['Demo'].abi;
exports.bytecode = output.contracts['Demo.sol']['Demo'].evm.bytecode.object;
