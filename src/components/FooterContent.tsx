import { Button, Stack } from "@mantine/core"
import { BrandInstagram, BrandFacebook } from "tabler-icons-react"

function FooterContent() {
  return (
    <>
      <Stack align="center">
        <Button
          component="a"
          href="https://www.instagram.com/uf_rockclimbing/?hl=en"
          leftIcon={<BrandInstagram size={20} />}
        >
          Follow UF Rock Climbing on Instagram
        </Button>
        <Button
          component="a"
          href="https://www.facebook.com/groups/335862368098492"
          leftIcon={<BrandFacebook size={20} />}
        >
          Join Our Facebook Group
        </Button>
        Built by Sean Kullmann
      </Stack>
    </>
  )
}

export default FooterContent
