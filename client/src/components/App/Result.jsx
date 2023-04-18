import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../utils/changeBackgroundColor";
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
// import DownloadButton from "../DownloadButton";

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
	const [copyIcon, setCopyIcon] = useState(
		<ClipboardDocumentIcon className="h-5 w-5" />
	);

	useEffect(() => {
		changeBackgroundColor();
	}, []);

	const handleRegenerate = () => {
		onRegenerate();
	};

	const handleChange = (e) => {
		setResultText(e.target.value);
	};

	useEffect(() => {
		changeBackgroundColor();
	}, []);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(resultText);
			console.log("Copied to clipboard")
			// Change the icon to the ClipboardCheckIcon
			setCopyIcon(<ClipboardDocumentCheckIcon className="h-5 w-5" />);
			// Change the icon back to the ClipboardIcon after a short delay
			setTimeout(() => {
				setCopyIcon(<ClipboardDocumentIcon className="h-5 w-5" />);
			}, 1000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
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
			>
				{resultHeader}
			</p>
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
					Copy {copyIcon}
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
