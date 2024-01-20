import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
