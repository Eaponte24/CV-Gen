let currentColorIndex = 0;
const colors = ["#c7b07b","#A4D0A4","#617A55","#54856f"];

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

const setBackroundColor = (color) => {
	document.body.style.backgroundColor = color;
	document.body.style.transition = "background-color 1s";
};

export default changeBackgroundColor;
