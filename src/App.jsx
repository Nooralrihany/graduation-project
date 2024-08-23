

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './Sidebar'; // Adjust path if necessary
import { Login } from './components/auth/login/index';
import { Register } from './components/auth/register/index';
import { Contact } from './components/Contact';
import { UserProfile } from './UserProfile';
import Places from './Places';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/Places" element={<Places/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Userprofile" element={<UserProfile />} /> {/* Adjust path to lowercase */}
            <Route path="/Contact" element={<Contact />} /> {/* Adjust path to lowercase */}
            <Route path="/Places" element={<Places />} /> Add route for Places if needed
            
          </Routes>
        </div>
        {/* <Places/> */}
      </div>
    </Router>
  );
}

export default App;

