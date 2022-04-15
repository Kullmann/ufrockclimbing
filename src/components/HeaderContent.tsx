import { Text, Button, Group, Title } from '@mantine/core';

function HeaderContent() {
  return (<>

    <Group position='left' spacing="xs">
      <Title style={{ color: '#0021A5' }}>UF</Title><Title style={{ color: '#FA4616' }}>Rock Climbing</Title>
    </Group>

    <Group position = 'right'>
      <Text variant="link" component="a" href="#">About</Text>

      <Text variant="link" component="a" href="#">Officers</Text>

      <Button>Contact Us</Button>
    </Group>

  </>);
}

export default HeaderContent;
