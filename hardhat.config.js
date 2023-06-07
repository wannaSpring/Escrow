require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
    goerli: {
      url: process.env.TEST_API_URL,
      accounts: [process.env.TEST_PRIVATE_KEY],
    }
  }
};
