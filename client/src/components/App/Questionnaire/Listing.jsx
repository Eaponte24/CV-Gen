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
		<div className="quizDiv">
			<p
				id="listHeader"
				className="text-white-900 my-10 text-3xl font-bold tracking-tight sm:text-4xl"
			>
				Paste the job listing below.
			</p>
			<p id="listSubHeader">
				Please include the job title and the job description. Exlcude the
				benefits, and other information.
			</p>
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
					autoFocus
				/>
				<div className="submitContainer">
					<button
						type="submit"
						className="submitBtn rounded-md bg-white px-2.5 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
					>
						Okay ✓
					</button>
					<p className="ml-3 translate-y-1.5 text-sm opacity-85">
						press <b>Enter ↵</b>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Listing;
