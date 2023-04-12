import React, { useState } from "react";
// import "./Listing.css";

const Listing = ({ onSubmit }) => {
	const [listingInput, setUserInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(listingInput);
	};

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<div className="listing">
			<h2 className="listingHeader">Paste the job listing below.</h2>
			<h4 className="listingSubHeader">
				Please include the job title and the job description. Exlcude the
				benefits, and other information.
			</h4>
			<form onSubmit={handleSubmit} className="listingForm">
				<textarea
					className="listingInput"
					value={listingInput}
					onChange={handleChange}
					placeholder="Paste here..."
				/>
				<button type="submit" className="listingSubmitBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Listing;
