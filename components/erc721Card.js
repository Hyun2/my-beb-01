import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core';

const Erc721Card = ({ erc721 }) => {
  const theme = useMantineTheme();

  return (
    <Card style={{ marginTop: '10px' }} shadow="sm" padding="lg">
      <Card.Section>
        <Image src={erc721.tokenURI} height={160} alt="Norway" />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text style={{ margin: '0 auto' }} weight={500}>
          {erc721.name}
        </Text>
        <Badge style={{ margin: '0 auto' }} color="pink" variant="light">
          ${erc721.symbol}
        </Badge>
        <Button style={{ margin: '0 auto' }}>전송</Button>
      </Group>
    </Card>
  );
};

export default Erc721Card;
