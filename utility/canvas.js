export function drawCircle(canvasContext, x, y, r) {
	canvasContext.beginPath();
	canvasContext.arc(x, y, r, 0, 2 * Math.PI);
	canvasContext.fill();
}

export function drawLine(canvasContext, x1, y1, x2, y2) {
	canvasContext.beginPath();
	canvasContext.moveTo(x1, y1);
	canvasContext.lineTo(x2, y2);
	canvasContext.stroke();
}

export function fillRectangle(canvasContext, x, y, w, h) {
	canvasContext.fillRect(x, y, w, h);
}
