import { Grid, Group, Image, Text, Title } from "@mantine/core"

// TODO: Store image locally

function BodyContent() {
  return (
    <>
      <Group position="center">
        <Image
          // style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}
          radius="md"
          src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/215435897_1630717847123605_1045119515317379046_n.png?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_ohc=aXqN5xf1bTMAX-ttpPW&tn=T3utIPM-iYI7Ytlv&_nc_ht=scontent-atl3-1.xx&oh=00_AT-MbtpZ2RqDNtlZOfana_QqsldXr775lxEmk_omMeKKRg&oe=625D8015"
          alt="Florida Rock Climbing Club Banner"
          height={"100%"}
          width={"100%"}
        />
        <Grid>
          <Grid.Col>
            <Title>About</Title>
          </Grid.Col>
          <Grid.Col>
            <Text style={{ inlineSize: "350px", overflowWrap: "break-word" }}>
              Welcome to the official website for the University of Florida's
              Rock Climbing Club! Here you will find all club communication,
              events, and announcements. If you have any questions, feel free to
              contact us at ufrockclimbing@gmail.com!
            </Text>
          </Grid.Col>
        </Grid>
      </Group>
    </>
  )
}

export default BodyContent
