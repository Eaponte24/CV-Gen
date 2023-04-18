import React, { useState } from "react";
import Adjective from "./Questionnaire/Adjective";
import Experience from "./Questionnaire/Experience";
import Listing from "./Questionnaire/Listing";
import Result from "./Result";

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
			<TransitionGroup>
				{questionStep === 1 && (
					<CSSTransition key="adjective" timeout={300} classNames="fade">
						<Adjective onSubmit={handleSubmit} />
					</CSSTransition>
				)}
				{questionStep === 2 && (
					<CSSTransition key="experience" timeout={300} classNames="fade">
						<Experience onSubmit={handleSubmit} />
					</CSSTransition>
				)}
				{questionStep === 3 && (
					<CSSTransition key="listing" timeout={300} classNames="fade">
						<Listing onSubmit={handleSubmit} />
					</CSSTransition>
				)}
				{currentStep === 4 && (
					<CSSTransition key="result" timeout={300} classNames="fade">
						<Result
							combinedInput={combinedInput}
							onRegenerate={handleRegenerate}
						/>
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
};

export default QuestionApp;
