import NotLogin from '../components/notLogin';
import { useStore } from '../shared/store';

const MintNFT = () => {
  const walletAddress = useStore((state) => state.walletAddress);

  if (!walletAddress) return <NotLogin />;

  return <div>Mint NFT</div>;
};

export default MintNFT;
