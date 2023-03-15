import React from 'react';
import './Card.css';

const Card = props => {

   

    return (
        <div className="card">
            <img src={props.url}
                 alt={props.desc}
                 className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'>{props.desc}</h5>
            </div>
        </div>
    );
};


export default Card;