import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import PackagePage from './components/PackagePage';
import { AuthProvider } from './AuthContext';
import packages from './PackagesData'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home packages={packages}/>}/>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/package/:id' element={<PackagePage packages={packages}/>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
