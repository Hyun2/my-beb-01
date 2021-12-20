import { Button, Input, Modal } from '@mantine/core';

const TransferErc721Modal = ({
  transferErc721ModalOpend,
  setTransferErc721ModalOpend,
}) => {
  return (
    <Modal
      opened={transferErc721ModalOpend}
      onClose={() => setTransferErc721ModalOpend(false)}
      hideCloseButton
    >
      <Input
        style={{ marginBottom: '10px' }}
        variant="default"
        placeholder="받는 사람 지갑 주소"
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outline">전송</Button>
      </div>
    </Modal>
  );
};

export default TransferErc721Modal;
