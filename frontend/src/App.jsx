//import { Routes, Route, Navigate } from 'react-router-dom';
//import LoginPage from './components/LoginPage/LoginPage';
//import Explorer from './components/Explorer/Explorer';
//import Register from './components/Register/Register';
// import Navbar from './components/Navbar/Navbar';
// import Categories from './components/Categories/Categories';
// import SearchBar from './components/SearchBar/SearchBar';




import Navbar from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import SearchBar from './components/SearchBar/SearchBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
 
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/Home' element={<Explorer />} />
      </Routes>
      <Footer/>
   </Router>
    </>
  )
}

export default App


package com.karolkusper.KINEMA.entity;