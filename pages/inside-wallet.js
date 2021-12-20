import { Col, Grid } from '@mantine/core';
import { useState } from 'react';
import AddTokenModal from '../components/TransfertokenModal';
import Erc20Card from '../components/erc20Card';
import Erc721Card from '../components/erc721Card';
import ErcTokenInput from '../components/ercTokenInput';
import { useStore } from '../shared/store';
import NotLogin from '../components/notLogin';

const InsideWallet = () => {
  const [erc20List, setErc20List] = useStore((state) => [
    state.erc20List,
    state.setErc20List,
  ]);
  const [erc721List, setErc721List] = useStore((state) => [
    state.erc721List,
    state.setErc721List,
  ]);
  const [transferTokenModalOpend, setTransferTokenModalOpend] = useState(false);
  const [tokenContractAddr, setTokenContractAddr] = useState('');
  const [tokenContractType, setTokenContractType] = useState('');
  const walletAddress = useStore((state) => state.walletAddress);

  if (!walletAddress) return <NotLogin />;

  return (
    <div>
      <Grid>
        <Col span={5}>
          <div style={{ display: 'flex' }}>
            <ErcTokenInput
              setTokenContractType={setTokenContractType}
              placeholder="ERC20 Token Contract Address"
              tokenType="erc20"
            />
          </div>
          <div>
            {erc20List.map((erc20) => {
              return (
                <Erc20Card key={erc20.tokenContractAddress} erc20={erc20} />
              );
            })}
          </div>
        </Col>
        <Col span={7}>
          <div style={{ display: 'flex' }}>
            <ErcTokenInput
              setTokenContractType={setTokenContractType}
              placeholder="ERC721 Token Address"
              tokenType="erc721"
            />
          </div>
          <div>
            <Grid>
              {erc721List.map((erc721) => {
                return (
                  <Col
                    key={erc721.tokenContractAddress + erc721.tokenId}
                    span={6}
                  >
                    <Erc721Card erc721={erc721} />
                  </Col>
                );
              })}
            </Grid>
          </div>
        </Col>
      </Grid>
      <AddTokenModal
        transferTokenModalOpend={transferTokenModalOpend}
        setTransferTokenModalOpend={setTransferTokenModalOpend}
      />
    </div>
  );
};

export default InsideWallet;
