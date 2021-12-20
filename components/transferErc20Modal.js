import { Button, Input, Modal } from '@mantine/core';
import { useState } from 'react';
import { useStore } from '../shared/store';
import { transferErc20 } from '../utils/transferErc20';

const TransferErc20Modal = ({
  transferErc20ModalOpend,
  setTransferErc20ModalOpend,
  selectedErc20,
}) => {
  const [provider, signer, walletAddress] = useStore((state) => [
    state.provider,
    state.signer,
    state.walletAddress,
  ]);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');

  const handlTransfer = () => {
    transferErc20({
      provider,
      signer,
      walletAddress,
      recipientAddress,
      tokenAmount,
      selectedErc20,
    });
  };

  return (
    <Modal
      opened={transferErc20ModalOpend}
      onClose={() => setTransferErc20ModalOpend(false)}
      hideCloseButton
    >
      <Input
        style={{ marginBottom: '10px' }}
        variant="default"
        onChange={(e) => setRecipientAddress(e.target.value)}
        placeholder="받는 사람 지갑 주소"
      />
      <Input
        style={{ marginBottom: '10px' }}
        variant="default"
        onChange={(e) => setTokenAmount(e.target.value)}
        placeholder="수량"
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outline" onClick={handlTransfer}>
          전송
        </Button>
      </div>
    </Modal>
  );
};

export default TransferErc20Modal;
