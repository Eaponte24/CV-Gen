import React, { useState, useEffect } from "react";
import changeBackgroundColor from "../../../utils/changeBackgroundColor";
import {
	ClipboardDocumentIcon,
	ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
// import DownloadButton from "../DownloadButton";

const resultMessages = [
	"Good luck.",
	"Break a Leg.",
	"Your CV has arrived.",
	"Your CV is ready.",
	"You'll ace the interview.",
	"Best of luck.",
	"Go 'git' 'em, tiger.",
	"You can do this.",
	"Here's your cover letter.",
	"Don't tell them how you came up with this.",
	// add to/edit/remove any of these messages as you see fit
];

function getRandomMessage() {
	const randomIndex = Math.floor(Math.random() * resultMessages.length);
	return resultMessages[randomIndex];
	// greet the user with a random message
}

const writeResponseStylized = (response) => {
	let responseWords = response.split(" ");
	let responseIndex = 0;

	const writeWord = () => {
		if (responseIndex < responseWords.length) {
			setResultText(
				(prevText) => prevText + " " + responseWords[responseIndex]
			);
			responseIndex++;
			setTimeout(writeWord, 100);
		}
	};
	writeWord();
};

const Result = ({ combinedInput, onRegenerate, response }) => {
	const [resultText, setResultText] = useState("");
	const [resultHeading, setResultHeading] = useState(getRandomMessage());
	const [copyIcon, setCopyIcon] = useState(<ClipboardDocumentIcon className="h-5 w-5" />);

	/* 	useEffect(() => {
		if (response) {
			// Update the resultText state when the response prop changes
			setResultText(response);
			setLoading(false);
		}
	}, [response]);
 */
	useEffect(() => {
		// Update the resultText state when the response prop changes
		writeResponseStylized(response);
	}, [response]);

	useEffect(() => {
		// change the background color
		changeBackgroundColor();

		// resize the textarea on page load
		const textarea = document.getElementById("resultText");
		if (textarea) {
			autoResize({ target: textarea });
		}
	}, []);

	const handleRegenerate = () => {
		// allow the user to regenerate the cover letter
		onRegenerate();
	};

	const handleChange = (e) => {
		// allow the user to edit the cover letter
		setResultText(e.target.value);
	};

	const handleCopy = async () => {
		try {
			// Copy the text to the clipboard
			await navigator.clipboard.writeText(resultText);
			console.log("Copied to clipboard");
			// change the icon to the ClipboardCheckIcon
			setCopyIcon(<ClipboardDocumentCheckIcon className="h-5 w-5" />);
			// change the icon back to the ClipboardIcon after a short delay
			setTimeout(() => {
				setCopyIcon(<ClipboardDocumentIcon className="h-5 w-5" />);
			}, 1000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	const autoResize = (e) => {
		// auto resize the textarea
		const target = e.target;
		target.style.height = "inherit";
		target.style.height = `${target.scrollHeight}px`;
	};

	/* 	if (loading) {
		return (
			<div className="quizDiv">
				<p
					id="resultHeading"
					className="text-white-900 text-3xl font-bold tracking-tight sm:text-4xl"
				>
					Your CV is on it's way.
				</p>
				<p className="mt-7 mb-10">
					Based on demand, it may take a few minutes to generate your CV.
				</p>
				<textarea readOnly={true} id="resultText" value="Thinking..." />
				<div className="resultContainer my-5">
					<button
						id="cancelBtn"
						className="resultBtn rounded-md bg-white px-2.5 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
						onClick={handleCancel}
					>
						Try Again
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
	} */

	return (
		<div className="quizDiv">
			<p
				id="resultHeading"
				className="text-white-900 text-3xl font-bold tracking-tight sm:text-4xl"
			>
				{resultHeading}
			</p>
			<p className="mt-7 mb-10">
				💡<b>Tip:</b> you can review & edit your cover letter below before
				copying it.
			</p>
			<textarea
				id="resultText"
				placeholder="Thinking..."
				value={resultText}
				onChange={(e) => {
					handleChange(e);
					autoResize(e);
				}}
			/>
			<div className="resultContainer my-5">
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
