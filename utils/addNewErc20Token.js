import { ethers } from 'ethers';
import erc20Token from '../artifacts/contracts/erc20Token.sol/SimpleToken.json';

export const addNewErc20Token = async (
  tokenContractAddress,
  walletAddress,
  erc20List,
  setErc20List
) => {
  // console.log(tokenContractAddress);
  const provider = new ethers.providers.InfuraProvider('ropsten');
  const tokenContract = new ethers.Contract(
    tokenContractAddress,
    erc20Token.abi,
    provider
  );
  // console.log(tokenContract);
  console.log(walletAddress);
  const name = await tokenContract.name();
  const symbol = await tokenContract.symbol();
  let balance = await tokenContract.balanceOf(walletAddress);
  balance = ethers.utils.formatUnits(balance, 18);
  console.log(balance);
  setErc20List([...erc20List, { name, symbol, balance, tokenContractAddress }]);
  // return;
};
