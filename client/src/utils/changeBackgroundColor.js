let currentColorIndex = 0;
const colors = ["#1E152A", "#4E6766", "#5AB1BB", "#A5C882", "#F7DD72"];

const changeBackgroundColor = () => {
	const nextColor = getNextColor();
	document.body.style.backgroundColor = nextColor;
	document.body.style.transition = "background-color 1s";
};

const getNextColor = () => {
	const color = colors[currentColorIndex];
	currentColorIndex = (currentColorIndex + 1) % colors.length;
	return color;
};

export default changeBackgroundColor;
