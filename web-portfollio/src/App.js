import { Routes, Route } from 'react-router';
import React from 'react';
import './App.css';
import Nav from './components/NavBar/Nav';
import Home from './components/Homepage/Home';
import Project from './components/ProjectPage/Project';
///react-web-portfolio for github pages; in local you take that off





function App() {
  return (
    
    <div>
      <Nav />
      <div className="container">
      <Routes>
        <Route path="/react-web-portfolio" exact element={<Home />}  />
        <Route path="/react-web-portfolio/proj" exact element={<Project />} />


      </Routes>
    </div>
    </div>
  );
}

export default App;
