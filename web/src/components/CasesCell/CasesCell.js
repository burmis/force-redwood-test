import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

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
          <li
            className="my-4 border border-gray-200 rounded-lg px-2 py-2"
            key={item.id}
          >
            {JSON.stringify(item)}
            {/* <CaseCard /> */}
          </li>
        )
      })}
    </ul>
  )
}

// const imageUrl =
//   'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'

// function CaseCard() {
//   return (
//     <li
//       key={person.email}
//       className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
//     >
//       <div className="w-full flex items-center justify-between p-6 space-x-6">
//         <div className="flex-1 truncate">
//           <div className="flex items-center space-x-3">
//             <h3 className="text-gray-900 text-sm font-medium truncate">
//               {person.name}
//             </h3>
//             <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
//               {person.role}
//             </span>
//           </div>
//           <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
//         </div>
//         <img
//           className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
//           src={person.imageUrl}
//           alt=""
//         />
//       </div>
//       <div>
//         <div className="-mt-px flex divide-x divide-gray-200">
//           <div className="w-0 flex-1 flex">
//             <a
//               href={`mailto:${person.email}`}
//               className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
//             >
//               <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
//               <span className="ml-3">Email</span>
//             </a>
//           </div>
//           <div className="-ml-px w-0 flex-1 flex">
//             <a
//               href={`tel:${person.telephone}`}
//               className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
//             >
//               <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
//               <span className="ml-3">Call</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   )
// }
