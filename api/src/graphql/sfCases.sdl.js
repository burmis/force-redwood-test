export const schema = gql`
  type sfCase {
    id: String!
    accountId: String
    accountName: String
    caseNumber: String
    contactId: String
    contactName: String
    contactEmail: String
    subject: String
    description: String
    status: String
  }

  type Query {
    sfCases: [sfCase!]! @requireAuth
    sfCase(id: String!): sfCase @requireAuth
  }

  input CreateSfCaseInput {
    email: String!
    name: String
  }

  input UpdateSfCaseInput {
    email: String
    name: String
  }

  type Mutation {
    createSfCase(input: CreateSfCaseInput!): sfCase! @requireAuth
    updateSfCase(id: String!, input: UpdateSfCaseInput!): sfCase! @requireAuth
    deleteSfCase(id: String!): sfCase! @requireAuth
  }
`
