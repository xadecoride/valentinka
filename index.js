let yesBtn = document.getElementById('btn')
const ifNotBtn = document.getElementById('nah')

ifNotBtn.onclick = () => {
	let currentHeight = parseInt(yesBtn.style.height);
	let currentWidth = parseInt(yesBtn.style.width);
	let currentSize = parseInt(yesBtn.style.fontSize);
	yesBtn.style.height = (currentHeight + 30) + 'px';
	yesBtn.style.width = (currentWidth + 30) + 'px';
	yesBtn.style.fontSize = (currentSize + 5) + 'px';
}