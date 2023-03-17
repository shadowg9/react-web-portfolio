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
                    src = "https://media.discordapp.net/attachments/1019322682384330843/1022179969612394556/unknown.png?width=991&height=505"
                    alt = "One"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://cdn.discordapp.com/attachments/1019322682384330843/1022180005154934885/unknown.png"
                    alt = "Two"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className = "d-block w-100"
                    src = "https://media.discordapp.net/attachments/1019322682384330843/1022180100130734080/unknown.png?width=991&height=450"
                    alt = "Three"
                />
                
            </Carousel.Item>
           
        </Carousel>

        </div>
    );
};

export default pics;
