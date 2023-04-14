import React, { useState, useEffect } from "react";
import changeBackgroundColor from '../../../utils/changeBackgroundColor';

const Experience = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState("");

	useEffect(() => {
		changeBackgroundColor();
	}, []);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formattedInput = `Mention this recent exeperience: ${userInput}
     `;
		onSubmit(formattedInput);
	};

	return (
		<div id="expDiv">
			<h2 id="expHeader">
				In one sentence, describe your most relevent work experience.
			</h2>
			<form onSubmit={handleSubmit} id="expForm">
				<textarea
					id="expInput"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="I've worked as a software developer for 2 years..."
				/>
				<button type="submit" className="quizBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Experience;
