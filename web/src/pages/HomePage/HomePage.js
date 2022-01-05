import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Salesforce Redwood Integration"
        description="An example app using Salesforce with Redwood.js"
      />

      <h1>Salesforce + Redwood = ❤️</h1>
    </>
  )
}

export default HomePage
