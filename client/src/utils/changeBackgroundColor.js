let currentColorIndex = 0;
const colors = ["#434a42","#626c66","#918b76","#aca885"];

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
