import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Cart from './Cart';

import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <NavBar />
     
     <Routes>
       <Route path="/" element = {<Home />} />
       <Route path="about" element = {<About />} />
       <Route path="cart" element = {<Cart />} />
     </Routes>
    </div>
  );
}

export default App;
