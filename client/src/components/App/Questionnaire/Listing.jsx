import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../../utils/changeBackgroundColor";

const Listing = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState("");

	// Change the background color on render
	useEffect(() => {
		changeBackgroundColor();
	}, []);

	// Pass the formatted input to the parent component
	const handleSubmit = (e) => {
		e.preventDefault();
		const formattedInput = `This is the job listing: ${userInput}
	   `;
		onSubmit(formattedInput);
	};

	// Watch for enter keydown and submit
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	// Reset height to recalculate the correct height of the textarea
	const autoResize = (event) => {
		const target = event.target;
		target.style.height = "inherit";
		target.style.height = `${target.scrollHeight}px`;
	};

	return (
		<div id="listDiv">
			<h2 id="listHeader">Paste the job listing below.</h2>
			<h4 id="listSubHeader">
				Please include the job title and the job description. Exlcude the
				benefits, and other information.
			</h4>
			<form onSubmit={handleSubmit} id="listForm">
				<textarea
					id="listInput"
					value={userInput}
					onChange={(e) => {
						setUserInput(e.target.value);
						autoResize(e);
					}}
					onKeyDown={handleKeyDown}
					placeholder="Paste here..."
				/>
				<button type="submit" id="listSubmitBtn" className="quizBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Listing;
