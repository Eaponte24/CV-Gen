import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../../utils/changeBackgroundColor";

const Experience = ({ onSubmit }) => {
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
		const formattedInput = `Mention this recent exeperience: ${userInput}
     `;
		onSubmit(formattedInput);
	};

	return (
		<div className="quizDiv">
			<p
				id="expHeader"
				className="text-white-900 my-10 text-3xl font-bold tracking-tight sm:text-4xl"
			>
				In one sentence, describe your most relevent work experience.
			</p>
			<form onSubmit={handleSubmit} id="expForm">
				<input
					id="expInput"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="I've worked as a software developer for 2 years..."
					autoFocus
				/>
				<div className="submitContainer">
					<button
						type="submit"
						className="submitBtn rounded-md bg-white px-2.5 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
					>
						Okay ✓
					</button>
					<p className="ml-3 translate-y-1.5 text-sm opacity-85">
						press <b>Enter ↵</b>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Experience;
