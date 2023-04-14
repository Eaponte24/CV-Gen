import React, { useState, useEffect } from 'react';
import changeBackgroundColor from '../../../utils/changeBackgroundColor';

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

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formattedInput = `This is the job listing: ${userInput}
	   `;
		onSubmit(formattedInput);
	};

	return (
		<div className="listDiv">
			<h2 className="listHeader">Paste the job listing below.</h2>
			<h4 className="listSubHeader">
				Please include the job title and the job description. Exlcude the
				benefits, and other information.
			</h4>
			<form onSubmit={handleSubmit} className="listForm">
				<textarea
					className="listInput"
					value={userInput}
					onChange={handleChange}
					placeholder="Paste here..."
				/>
				<button type="submit" className="listSubmitBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Listing;
