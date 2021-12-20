const hre = require('hardhat');
const fs = require('fs');

async function main() {
  const SimpleToken = await hre.ethers.getContractFactory('SimpleToken');
  const simpleToken = await SimpleToken.deploy('tozau', 'KST');
  await simpleToken.deployed();

  console.log('SimpleToken contract deployed to:', simpleToken.address);

  const cozNFT = await hre.ethers.getContractFactory('cozNFT');
  const cozNft = await cozNFT.deploy();
  await cozNft.deployed();

  console.log('cozNft contract deployed to:', cozNft.address);

  let config = `
    export const simpleTokenAddress = '${simpleToken.address}'
    export const cozNftAddress = '${cozNft.address}'
  `;

  let data = JSON.stringify(config);
  fs.writeFileSync('SC.address.config.js', JSON.parse(data));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
