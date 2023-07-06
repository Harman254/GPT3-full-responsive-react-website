import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet, bed any for traveling assistance, GPT-3 offers unparalleled support. With its advanced language processing capabilities, it can provide real-time travel recommendations, itinerary planning, and personalized suggestions.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};


export default Possibility
