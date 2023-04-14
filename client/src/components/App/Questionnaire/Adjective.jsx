import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../../utils/changeBackgroundColor";

const Adjective = ({ onSubmit }) => {
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
		const formattedInput = `Please generate a one paragraph cover letter. Convey that I am ${userInput}.
     `;
		onSubmit(formattedInput);
	};

	return (
		<div className="quizDiv">
			<h2 id="adjHeader">As an employee, describe yourself in one word.</h2>
			<form onSubmit={handleSubmit} id="adjForm">
				<input
					id="adjInput"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Motivated, creative, outgoing..."
				/>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Enter ↵
				</button>
			</form>
		</div>
	);
};

export default Adjective;
