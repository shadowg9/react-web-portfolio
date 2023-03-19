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
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://image-ms.s3.amazonaws.com/Car2.png"
                    alt = "Two"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://image-ms.s3.amazonaws.com/Car3.png"
                    alt = "Three"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://image-ms.s3.amazonaws.com/Car4.png"
                    alt = "Four"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src ="https://image-ms.s3.amazonaws.com/Car5.png"
                    alt = "Five"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src ="https://image-ms.s3.amazonaws.com/Car6.png"
                    alt = "Six"
                />
                
            </Carousel.Item>

          

           
        </Carousel>

        </div>
    );
};

export default pics;
