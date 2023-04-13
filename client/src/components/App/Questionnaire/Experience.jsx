import React, { useState } from "react";

const Experience = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState("");

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formattedInput = `Mention this recent exeperience: ${userInput}
     `;
		onSubmit(formattedInput);
	};

	return (
		<div className="expDiv">
			<h2 className="expHeader">
				In one sentence, describe your most relevent work experience.
			</h2>
			<form onSubmit={handleSubmit} className="expForm">
				<textarea
					className="expInput"
					value={userInput}
					onChange={handleChange}
					placeholder="I've worked as a software developer for 2 years..."
				/>
				<button type="submit" className="expSubmitBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Experience;
