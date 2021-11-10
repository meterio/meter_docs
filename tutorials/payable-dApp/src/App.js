import "./App.css";
import React from "react";
import web3 from './web3';
import {payableContract, address} from "./payableContract";

class App extends React.Component {
  mtrgTokenAddress = "0x8A419Ef4941355476cf04933E90Bf3bbF2F73814"; //TESTNET
  //mtrgTokenAddress = "0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3"; //MAINNET
  voltTokenAddress = "0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0"; //MAINNET
  state = {
    mtrgBalance: '',
    mtrBalance: '',
    voltBalance: '',
    amount: '',
  };
  
  async componentDidMount() {
    const mtrgBalance = await payableContract.methods.mtrgBalance().call();
    this.setState({mtrgBalance});
    const mtrBalance = await payableContract.methods.mtrBalance().call();
    this.setState({mtrBalance});
    const voltBalance = await payableContract.methods.voltBalance().call();
    this.setState({voltBalance});
  }
  async transfer() {
    let balance = await this.balance();

    if(parseInt(balance) < parseInt(web3.utils.toWei(this.state.amount.toString(), "ether"))) {
      alert('Not enough MTR balance');
      return;
    }

    let accounts = await web3.eth.getAccounts();

    try {
      await payableContract.methods.receiveMTR().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.amount.toString(), "ether"),
      });
    } catch(err)
    {
      console.log(err);
      return;
    }
    window.location.reload(false);
  }
  async transferToken(token) {
    let balance = 0;
    let tokenAddress = '';

    if (token === "MTRG") {
      balance = await this.tokenBalance(token);
      tokenAddress = this.mtrgTokenAddress;
    } else if (token === "MTR") {
      balance = await this.tokenBalance(token);
      tokenAddress = this.voltTokenAddress;
    }

    if(parseInt(balance) < parseInt(web3.utils.toWei(this.state.amount.toString(), "ether"))) {
      alert('Not enough ' + token + ' balance');
      return;
    }
    
    let accounts = await web3.eth.getAccounts();

    var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
    var tokenContract = new web3.eth.Contract(abi, tokenAddress);

    try {
      await tokenContract.methods.approve(address, web3.utils.toWei(this.state.amount.toString(), "ether")).send({
        from: accounts[0]
      });  
    } catch (error) {
      console.log(error);  
      return;
    }
    
    try {
      if(token === "MTRG") {
        await payableContract.methods.receiveMTRG().send({from: accounts[0]});  
      } else if(token === "VOLT") {
        await payableContract.methods.receiveVOLT().send({from: accounts[0]});  
      }
      
    } catch (error) {
      return;
    }
    window.location.reload(false);
  }
  async balance() {
    let accounts = await web3.eth.getAccounts();
    var balance = await web3.eth.getBalance(accounts[0]);
    return balance;
  }
  async tokenBalance(token) {
    // The minimum ABI to get ERC20 Token balance
    let minABI = [
      // balanceOf
      {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
      },
      // decimals
      {
        "constant":true,
        "inputs":[],
        "name":"decimals",
        "outputs":[{"name":"","type":"uint8"}],
        "type":"function"
      }
    ];

    let accounts = await web3.eth.getAccounts();
    let contract = new web3.eth.Contract(minABI, this.mtrgTokenAddress);
    let balance = await contract.methods.balanceOf(accounts[0]).call();
    return parseInt(balance);
  }
  async transferToAddress(token) {
    let accounts = await web3.eth.getAccounts();
    if(token === "MTR") {
      await payableContract.methods.transferMTR(this.state.address, web3.utils.toWei(this.state.amount.toString(), "ether")).send({from: accounts[0]});  
    } else if(token === "MTRG") {
      await payableContract.methods.transferMTRG(this.state.address, web3.utils.toWei(this.state.amount.toString(), "ether")).send({from: accounts[0]});  
    } else {
      await payableContract.methods.transferVOLT(this.state.address, web3.utils.toWei(this.state.amount.toString(), "ether")).send({from: accounts[0]});  
    } 
    window.location.reload(false);
  }
  render() {
    return (
      <div>
        <h2>Contract Balances</h2>
        <p>mtrBalance value is: {web3.utils.fromWei(this.state.mtrBalance, 'ether')}</p>
        <p>mtrgBalance value is: {web3.utils.fromWei(this.state.mtrgBalance, 'ether')}</p>
        <p>voltBalance value is: {web3.utils.fromWei(this.state.voltBalance, 'ether')}</p>
        <h2>Transfer to Contract</h2>
        <input type="text" onChange={e => this.setState({amount:e.target.value})} placeholder="Amount"></input><button onClick={() => this.transfer()}>Transfer MTR</button><button onClick={() => this.transferToken('MTRG')}>Transfer MTRG</button><button onClick={() => this.transferToken('VOLT')}>Transfer VOLT (only main net)</button>
        <h2>Transfer from Contract to Address</h2>
        <input type="text" onChange={e => this.setState({amount:e.target.value})} placeholder="Amount"></input>
        <input type="text" onChange={e => this.setState({address:e.target.value})} placeholder="Address"></input>
        <button onClick={() => this.transferToAddress('MTR')}>Transfer MTR</button><button onClick={() => this.transferToAddress('MTRG')}>Transfer MTRG</button><button onClick={() => this.transferToAddress('VOLT')}>Transfer VOLT (only main net)</button>
      </div>
    );
  }
}
export default App;
