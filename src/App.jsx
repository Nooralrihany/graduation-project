import React from 'react'
import { Navbar } from './components/Navbar';
import { Sidebar } from './Sidebar';
// import { Auth} from './components/auth'

const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Auth/> */}
    <Sidebar/>
    </>
  )
}
export default App;