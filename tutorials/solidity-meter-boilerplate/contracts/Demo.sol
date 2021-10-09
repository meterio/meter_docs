pragma solidity ^0.8.8;

contract Demo {
    string[] public myArray;
    string public myString;

    constructor() {
        myString = "Meter String Demo";
        myArray.push("Meter Array Demo");
    }
    
    function getArray() public view returns(string[] memory)  {
        return myArray;
    }
}