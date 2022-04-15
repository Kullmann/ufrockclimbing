import { Text, Button, Group, Title, MediaQuery } from '@mantine/core';

function HeaderContent() {
  return (<>

    <Group position='left' spacing="xs">
      <Title style={{ color: '#0021A5' }}>UF</Title><Title style={{ color: '#FA4616' }}>Rock Climbing</Title>
    </Group>
    
    <MediaQuery smallerThan="xs" styles={{ display: "none"}}>
      <Group position = 'right'>
        <Text variant="link" component="a" href="#">About</Text>

        <Text variant="link" component="a" href="#">Officers</Text>

        <Button>Contact Us</Button>
      </Group>
    </MediaQuery>

  </>);
}

export default HeaderContent;
