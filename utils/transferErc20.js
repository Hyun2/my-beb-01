import { ethers } from 'ethers';
import ERC20 from '../artifacts/contracts/erc20Token.sol/SimpleToken.json';

export const transferErc20 = async ({
  provider,
  signer,
  walletAddress,
  recipientAddress,
  tokenAmount,
  contractAddress,
}) => {
  let gas_limit = '0x100000';

  const currentGasPrice = await provider.getGasPrice();
  let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
  console.log(`gas_price: ${gas_price}`);

  if (contractAddress) {
    // general token send
    let contract = new ethers.Contract(contractAddress, ERC20.abi, signer);

    // How many tokens?
    let numberOfTokens = ethers.utils.parseUnits(tokenAmount, 18);
    console.log(`numberOfTokens: ${numberOfTokens}`);

    // Send tokens
    contract
      .transfer(recipientAddress, numberOfTokens)
      .then((transferResult) => {
        console.dir(transferResult);
        alert('sent token');
      });
  } // ether send
  else {
    const nonce = await provider.getTransactionCount(walletAddress, 'latest');
    const tx = {
      from: walletAddress,
      to: recipientAddress,
      value: ethers.utils.parseEther(tokenAmount),
      nonce,
      gasLimit: ethers.utils.hexlify(gas_limit), // 100000
      gasPrice: gas_price,
    };
    console.dir(tx);
    try {
      signer.sendTransaction(tx).then((transaction) => {
        console.dir(transaction);
        alert('Send finished!');
      });
    } catch (error) {
      alert('failed to send!!');
    }
  }
};
