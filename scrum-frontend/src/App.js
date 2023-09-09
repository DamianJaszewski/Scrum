import React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import background from "./img/backgroundIce.jpg"

import Backlog from "./components/Backlog";
import Sprint from "./components/Sprint";
import Retro from "./components/Retro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App(){
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}} class="container-fluid wrapper">
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Backlog/>}/>
            </Routes>
            <Routes>
              <Route path="/sprint" element={<Sprint/>}/>
            </Routes>
            <Routes>
              <Route path="/retro" element={<Retro/>}/>
            </Routes>
            <Routes>
              <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
              <Route path="/Signup" element={<Signup/>}/>
            </Routes>
          <div class="footer">
            <Footer />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
