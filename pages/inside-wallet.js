import {
  Badge,
  Button,
  Card,
  Col,
  Grid,
  Group,
  Image,
  Input,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useStore } from '../shared/store';

const InsideWallet = () => {
  const [erc20List, setErc20List] = useStore((state) => [
    state.erc20List,
    state.setErc20List,
  ]);
  const [erc721List, setErc721List] = useStore((state) => [
    state.erc721List,
    state.setErc721List,
  ]);
  const theme = useMantineTheme();

  return (
    <div>
      <Grid>
        <Col span={5}>
          <div style={{ display: 'flex' }}>
            <Input
              style={{ flex: 1, marginRight: '10px' }}
              variant="default"
              placeholder="ERC20 Token Contract"
            />
            <Button>추가</Button>
          </div>
          <div>
            {erc20List.map((erc20) => {
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
                  key={erc20.tokenAddr}
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
            })}
          </div>
        </Col>
        <Col span={7}>
          <div style={{ display: 'flex' }}>
            <Input
              style={{ flex: 1, marginRight: '10px' }}
              variant="default"
              placeholder="ERC721 Token Contract"
            />
            <Button>추가</Button>
          </div>
          <div>
            <Grid>
              {erc721List.map((erc721) => {
                return (
                  <Col key={erc721.tokenAddr} span={6}>
                    <Card
                      style={{ marginTop: '10px' }}
                      shadow="sm"
                      padding="lg"
                    >
                      <Card.Section>
                        <Image
                          src={erc721.tokenURI}
                          height={160}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group
                        position="apart"
                        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                      >
                        <Text weight={500}>{erc721.name}</Text>
                        <Badge color="pink" variant="light">
                          ${erc721.symbol}
                        </Badge>
                        <Button>전송</Button>
                      </Group>
                    </Card>
                  </Col>
                );
              })}
            </Grid>
          </div>
        </Col>
      </Grid>
    </div>
  );
};

export default InsideWallet;
