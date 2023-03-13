import { Routes, Route } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/proj" element={<Project />} />


      </Routes>
    </div>
  );
}

export default App;
