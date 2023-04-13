import React, { useState } from "react";
// import './Experience.css';

const Experience = ({ questions, onSubmit }) => {
	const [expInput, setUserInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(expInput);
	};

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<div className="expDiv">
			<h2 className="expHeader">
				In one sentance, describe your most relevent work experience.
			</h2>
			<form onSubmit={handleSubmit} className="expForm">
				<textarea
					className="expInput"
					value={expInput}
					onChange={handleChange}
					placeholder="I worked as a software engineer for 5 years..."
				/>
				<button type="submit" className="expSubmitBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Experience;
