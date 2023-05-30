import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../../utils/changeBackgroundColor";

const Adjective = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState("");

	useEffect(() => {
		// change the background color
		changeBackgroundColor();
	}, []);

	const handleKeyDown = (e) => {
		// allow the user to submit the form by pressing the enter key
		if (e.key === "Enter") {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	const handleSubmit = (e) => {
		// collect, format, and store the user input
		e.preventDefault();
		const formattedInput = `Please generate a cover letter. Convey that I am ${userInput}.`;
		onSubmit(formattedInput);
	};

	return (
		<div className="quizDiv">
			<p
				className="text-black-900 my-10 text-3xl font-bold tracking-tight sm:text-4xl"
			>
				As an employee, describe yourself in one word.
			</p>
			<form onSubmit={handleSubmit} id="adjForm">
				<input
					id="adjInput"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Motivated, creative, outgoing..."
					autoFocus
				/>
				<div className="submitContainer">
					<button
						type="submit"
						className="submitBtn rounded-md bg-white px-2.5 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
					>
						Okay <svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<p className="opacity-85 ml-3 translate-y-1.5 text-sm">
						press <b>Enter ↵</b>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Adjective;
