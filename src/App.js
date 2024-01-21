import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import PackagePage from './components/PackagePage';
import { AuthProvider } from './AuthContext';

const packages = [
    {
      id: '1',
      src: 'destination1.jpg',
      text: "Explore the beautiful beaches and vibrant culture of this glamorous City.",
      label: 'Luxury',
      path: '/services',
      city: 'DUBAI',
      price: '1000$',
    },
    {
      id: '2',
      src: 'destination2.jpg',
      text: 'Discover the historic landmarks and delicious cuisine of historic masterpiece.',
      label: 'Sightseeing',
      path: '/services',
      city: 'ISTANBUL',
      price: '500$',
    },
    {
      id: '3',
      src: 'destination3.jpg',
      text: 'Experience the natural beauty and adventure activities on multiple Islands.',
      label: 'Relax',
      path: '/services',
      city: 'MALDIVES',
      price: '200$',
    },
    {
      id: '4',
      src: 'destination4.jpg',
      text: 'Discover the timeless beauty historic architecture and scenic riverfront.',
      label: 'Nature',
      path: '/services',
      city: 'PORTO',
      price: '1200$',
    },
    {
      id: '5',
      src: 'destination5.jpg',
      text: 'Cobblestone streets, iconic castle, and festivals. Enchanting Scottish adventure.',
      label: 'City break',
      path: '/services',
      city: 'EDINBURGH',
      price: '1000$',
    },
  ];

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
