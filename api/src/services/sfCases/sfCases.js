import { Connection } from 'jsforce'
import fetch, { Request } from 'node-fetch'

const SALESFORCE_INSTANCE_URL = `${process.env.SALESFORCE_INSTANCE_URL}`
const SALESFORCE_CLIENT_ID = `${process.env.SALESFORCE_CLIENT_ID}`
const SALESFORCE_CLIENT_SECRET = `${process.env.SALESFORCE_CLIENT_SECRET}`
const SALESFORCE_USER_NAME = `${process.env.SALESFORCE_USER_NAME}`
const SALESFORCE_USER_PASSWORD = `${process.env.SALESFORCE_USER_PASSWORD}`
const SALESFORCE_USER_SECURITY_TOKEN = `${process.env.SALESFORCE_USER_SECURITY_TOKEN}`

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
  const url = `${SALESFORCE_INSTANCE_URL}/services/oauth2/token`
  // We need to concatenate the user password with their security token.
  const password = `${SALESFORCE_USER_PASSWORD}${SALESFORCE_USER_SECURITY_TOKEN}`
  const formParams = {
    grant_type: 'password',
    client_id: SALESFORCE_CLIENT_ID,
    client_secret: SALESFORCE_CLIENT_SECRET,
    username: SALESFORCE_USER_NAME,
    password,
  }
  const params = new URLSearchParams(formParams)

  const request = new Request(url, {
    method: 'POST',
    body: params.toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  const response = await fetch(request)
  const json = await response.json()
  const accessToken = json.access_token

  return accessToken
}

async function getConnection() {
  const conn = new Connection({
    instanceUrl: SALESFORCE_INSTANCE_URL,
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
