const changeBackgroundColor = (colors) => {
	const randomIndex = Math.floor(Math.random() * colors.length);
	const selectedColor = colors[randomIndex];
	document.body.style.transition = "background-color 1s";
	document.body.style.backgroundColor = selectedColor;
};

export default changeBackgroundColor;
