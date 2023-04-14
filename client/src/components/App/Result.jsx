import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../utils/changeBackgroundColor";

const Result = ({ combinedInput, onRegenerate }) => {
	const [resultText, setResultText] = useState(combinedInput);

	useEffect(() => {
		changeBackgroundColor();
	}, []);

	const handleCopy = () => {
		navigator.clipboard.writeText(resultText).then(
			() => {
				alert("Text copied to clipboard!");
			},
			(err) => {
				alert("Failed to copy text. Please try again.");
			}
		);
	};

	const handleRegenerate = () => {
		onRegenerate();
	};

	const handleChange = (e) => {
		setResultText(e.target.value);
	};

	return (
		<div className="quizDiv">
			<textarea id="resultText" value={resultText} onChange={handleChange} />
			<div id="resultBtnDiv">
				<button
					id="copyBtn"
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					onClick={handleCopy}
				>
					Copy
				</button>
				<button
					id="regenBtn"
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					onClick={handleRegenerate}
				>
					Regenerate
				</button>
			</div>
		</div>
	);
};

export default Result;
