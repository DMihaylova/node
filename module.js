var Pi = 3.14;

//circle area
var circle = function(r) {
	return Pi*r*r;
};

//circle perimeter
var circleP = function(r) {
	return Pi*r*2;
};

//square area
var rectangle = function(a, b) {
	return 2*(a+b);
};

//square perimeter
var rectangleP = function(a, b) {
	return a*b;
};

//triangle area
var triangle = function(b, h) {
	return 1/2*b*h;
};

//triangle perimeter
var triangleP = function(a, b, c) {
	return a+b+c;
};

//it needs to be exported in order to require it from the console
exports = {
	circle: circle,
	circleP: circleP,
	rectangle: rectangle,
	rectangleP: rectangleP,
	triangle: triangle,
	triangleP: triangleP
}

