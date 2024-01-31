# YashaswiSrivastava-Solidity-Developer
Prerequisites:
Node.js and npm:
Make sure you have Node.js and npm installed on your machine. You can download them from here.

Truffle:
Install Truffle globally using npm:

npm install -g truffle

Steps to Compile and Deploy:
Initialize a Truffle project:
Create a new directory for your project and navigate into it. Then run:

truffle init

Configure Truffle:
Open truffle-config.js and configure it according to your development environment. Ensure the networks section includes settings for your desired blockchain (e.g., Ganache for local development or a testnet).

Compile the Smart Contract:
Run the following command to compile your Solidity smart contract:

truffle compile

This will generate an artifacts directory containing the compiled contract ABI and bytecode.

Deploy the Smart Contract:
If you're using a local development blockchain like Ganache, start it first. Then, run:

truffle migrate

This command will deploy your smart contract to the specified blockchain. If you're using a testnet, you may need to configure the deployment in the truffle-config.js file.

Get Contract Address:
After a successful migration, Truffle will display the deployed contract address. Note this address; you'll need it when interacting with the contract.

Create TokenAirdrop.json:
Truffle automatically generates an artifacts/TokenAirdrop.json file that contains the ABI, bytecode, and other details. Copy this file to the React project directory.

Interact with the Contract:
Use the React code provided earlier, replacing the placeholder values in contractAddress with the actual address obtained after deployment.

Run the React App:
Navigate to your React project directory and run your app:

npm start

Open your app in a browser, connect MetaMask, and execute the airdrop.

Remember to adapt the instructions based on your specific requirements and blockchain configurations. If you prefer, you can also use other tools like Hardhat or Remix for compilation and deployment. 
