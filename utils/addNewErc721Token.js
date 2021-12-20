import { ethers } from 'ethers';
import erc721Token from '../artifacts/contracts/cozNFT.sol/cozNFT.json';

export const AddNewErc721Token = async (
  tokenContractAddress,
  walletAddress,
  erc721List,
  setErc721List
) => {
  // console.log(tokenContractAddress);
  const provider = new ethers.providers.InfuraProvider('ropsten');
  const tokenContract = new ethers.Contract(
    tokenContractAddress,
    erc721Token.abi,
    provider
  );
  // console.log(tokenContract);
  console.log(walletAddress);
  console.log(tokenContract);
  const name = await tokenContract.name();
  const symbol = await tokenContract.symbol();
  let totalSupply = await tokenContract.totalSupply();
  totalSupply = totalSupply.toString();
  console.log(name, symbol, totalSupply);

  let totalTokenCounts = [];
  for (let i = 1; i <= totalSupply; i++) {
    totalTokenCounts.push(i);
  }
  console.log(totalTokenCounts);
  const toAddTokens = [];
  for (let tokenId of totalTokenCounts) {
    let tokenOwner = await tokenContract.ownerOf(tokenId);
    if (
      String(tokenOwner).toLocaleLowerCase() ===
      walletAddress.toLocaleLowerCase()
    ) {
      let tokenURI = await tokenContract.tokenURI(tokenId);
      // console.log({ name, symbol, tokenId, tokenURI, tokenContractAddress });
      toAddTokens.push({
        name,
        symbol,
        tokenId,
        tokenURI,
        tokenContractAddress,
      });
    }
  }
  console.log(toAddTokens);
  console.log(setErc721List);
  setErc721List([...erc721List, ...toAddTokens]);

  // let balance = await tokenContract.balanceOf(walletAddress);
  // balance = ethers.utils.formatUnits(balance, 18);
  // console.log(balance);
  // setErc20List([...erc20List, { name, symbol, balance, tokenContractAddress }]);
  // return;
};

export default AddNewErc721Token;
