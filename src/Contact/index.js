import React from 'react'
import {
  PageTitle,
  Form,
  FormGroup,
  Button,
  TextField,
  TextArea
} from './styles'

const index = () => {
  const defaultState = {
    name_field: '',
    message_field: '',
    email_field: ''
  }

  const [state, updateState] = React.useState(defaultState)

  const updateFormValues = e => {
    const target = e.target
    updateState(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  return (
    <section className="contact">
      <header>
        <PageTitle>Contact</PageTitle>
      </header>
      <Form method="POST">
        <FormGroup className="form_group">
          <TextField
            aria-label="name"
            onChange={updateFormValues}
            type="text"
            id="name"
            name="name_field"
            value={state.name_field}
            placeholder="First Name"
          />
        </FormGroup>
        <FormGroup className="form_group">
          <TextField
            aria-label="email"
            onChange={updateFormValues}
            type="email"
            id="email"
            name="email_field"
            value={state.email_field}
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup className="form_group">
          <TextArea
            aria-label="Message"
            onChange={updateFormValues}
            name="message_field"
            id="message"
            rows="4"
            placeholder="Message"
            value={state.message_field}
          ></TextArea>
        </FormGroup>
        <Button>Send</Button>
      </Form>
    </section>
  )
}

export default index
