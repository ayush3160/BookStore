import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Search from './Search';

import { Routes, Route} from "react-router-dom";

import {useState} from "react"

function App() {

  const [search,setSearch] = useState("")

  const handleSearch = (type) => {
    setSearch(type);
  }

  return (
    <div className="App">
     <NavBar handleSearch = {handleSearch} search = {search}/>
     
     <Routes>
       <Route path="/" element = {<Home />} />
       <Route path="about" element = {<About />} />
       <Route path="cart" element = {<Cart />} />
       <Route path="search" element = {<Search search = {search}/>} />
     </Routes>
    </div>
  );
}

export default App;
