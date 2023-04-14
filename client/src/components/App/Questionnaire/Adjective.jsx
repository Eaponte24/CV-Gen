import React, { useState, useEffect } from 'react';
import changeBackgroundColor from '../../../utils/changeBackgroundColor';

const Adjective = ({ onSubmit }) => {
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

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formattedInput = `Please generate a one paragraph cover letter. Convey that I am ${userInput}.
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
