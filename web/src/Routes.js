// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import UserExamplesLayout from 'src/layouts/UserExamplesLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={UserExamplesLayout}>
        <Route path="/user-examples/new" page={UserExampleNewUserExamplePage} name="newUserExample" />
        <Route path="/user-examples/{id:Int}/edit" page={UserExampleEditUserExamplePage} name="editUserExample" />
        <Route path="/user-examples/{id:Int}" page={UserExampleUserExamplePage} name="userExample" />
        <Route path="/user-examples" page={UserExampleUserExamplesPage} name="userExamples" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
