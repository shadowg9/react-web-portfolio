import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';



const Home = props => {
    return (
        
        <div>
            <h1 class="h">Mohammed Sajjad</h1>
            <h2 class="h">Full-Stack Web Developer</h2>

            <h1 class="h">ABOUT ME</h1>
            <div class="row">
                <div class="column">
                    <p>I am an avid full-stack programmer seeking to perfect my craft and aspire to make positive contirbutions for future clients and companies, and in doing so I hope to continue develop and cultivate my technical skills.  </p>
                    <p>I am located in Houston, Texas and graduated with a Bachelors in Computer Information Systems. Asides from programming, my other interests lies in attaining knowledge from indisciplinary fields, such as Physics, Philosophy, Social Sciences, and Logic.</p>
                    <p>I was taught a diverse understanding of different technologies and languages. With these knowledge acquisitions, I aim to be a jack of all trades with web development.</p>
                </div>
                <div class="column2">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>asdfasd</p>
                </div>
           </div>
            <h1 class="h">CONTACT</h1>
            <form>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

            </form>
            
           



            

            
           


        </div>
    );
};



   






export default Home;
