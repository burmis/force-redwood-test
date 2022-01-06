export const QUERY = gql`
  query CasesQuery($contactEmail: String) {
    cases: sfCases(contactEmail: $contactEmail) {
      id
      caseNumber
      accountId
      accountName
      contactId
      contactName
      contactEmail
      subject
      description
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ cases }) => {
  return (
    <ul className="border border-gray-200 rounded-lg px-2 py-2 my-2">
      {cases.map((item) => {
        return (
          <li className="" key={item.id}>
            {JSON.stringify(item)}
          </li>
        )
      })}
    </ul>
  )
}
