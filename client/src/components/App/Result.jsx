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

	const autoResize = (event) => {
		const target = event.target;
		target.style.height = "inherit"; // Reset height to recalculate the correct height
		target.style.height = `${target.scrollHeight}px`; // Set the height based on scroll height
	};

	return (
		<div className="quizDiv">
			<p
				id="resultHeader"
				className="text-white-900 my-10 text-3xl font-bold tracking-tight sm:text-4xl"
			></p>
			<textarea
				id="resultText"
				value={resultText}
				onChange={(e) => {
					setResultText(e.target.value);
					autoResize(e);
				  }}				  
			/>
			<div className="resultContainer">
				<button
					id="copyBtn"
					className="resultBtn mr-3 rounded-md bg-white px-2.5 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
					onClick={handleCopy}
				>
					Copy ⎘
				</button>
				
				<button
					id="regenBtn"
					className="resultBtn rounded-md bg-white px-2.5 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
					onClick={handleRegenerate}
				>
					Regenerate ⟳
				</button>
			</div>
		</div>
	);
};

export default Result;
