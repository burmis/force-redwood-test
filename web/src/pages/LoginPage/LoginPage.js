import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <h1>LoginPage</h1>
      {isAuthenticated && <p>Logged in as {currentUser.email}</p>}
      {!isAuthenticated && <p>Logged Out</p>}
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </>
  )
}

export default LoginPage
