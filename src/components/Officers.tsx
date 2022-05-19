import { Card, Grid, Image, Text } from "@mantine/core"


function Officers() {
  return (
  <div style={{margin: 20}}>
    <Grid>
      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>President</b></Text>
            <Text align="center">Ben Ryder</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Vice President</b></Text>
            <Text align="center">Toni Earle-Randell</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Treasurer</b></Text>
            <Text align="center">Rachel Orr</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Secretary</b></Text>
            <Text align="center">Alex Johnson</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Historian</b></Text>
            <Text align="center">Matthew Cupelli</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Social Media Director</b></Text>
            <Text align="center">Catherine Padilla</Text>
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card style={{backgroundColor: "#F8F9FA"}} shadow="md">
          <Card.Section>
            <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height={"100%"} />
          </Card.Section>

          <Card.Section>
            <Text align="center"><b>Head Coach</b></Text>
            <Text align="center">Jason Schibler</Text>
          </Card.Section>
        </Card>
      </Grid.Col>
      
    </Grid>
    </div>
  )
}

export default Officers