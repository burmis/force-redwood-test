import { Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import CasesCell from 'src/components/CasesCell'
import { useState } from 'react'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { MailIcon } from '@heroicons/react/solid'

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
        <p className="mx-auto py-2">
          Filter the displayed cases by email. In production, this would be tied
          to a users email or other values set by the team.
        </p>
        <Form
          className="border border-gray-200 rounded-lg px-2 py-2 my-2"
          onSubmit={onSubmit}
        >
          <Label
            name="contactEmail"
            className="block text-sm font-medium text-gray-700"
            errorClassName="block text-sm font-medium text-gray-700 error"
          >
            Client Email:
          </Label>

          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <TextField
              name="contactEmail"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              errorClassName="error focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              validation={{ reqired: true }}
              placeholder="you@example.com"
            />
          </div>
          <Submit className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Filter
          </Submit>
        </Form>
        <CasesCell contactEmail={contactEmail} />
      </MainLayout>
    </>
  )
}

export default HomePage
