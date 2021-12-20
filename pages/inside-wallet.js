import { Col, Grid } from '@mantine/core';
import { useState } from 'react';
import Erc20Card from '../components/erc20Card';
import Erc721Card from '../components/erc721Card';
import ErcTokenInput from '../components/ercTokenInput';
import { useStore } from '../shared/store';
import NotLogin from '../components/notLogin';
import TransferErc20Modal from '../components/transferErc20Modal';
import TransferErc721Modal from '../components/transferErc721Modal';

const InsideWallet = () => {
  const [erc20List, setErc20List] = useStore((state) => [
    state.erc20List,
    state.setErc20List,
  ]);
  const [erc721List, setErc721List] = useStore((state) => [
    state.erc721List,
    state.setErc721List,
  ]);
  const [transferErc20ModalOpend, setTransferErc20ModalOpend] = useState(false);
  const [transferErc721ModalOpend, setTransferErc721ModalOpend] =
    useState(false);
  const [tokenContractAddr, setTokenContractAddr] = useState('');
  const [tokenContractType, setTokenContractType] = useState('');
  const [selectedErc20, setSelectedErc20] = useState(null);
  const [selectedErc721, setSelectedErc721] = useState(null);
  const walletAddress = useStore((state) => state.walletAddress);
  const [recipientAddress, setRecipientAddress] = useState(null);

  const toggleTransferErc20Modal = () => {
    setTransferErc20ModalOpend(!transferErc20ModalOpend);
  };

  const toggleTransferErc721Modal = () => {
    setTransferErc721ModalOpend(!transferErc721ModalOpend);
  };

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
                <Erc20Card
                  key={erc20.name + erc20.tokenContractAddress}
                  toggleTransferErc20Modal={toggleTransferErc20Modal}
                  setSelectedErc20={() => setSelectedErc20(erc20)}
                  erc20={erc20}
                />
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
                    <Erc721Card
                      erc721={erc721}
                      toggleTransferErc721Modal={toggleTransferErc721Modal}
                      setSelectedErc721={() => setSelectedErc721(erc721)}
                    />
                  </Col>
                );
              })}
            </Grid>
          </div>
        </Col>
      </Grid>
      <TransferErc20Modal
        transferErc20ModalOpend={transferErc20ModalOpend}
        setTransferErc20ModalOpend={setTransferErc20ModalOpend}
        selectedErc20={selectedErc20}
      />
      <TransferErc721Modal
        transferErc721ModalOpend={transferErc721ModalOpend}
        setTransferErc721ModalOpend={setTransferErc721ModalOpend}
        selectedErc721={selectedErc721}
      />
    </div>
  );
};

export default InsideWallet;
