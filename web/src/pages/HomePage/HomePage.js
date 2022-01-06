import { Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import CasesCell from 'src/components/CasesCell'
import { useState } from 'react'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  const [contactEmail, setContactEmail] = useState('')

  const onSubmit = (data) => {
    console.log(data)
    setContactEmail(data.contactEmail)
  }

  return (
    <>
      <MetaTags
        title="Salesforce Redwood Integration"
        description="An example app using Salesforce with Redwood.js"
      />

      <MainLayout>
        <p>
          Filter the displayed cases by email. In production, this would be tied
          to a users email or other values set by the team.
        </p>
        <Form onSubmit={onSubmit}>
          <Label
            name="contactEmail"
            className="label"
            errorClassName="label error"
          >
            Client Email:
          </Label>
          <TextField
            name="contactEmail"
            className="input"
            errorClassName="input error"
            validation={{ reqired: true }}
          />
          <Submit className="button">Filter</Submit>
        </Form>
        <CasesCell contactEmail={contactEmail} />
      </MainLayout>
    </>
  )
}

export default HomePage
