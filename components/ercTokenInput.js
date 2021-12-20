import { Button, Input } from '@mantine/core';
import { addNewErc20Token } from '../utils/addNewErc20Token';
import AddNewErc721Token from '../utils/addNewErc721Token';
import { useStore } from '../shared/store';

const ErcTokenInput = ({ placeholder, tokenType, setTokenContractType }) => {
  const [provider, signer] = useStore((state) => [
    state.provider,
    state.signer,
  ]);

  const addNewTokenContract = (provider, signer) => {
    if (tokenType === 'erc20') {
      addNewErc20Token(provider, signer);
    } else if (tokenType === 'erc721') {
      AddNewErc721Token(provider, signer);
    }
  };

  return (
    <>
      <Input
        style={{ flex: 1, marginRight: '10px' }}
        variant="default"
        placeholder={placeholder}
      />
      <Button onClick={() => addNewTokenContract(provider, signer)}>
        추가
      </Button>
    </>
  );
};

export default ErcTokenInput;
