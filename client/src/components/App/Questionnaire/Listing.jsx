import React, { useState } from "react";

const Listing = ({ onSubmit }) => {
	const [listInput, setUserInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(listInput);
	};

	const handleChange = (e) => {
		setUserInput(e.target.value);
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
					value={listInput}
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
