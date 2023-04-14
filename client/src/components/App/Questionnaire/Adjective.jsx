import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../../utils/changeBackgroundColor";

const Adjective = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState("");

	useEffect(() => {
		const colors = [
			"#004777",
			"#A30000",
			"#FF7700",
			"#EFD28D",
			"#00AFB5",
			"#2A9D8F",
			"#F4A261",
			"#E9C46A",
			"#E76F51",
			"#80B918",
		];
		changeBackgroundColor(colors);
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
		<div id="adjDiv">
			<h2 id="adjHeader">As an employee, describe yourself in one word.</h2>
			<form onSubmit={handleSubmit} id="adjForm">
				<textarea
					id="adjInput"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Motivated, creative, outgoing..."
				/>
				<button type="submit" className="quizBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Adjective;
