const { ethers } = require('hardhat');

require('dotenv').config();

async function main() {

  const url = process.env.TEST_API_URL;

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TEST_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Faucet Factory
  const Escrow = await ethers.getContractFactory('Escrow', wallet);
  const beneficiary = ethers.provider.getSigner('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199');
  const arbiter = ethers.provider.getSigner('0x7fa23d7Ed62Dd4677Af7F77fd5F3452Ca939E3e9');
  const deposit = ethers.utils.parseEther('0.001');
  const contract = await Escrow.deploy(
    arbiter.getAddress(),
    beneficiary.getAddress(),
    {
      value: deposit,
    }
  );
  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});