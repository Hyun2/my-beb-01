import { Button, Input, Modal } from '@mantine/core';

const AddTokenModal = ({
  transferTokenModalOpend,
  setTransferTokenModalOpend,
}) => {
  return (
    <Modal
      opened={transferTokenModalOpend}
      onClose={() => setTransferTokenModalOpend(false)}
      hideCloseButton
    >
      <Input variant="default" placeholder="Default variant" />
      <Button>추가</Button>
    </Modal>
  );
};

export default AddTokenModal;
