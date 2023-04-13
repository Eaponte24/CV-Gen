import React, { useState } from "react";

const Result = ({ combinedInput, onRegenerate }) => {
	const [resultText, setResultText] = useState(combinedInput);

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
		<div className="resultDiv">
			<textarea
				className="resultText"
				value={resultText}
				onChange={handleChange}
			/>
			<div className="resultBtnDiv">
				<button className="copyBtn" onClick={handleCopy}>
					Copy
				</button>
				<button className="regenBtn" onClick={handleRegenerate}>
					Regenerate
				</button>
			</div>
		</div>
	);
};

export default Result;
