import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../../utils/changeBackgroundColor";

const Listing = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState("");

	useEffect(() => {
		const colors = [
			"#FFC857",
			"#E9724C",
			"#C5283D",
			"#481D24",
			"#255C99",
			"#2A9D8F",
			"#F4A261",
			"#E9C46A",
			"#E76F51",
			"#80B918",
		];
		changeBackgroundColor(colors);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formattedInput = `This is the job listing: ${userInput}
	   `;
		onSubmit(formattedInput);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSubmit(e);
		}
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
					onChange={(e) => setUserInput(e.target.value)}
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
