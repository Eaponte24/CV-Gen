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
		const formattedInput = `This is the job listing: ${userInput}`;
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
				/>
				<button
					type="submit"
					id="listSubmitBtn"
					className="rounded-md bg-navy-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Enter ↵
				</button>
			</form>
		</div>
	);
};

export default Listing;
