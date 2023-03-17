import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = props => {
    return (

        <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
      
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a class="nav-link mx-2 active" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 active" href="/">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 active" href="/">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 active" href="proj">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


        // <div>

        //     <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        //         <div className="container-fluid">
                   
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //                 <ul className="navbar-nav">

        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="/" id="navbar">Home</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="proj" id="navbar">Projects</Link>
        //                     </li>
                        

        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>

        // </div>
    );
};

export default Nav;


