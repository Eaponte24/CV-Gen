let currentColorIndex = 0;
const colors = ["#262B2F","#2A3135","#424D4D","#63726B"];

const changeBackgroundColor = () => {
	const nextColor = getNextColor();
	document.body.style.backgroundColor = nextColor;
	document.body.style.transition = "background-color 1s";
};

const getNextColor = () => {
	const color = colors[currentColorIndex];
	currentColorIndex = (currentColorIndex + .5);
	return color;
};

export default changeBackgroundColor;
