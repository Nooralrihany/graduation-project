import React from 'react'
import { Navbar } from './components/Navbar';
import { Sidebar } from './Sidebar';
// import { Intro } from './Intro'
import { Login} from './components/auth/login/index'

const App = () => {
  return (
    <>
    <Navbar/>
    <Login/>
    <Sidebar/>
    {/* <Intro/> */}
    </>
  )
}
export default App;