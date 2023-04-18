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
		target.style.height = 'inherit'; // Reset height to recalculate the correct height
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
				value={userInput}
				onChange={(e) => {
					setUserInput(e.target.value);
					autoResize(e);
				}}
			/>
			<div id="resultBtnDiv">
				<button
					id="copyBtn"
					className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
					onClick={handleCopy}
				>
					Copy ⎘
				</button>
				<button
					id="regenBtn"
					className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
					onClick={handleRegenerate}
				>
					Regenerate ⟳
				</button>
			</div>
		</div>
	);
};

export default Result;
