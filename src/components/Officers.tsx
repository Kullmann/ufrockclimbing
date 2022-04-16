import { Card, Grid, Image, Text } from "@mantine/core"


function Officers() {
  return (
  <div style={{margin: 20}}>
    <Grid>
      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://www.climbingbusinessjournal.com/wp-content/uploads/Butora-new-markless-rental-shoe-Habara-DoubleToe.jpg" height={160} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>President</b></Text>
            <Text align="center">Arden O'Neil</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://www.climbingbusinessjournal.com/wp-content/uploads/Butora-new-markless-rental-shoe-Habara-DoubleToe.jpg" height={160} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Vice President</b></Text>
            <Text align="center">Ben Ryder</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://www.climbingbusinessjournal.com/wp-content/uploads/Butora-new-markless-rental-shoe-Habara-DoubleToe.jpg" height={160} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Treasurer</b></Text>
            <Text align="center">Patrick Moorhead</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://preview.redd.it/8e6rxur3xf431.jpg?auto=webp&s=b3122a1756b29b56114cae3e0a41b60a44fa8b4a" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Head Coach</b></Text>
            <Text align="center">Adam Ondra</Text>
          </Card.Section>
        </Card>
      </Grid.Col>
      
    </Grid>
    </div>
  )
}

export default Officers