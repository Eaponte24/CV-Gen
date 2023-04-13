import React, { useState } from "react";

const Adjective = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState("");

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formattedInput = `Generate a one paragraph cover letter. I am ${userInput}.
    `;
		onSubmit(formattedInput);
	};

	return (
		<div className="adjDiv">
			<h2 className="adjHeader">
				As an employee, describe yourself in one word.
			</h2>
			<form onSubmit={handleSubmit} className="adjForm">
				<textarea
					className="adjInput"
					value={userInput}
					onChange={handleChange}
					placeholder="Motivated, creative, outgoing..."
				/>
				<button type="submit" className="adjSubmitBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Adjective;
