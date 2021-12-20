import { Button, Input } from '@mantine/core';

const ErcTokenInput = ({ placeholder, tokenType, setTokenContractType }) => {
  const handleClick = () => {
    if (tokenType === 'erc20') {
      console.log('test');
    } else if (tokenType === 'erc721') {
      console.log('object');
    }
  };

  return (
    <>
      <Input
        style={{ flex: 1, marginRight: '10px' }}
        variant="default"
        placeholder={placeholder}
      />
      <Button onClick={handleClick}>추가</Button>
    </>
  );
};

export default ErcTokenInput;
