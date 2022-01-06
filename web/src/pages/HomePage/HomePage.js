import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CasesCell from 'src/components/CasesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Salesforce Redwood Integration"
        description="An example app using Salesforce with Redwood.js"
      />

      <h1>Salesforce + Redwood = ❤️</h1>

      <CasesCell />
    </>
  )
}

export default HomePage
