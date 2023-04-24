let currentColorIndex = 0;
const colors = ["#24353C", "#306B64", "#C79A3F", "#D47836", "#BE4E34"];

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
