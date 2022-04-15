import * as Yup from "yup"
import { useRef, useState } from "react"
import {
  Modal,
  Button,
  Group,
  TextInput,
  Box,
  Textarea,
  Alert,
} from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import emailjs from "@emailjs/browser"

const schema = Yup.object().shape({
  firstName: Yup.string().min(2, "First name should have at least 2 letters"),
  lastName: Yup.string().min(2, "Last name should have at least 2 letters"),
  email: Yup.string().email("Invalid email"),
  message: Yup.string().min(1, "Message cannot be empty"),
})

function ContactForm() {
  const [opened, setOpened] = useState(false)
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const formRef = useRef()

  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })

  const sendEmail = (data: any, e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_zijwo1e",
        "template_8dq52y5",
        // @ts-ignore
        formRef.current,
        "OXcEtwHLSJ4Eo2tu2"
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormSubmittedSuccessfully(true)
        },
        (error) => {
          console.log(error.text)
          setFormSubmittedSuccessfully(false)
        }
      ).finally(() => setFormSubmitted(true))


  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Send us a message!"
      >
        {
          <Box sx={{ maxWidth: 400 }} mx="auto">
            {/* @ts-ignore */}
            <form ref={formRef} onSubmit={form.onSubmit(sendEmail)}>
              <Group noWrap>
                <TextInput
                  name="firstName"
                  required
                  label="First Name"
                  placeholder="John"
                  {...form.getInputProps("firstName")}
                />

                <TextInput
                  name="lastName"
                  required
                  label="Last Name"
                  placeholder="Smith"
                  {...form.getInputProps("lastName")}
                />
              </Group>

              <TextInput
                name="email"
                required
                label="Email"
                placeholder="johnsmith@email.com"
                {...form.getInputProps("email")}
              />

              <Textarea
                name="message"
                placeholder="I love rock climbing"
                label="Message"
                required
                {...form.getInputProps("message")}
              />

              <Group position="center" mt="md" noWrap>
                {formSubmitted &&
                  (formSubmittedSuccessfully ? (
                    <Alert color="green">Form submitted successfully!</Alert>
                  ) : (
                    <Alert color="red">Form submission failed</Alert>
                  ))}
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        }
      </Modal>

      <Button onClick={() => setOpened(true)}>Contact Us</Button>
    </>
  )
}

export default ContactForm
