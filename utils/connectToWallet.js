import { ethers } from 'ethers';

export const connectToWallet = async () => {
  // await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();

  const walletAddress = await signer.getAddress();
  console.log('Wallet Address: ', walletAddress);

  let walletBalance = await provider.getBalance(walletAddress);
  walletBalance = ethers.utils.formatEther(walletBalance);
  console.log('Balance: ', walletBalance);
  return { walletAddress, walletBalance };
};
