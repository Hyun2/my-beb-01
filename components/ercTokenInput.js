import { useState } from 'react';
import { Button, Input } from '@mantine/core';
import { addNewErc20Token } from '../utils/addNewErc20Token';
import AddNewErc721Token from '../utils/addNewErc721Token';
import { useStore } from '../shared/store';

const ErcTokenInput = ({ placeholder, tokenType, setTokenContractType }) => {
  // const [provider, signer] = useStore((state) => [
  //   state.provider,
  //   state.signer,
  // ]);
  const [tokenAddress, setTokenAddress] = useState('');
  const [walletAddress, setWalletAddress] = useStore((state) => [
    state.walletAddress,
    state.setWalletAddress,
  ]);
  const [erc20List, setErc20List] = useStore((state) => [
    state.erc20List,
    state.setErc20List,
  ]);
  const [erc721List, setErc721List] = useStore((state) => [
    state.erc721List,
    state.setErc721List,
  ]);

  const addNewTokenContract = (tokenAddress, walletAddress) => {
    if (tokenType === 'erc20') {
      addNewErc20Token(tokenAddress, walletAddress, erc20List, setErc20List);
    } else if (tokenType === 'erc721') {
      AddNewErc721Token(tokenAddress, walletAddress, erc721List, setErc721List);
    }
    setTokenAddress('');
  };

  const handleChangeTokenAddress = (e) => {
    setTokenAddress(e.target.value);
  };

  return (
    <>
      <Input
        style={{ flex: 1, marginRight: '10px' }}
        variant="default"
        placeholder={placeholder}
        onChange={handleChangeTokenAddress}
        value={tokenAddress}
      />
      <Button onClick={() => addNewTokenContract(tokenAddress, walletAddress)}>
        추가
      </Button>
    </>
  );
};

export default ErcTokenInput;
