import React from 'react';
// import Card from './Card/Card';
import Carousel from 'react-bootstrap/Carousel';


function pics() {
    return (

        <div>
            <h1>Projects</h1>

            <h3>Car Dealership Web Application</h3> 

        <Carousel>
            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://image-ms.s3.amazonaws.com/Car1.png"
                    alt = "One"
                />
                <p>Home Page</p>
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://image-ms.s3.amazonaws.com/Car2.png"
                    alt = "Two"
                />
                <p>Login Page</p>
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://image-ms.s3.amazonaws.com/Car3.png"
                    alt = "Three"
                />
                <p>Registration Page</p>
                
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://image-ms.s3.amazonaws.com/Car4.png"
                    alt = "Four"
                />
                <p>Table of Available Cars</p>
                
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src ="https://image-ms.s3.amazonaws.com/Car5.png"
                    alt = "Five"
                />
                <p>Users Table + Profile Dropdown</p>
                
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src ="https://image-ms.s3.amazonaws.com/Car6.png"
                    alt = "Six"
                />
                <p>Form to Register Vehicle into Table</p>
                
            </Carousel.Item>

          

           
        </Carousel>

        <h4>Description</h4>
        <p></p>

        </div>
    );
};

export default pics;
