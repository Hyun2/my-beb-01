import { Button, Input } from '@mantine/core';
import NotLogin from '../components/notLogin';
import { useStore } from '../shared/store';

const MintNFT = () => {
  const walletAddress = useStore((state) => state.walletAddress);

  if (!walletAddress) return <NotLogin />;

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <Input
        style={{ marginBottom: '10px' }}
        variant="default"
        placeholder="받는 사람 지갑 주소"
      />
      <Input
        style={{ marginBottom: '10px' }}
        variant="default"
        placeholder="외부 링크(이미지 URL)"
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="light">NFT 생성</Button>
      </div>
    </div>
  );
};

export default MintNFT;
