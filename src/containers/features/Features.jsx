import React from 'react'
import './features.css'
import { Feature } from '../../components';



const FeatureData = [{
  title: 'Improving end distrusts instantly',
  text: 'fast-paced world, building trust is crucial for businesses. With GPT-3, you can improve end distrusts instantly.'
},{
  title: 'Become the tended Active',
  text: 'fast-paced world, building trust is crucial for businesses. With GPT-3, you can improve end distrusts instantly.'
},{
  title: 'Message or are nothing',
  text: 'fast-paced world, building trust is crucial for businesses. With GPT-3, you can improve end distrusts instantly.'
},{
  title: 'Really boy law county',
  text: 'fast-paced world, building trust is crucial for businesses. With GPT-3, you can improve end distrusts instantly.'
}];
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {FeatureData.map((item, index) => {
          return <Feature title={item.title} text={item.text} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};


export default Features
