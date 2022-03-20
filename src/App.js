import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PlayersScreen from './components/PlayersScreen'
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/players' element={<PlayersScreen/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
