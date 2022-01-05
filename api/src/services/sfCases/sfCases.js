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
  return cases
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
