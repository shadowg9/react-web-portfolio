import React from 'react';
import './Nav.css'
import * as Icon from 'react-bootstrap-icons';

const Nav = props => {
    return (

        <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">

      
     <a href="/" > <Icon.Person size={40}/>  Mohammed Sajjad </a>
      
      
    
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
            <li class="nav-item">
              <a class="nav-link mx-2 active" href="https://resume-ms.s3.amazonaws.com/Resume+-+Mohammed+Sajjad.pdf" target="_blank" id="res">Resume</a>

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


