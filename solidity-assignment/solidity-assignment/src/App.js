// App.js
import React, { useState } from "react";
import { ethers } from "ethers";
import TokenAirdropContract from "./contracts/TokenAirdrop.json"; // Replace with the actual path to your contract JSON file

const App = () => {
  const [contract, setContract] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const network = await provider.getNetwork();
        
        // Deployed contract address
        const contractAddress = "0xYourContractAddress";
        
        // Replace the contract ABI with the actual ABI of your contract
        const contract = new ethers.Contract(contractAddress, TokenAirdropContract.abi, signer);
        setContract(contract);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      console.error("MetaMask not installed");
    }
  };

  const executeAirdrop = async () => {
    try {
      const recipients = ["0xRecipient1", "0xRecipient2"]; // Replace with actual recipient addresses
      const transaction = await contract.executeAirdrop(recipients);
      await transaction.wait();
      console.log("Airdrop executed successfully");
    } catch (error) {
      console.error("Error executing airdrop:", error);
    }
  };

  return (
    <div>
      <h1>Token Airdrop</h1>
      <button onClick={connectWallet}>Connect MetaMask</button>
      {contract && (
        <>
          <p>Connected to contract at {contract.address}</p>
          <button onClick={executeAirdrop}>Execute Airdrop</button>
        </>
      )}
    </div>
  );
};

export default App;
