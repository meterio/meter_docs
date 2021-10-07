import "./App.css";
import React from "react";
//import web3 from './web3';
import demo from "./demo";

console.log(demo)

class App extends React.Component {
  state = {
    myString: ''
  };
  async componentDidMount() {
    const myString = await demo.methods.myString().call();
    console.log(myString);
    this.setState({myString});
  }
  render() {
    return (
      <div>
        <h2>Demo</h2>
        <p>myString value is: {this.state.myString}</p>
      </div>
    );
  }
}
export default App;
