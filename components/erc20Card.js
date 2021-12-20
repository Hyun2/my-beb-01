import { Button } from '@mantine/core';

const Erc20Card = ({ erc20 }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '4px',
        marginTop: '10px',
      }}
    >
      <span style={{ textAlign: 'center' }}>{erc20.name}</span>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{ alignSelf: 'center' }}
        >{`${erc20.balance} ${erc20.symbol}`}</span>
        <Button>전송</Button>
      </div>
    </div>
  );
};

export default Erc20Card;
