import React, { useState, useEffect } from 'react';
import { changeBackgroundColor } from '../../utils';


const Experience = ({ onSubmit }) => {
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
