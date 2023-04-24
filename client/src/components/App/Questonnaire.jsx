import React, { useState } from "react";
import Adjective from "./Questionnaire/Adjective";
import Experience from "./Questionnaire/Experience";
import Listing from "./Questionnaire/Listing";
import Result from "./Questionnaire/Result";

const QuestionApp = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [combinedInput, setCombinedInput] = useState("");

	const handleUserInputSubmit = (userInput) => {
		// collect, format, and store the user input
		setCombinedInput((prevInput) => `${prevInput} ${userInput}`);
		setCurrentStep((prevStep) => prevStep + 1);
	}; 

	const handleResultSubmit = (userInput) => {
		handleUserInputSubmit(userInput);
		console.log(combinedInput);
		// TODO: make the API Call to ChatGPT with the combinedInput
	};

	const handleRegenerate = () => {
		console.log(combinedInput);
		// TODO: make the API call to ChatGPT with the combinedInput again, and update the result page
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
