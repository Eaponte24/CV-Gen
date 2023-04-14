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
		<div id="resultDiv">
			<textarea id="resultText" value={resultText} onChange={handleChange} />
			<div id="resultBtnDiv">
				<button id="copyBtn" className="resultBtn" onClick={handleCopy}>
					Copy
				</button>
				<button id="regenBtn" className="resultBtn" onClick={handleRegenerate}>
					Regenerate
				</button>
			</div>
		</div>
	);
};

export default Result;
