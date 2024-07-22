import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './Sidebar'; // Adjust path if necessary
import { Login } from './components/auth/login/index';
import { Register } from './components/auth/register/index';
import { Contact } from './components/Contact';
import { Home } from './components/auth/home/index';
// import {Intro} from './Intro/page'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Intro/> */}
        <div className="appContainer">
          {/* Use <Routes> instead of <Route> */}
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
