import React from 'react'
import './whatgpt3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gp3__whatgpt3-feature">
        <Feature title ="What is GPT-3" text ="GPT-3 showcases its remarkable capabilities by understanding and generating human-like text, making it adept at tasks like language translation, content creation, and question answering.Its immense size and contextual understanding contribute to its ability to produce coherent and contextually." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We have created a chatbot for you to interact with our chatbot"/>
        <Feature title="Knowledgebase" text="GPT-3 does not have a predefined knowledge base; instead, it relies on pre-training on a vast amount of internet text to generate responses based on patterns and context."/>
        <Feature title="Education" text="GPT-3 is a powerful tool for teaching and learning. It can be used to teach a new language or teach a new skill.  It can be used to teach a new language or teach a new skill. It can be used to teach a new language or teach a new skill."/>
        
      </div>
      
    </div>
  
  )}

export default WhatGPT3;