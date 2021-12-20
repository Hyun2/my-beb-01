import { ethers } from 'ethers';

export const transferErc721 = (
  provider,
  signer,
  walletAddress,
  recipientAddress,
  tokenAmount
) => {
  let gas_limit = '0x100000';

  window.ethersProvider.getGasPrice().then((currentGasPrice) => {
    let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
    console.log(`gas_price: ${gas_price}`);

    if (contract_address) {
      // general token send
      let contract = new ethers.Contract(
        contract_address,
        send_abi,
        walletSigner
      );

      // How many tokens?
      let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18);
      console.log(`numberOfTokens: ${numberOfTokens}`);

      // Send tokens
      contract.transfer(to_address, numberOfTokens).then((transferResult) => {
        console.dir(transferResult);
        alert('sent token');
      });
    } // ether send
    else {
      const tx = {
        from: send_account,
        to: to_address,
        value: ethers.utils.parseEther(send_token_amount),
        nonce: window.ethersProvider.getTransactionCount(
          send_account,
          'latest'
        ),
        gasLimit: ethers.utils.hexlify(gas_limit), // 100000
        gasPrice: gas_price,
      };
      console.dir(tx);
      try {
        walletSigner.sendTransaction(tx).then((transaction) => {
          console.dir(transaction);
          alert('Send finished!');
        });
      } catch (error) {
        alert('failed to send!!');
      }
    }
  });

  const tx = {
    from: walletAddress,
    to: recipientAddress,
    value: ethers.utils.parseEther(tokenAmount),
    nonce: window.ethersProvider.getTransactionCount(walletAddress, 'latest'),
    gasLimit: ethers.utils.hexlify(gas_limit), // 100000
    gasPrice: gas_price,
  };

  walletSigner.sendTransaction(tx).then((transaction) => {
    console.dir(transaction);
    alert('Send finished!');
  });
};
