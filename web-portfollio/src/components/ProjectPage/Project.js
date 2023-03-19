import React from 'react';
// import Card from './Card/Card';
import Carousel from 'react-bootstrap/Carousel';
import './Project.css'


function pics() {

    const handleClick = () => {
        var x = document.getElementsByClassName('hiddenText');
        x.style.display = "block";
        
    }
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

       
        <button onClick={handleClick}>Information</button>
        <h4 class="hiddenText">Purpose of Application</h4>
        <p class="hiddenText">During my time in the training program offered by Cognixia USA, we had a Capstone project where the objective was to think up of a practical solution that can be of benefit to people and to demo a prototype of that app. 
        The purpose of this application was to have an online market where people are granted the freedom and accessibility to make fair exchanges as they see fit. And these types of exchanges are meant to bypass the high car dealership fees and contactual obligations.   </p>
        <h4 class="hiddenText">Benefits</h4>
        <p class="hiddenText">&#x2022; Allow users to more easily manage their cost savings by allowing them to buy and sell used cars</p>
        <p class="hiddenText">&#x2022; Beneficial as it would give them accessibility and freedom to connect with others and make transactional exchanges with theior used vehicles</p>
        <p class="hiddenText">&#x2022; Serves to cirvumvent the high car dealership fees and gives car owners the freedom to make fluid negotiations amongst themselves</p>
        <h4 class="hiddenText">Description</h4>
        <p class="hiddenText">This application was done with a Team I worked alongside with. It was 4 people and divided between frontend and backend. The backend focused on SpringBoot with Eclipse and having the servers and database up on AWS. 
        The Frontend used Visual Studio and was tasked with desigining the webpage and fetching API's to have it be displayed on the webpage. 
        I created and populated the tables with MySQL and the data inputted was the vehicles available on the market and users that registered on the webpage. 
        The Backend used Java to handle all the business logic and used Springboot because it simplified the building process, allowed for dependency injections, and was used to connect to the database.
        We also used Git commands to constantly update our project by making push and pull requests from the repository. Lastly, the server and database was linked to AWS Elastic Beanstalk, while the website was being hosted on an S3 Bucket. </p>
        
        


        

        
           
        

        

        

       

        </div>
    );
};



export default pics;




