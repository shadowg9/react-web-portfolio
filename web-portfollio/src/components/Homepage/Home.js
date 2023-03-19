import React from 'react';
import './Home.css';

import * as Icon from 'react-bootstrap-icons';



const Home = props => {
    return (
        
        <div>
            <h1 class="h">Mohammed Sajjad</h1>
            <h2 class="h"><a href="https://github.com/shadowg9" target="_blank"> <Icon.Github size={40}/>  </a>Full-Stack Web Developer<a href="https://www.linkedin.com/in/mohammed-sajjad-141889214/" target="_blank"> <Icon.Linkedin size={40}/>  </a></h2>

            


 
  
  <img src="https://cdn.discordapp.com/attachments/605298969874268160/1087012769271910400/codingpic.PNG" class="center"/>

  


            

            
            <h1 class="h">ABOUT ME</h1>
            <div class="row">
                <div class="column">
                    <p>I am an avid full-stack programmer seeking to perfect my craft and aspire to make positive contirbutions for future clients and companies, and in doing so I hope to continue to develop and cultivate my technical skills.  </p>
                    <p>I am located in Houston, Texas and graduated with a Bachelors in Computer Information Systems. Asides from programming, my other interests lies in attaining knowledge from indisciplinary fields, such as Physics, Philosophy, Social Sciences, and Logic.</p>
                    <p>I was taught a diverse understanding of different technologies and languages. With these knowledge acquisitions, I aim to be a jack of all trades with web development.</p>
                </div>
                <div class="column2">

                    <div class="logos">
                    
                    <div class="image">
                    <p><img src="https://image-ms.s3.amazonaws.com/react.png" class="logo"/></p>
                    <p>React</p>
                    
                   
                    <p><img src="https://image-ms.s3.amazonaws.com/nodejs.png" class="logo"/></p>
                    <p>NodeJS</p>
                    </div>

                    <div class="image">
                    <p><img src="https://image-ms.s3.amazonaws.com/mysql.png" class="logo"/></p>
                    <p>MySQL</p>
                    
                   
                    <p><img src="https://image-ms.s3.amazonaws.com/mongodb.png" class="logo"/></p>
                    <p>MongoDB</p>
                    </div>

                    <div class="image">
                    <p><img src="https://image-ms.s3.amazonaws.com/java.png" class="logo"/></p>
                    
                    
                   
                    <p><img src="https://image-ms.s3.amazonaws.com/springboot.png" class="logo"/></p>
                    <p>SpringBoot</p>
                    </div>

                    <div class="image">
                    <p><img src="https://image-ms.s3.amazonaws.com/git.png" class="logo"/></p>
                    <p>Git</p>
                    
                   
                    <p><img src="https://image-ms.s3.amazonaws.com/aws.png" class="logo"/></p>
                    <p>AWS Cloud</p>
                    </div>

                    </div>
                   
                    
                    
                </div>
           </div>

           
           
            <h1 class="h" id="contact">CONTACT</h1>
            <form>

            <input name="name" type="text" class="feedback-input" placeholder="Name" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
            <input type="submit" value="SUBMIT"/>

            </form>

         

        
            
           



            

            
           


        </div>
    );
};



   






export default Home;
