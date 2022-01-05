import { Connection } from 'jsforce'

const ACCESS_TOKEN = `${process.env.SALESFORCE_ACCESS_TOKEN}`
const INSTANCE_URL = `${process.env.SALESFORCE_INSTANCE_URL}`

/**
 * Retrieve a valid access token from Salesforce.
 *
 * Currently hits the OAuth2 token endpoint using the password grant type.
 *
 * @see https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_grant_types.htm
 * @see https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_endpoints.htm&type=5
 * @see https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_username_password_flow.htm&type=5
 */
async function getToken() {
  // TODO: Actually used the client secrets, etc to get a fresh token
  return ACCESS_TOKEN
}

async function getConnection() {
  const conn = new Connection({
    instanceUrl: INSTANCE_URL,
    accessToken: await getToken(),
  })
  return conn
}

function sfCaseToCase(sfCase) {
  return {
    id: sfCase.Id,
    accountId: sfCase.AccountId,
    accountName: sfCase?.Account?.Name,
    caseNumber: sfCase.CaseNumber,
    contactName: sfCase?.Contact?.Name,
    contactEmail: sfCase?.Contact?.Email,
    status: sfCase.Status,
    description: sfCase.Description,
    subject: sfCase.Subject,
  }
}

async function getCases() {
  const conn = await getConnection()
  const results = await conn.query(
    'SELECT Id, AccountId, Account.Name, CaseNumber, Contact.Name, Contact.Email, Status, Description, Subject FROM Case'
  )

  const cases = results.records.map(sfCaseToCase)

  return cases
}

const cases = [
  {
    id: '1',
    accountId: '1',
    contactId: '1',
    contactEmail: 'test@test.com',
    subject: 'Test Case',
    description: 'Testing out GraphQL',
    status: 'New',
  },
]

export const sfCases = () => {
  const conn = getConnection()
  return getCases(conn)
}

export const sfCase = ({ id }) => {
  return cases.find((c) => c.id === id)
}

export const createSfCase = ({ input }) => {
  return {}
}

export const updateSfCase = ({ id, input }) => {
  return {}
}

export const deleteSfCase = ({ id }) => {
  return {}
}
