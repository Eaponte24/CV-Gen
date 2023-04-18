import React, { useState, useEffect } from "react";
// import DownloadButton from "../DownloadButton";
import changeBackgroundColor from "../../utils/changeBackgroundColor";

const resultMessages = [
	"Good luck.",
	"Break a Leg.",
	"Your CV is on its way.",
	"Your CV is ready.",
	"You'll ace the interview.",
	"Best of luck.",
	"Go 'git' 'em, tiger.",
	"You can do this.",
	"Here's your cover letter.",
	"Don't tell them how you came up with this.",
  ];

function getRandomMessage() {
	const randomIndex = Math.floor(Math.random() * resultMessages.length);
	return resultMessages[randomIndex];
  }

const Result = ({ combinedInput, onRegenerate }) => {
	const [resultText, setResultText] = useState(combinedInput);
	const [resultHeader, setResultHeader] = useState(getRandomMessage());

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
			>{resultHeader}</p>
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
					Copy{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
						/>
					</svg>
				</button>
				{/* <DownloadButton /> goes here later*/}
				<button
					id="regenBtn"
					className="resultBtn rounded-md bg-white px-2.5 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
					onClick={handleRegenerate}
				>
					Regenerate{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Result;
