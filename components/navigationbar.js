import { Button, Navbar } from '@mantine/core';
import { useStore } from '../shared/store';
import Link from 'next/link';
import { WalletOutlined, PlusOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const CButton = styled(Button)`
  display: flex;
`;

const Navigationbar = () => {
  const navbarOpend = useStore((state) => state.navbarOpend);

  return (
    <Navbar
      padding="md"
      // Breakpoint at which navbar will be hidden if hidden prop is true
      hiddenBreakpoint="sm"
      // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
      hidden={!navbarOpend}
      // when viewport size is less than theme.breakpoints.sm navbar width is 100%
      // viewport size > theme.breakpoints.sm – width is 300px
      // viewport size > theme.breakpoints.lg – width is 400px
      width={{ sm: 300, lg: 400 }}
    >
      <Link href="/inside-wallet">
        <CButton leftIcon={<WalletOutlined />} variant="white" color="dark">
          지갑 조회
        </CButton>
      </Link>
      <Link href="/mint-nft">
        <CButton leftIcon={<PlusOutlined />} variant="white" color="dark">
          NFT 민트
        </CButton>
      </Link>
    </Navbar>
  );
};

export default Navigationbar;
