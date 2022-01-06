export const QUERY = gql`
  query CasesQuery {
    cases: sfCases {
      id
      caseNumber
      accountId
      accountName
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
    <ul>
      {cases.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
