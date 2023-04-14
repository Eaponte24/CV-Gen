import React, { useState, useEffect } from "react";
import changeBackgroundColor from '../../utils/changeBackgroundColor';


const Result = ({ combinedInput, onRegenerate }) => {
	const [resultText, setResultText] = useState(combinedInput);

	useEffect(() => {
		const colors = [
			"#FFC857",
			"#E9724C",
			"#C5283D",
			"#481D24",
			"#255C99",
			"#2A9D8F",
			"#F4A261",
			"#E9C46A",
			"#E76F51",
			"#80B918",
		];
		changeBackgroundColor(colors);
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
