import React, { useState } from 'react';
import './App.css';
import Adjective from '../Adjective/Adjective';
import Experience from '../Experience/Experience';
import Listing from '../Listing/Listing';

const QuestionApp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [combinedInput, setCombinedInput] = useState('');

  const handleUserInputSubmit = (userInput) => {
    setCombinedInput((prevInput) => `${prevInput} ${userInput}`);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    console.log('Combined input:', combinedInput.trim());
    // Here, you can make the API call to ChatGPT with the combined input
  };

  return (
    <div className="App">
      {currentStep === 1 && (
        <Adjective
          onSubmit={handleUserInputSubmit}
        />
      )}

      {currentStep === 2 && (
        <Experience
          onSubmit={handleUserInputSubmit}
        />
      )}

      {currentStep === 3 && (
        <Listing
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default QuestionApp;
