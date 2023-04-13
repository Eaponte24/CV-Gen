import React, { useState } from "react";
import "../../App.css";
import Adjective from "./Questionnaire/Adjective";
import Experience from "./Questionnaire/Experience";
import Listing from "./Questionnaire/Listing";
import Result from "./Result";

const QuestionApp = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [combinedInput, setCombinedInput] = useState("");

	const handleUserInputSubmit = (userInput) => {
		setCombinedInput((prevInput) => `${prevInput} ${userInput}`);
		setCurrentStep((prevStep) => prevStep + 1);
	};

  const handleResultSubmit = () => {
    console.log('Combined input:', combinedInput.trim());
    // Here, you can make the API call to ChatGPT with the combinedInput
    setCurrentStep(4);
  };

  const handleRegenerate = () => {
    // Make the API call to ChatGPT with the combined input again, and update the result
  };

	return (
		<div className="App">
			{currentStep === 1 && <Adjective onSubmit={handleUserInputSubmit} />}
			{currentStep === 2 && <Experience onSubmit={handleUserInputSubmit} />}
			{currentStep === 3 && <Listing onSubmit={handleResultSubmit} />}
			{currentStep === 4 && (<Result combinedInput={combinedInput} onRegenerate={handleRegenerate} />)}
		</div>
	);
};

export default QuestionApp;
