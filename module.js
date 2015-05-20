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
var square = function(a) {
	return a*2;
};

//square perimeter
var squareP = function(a) {
	return 4*a;
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
	square: square,
	squareP: squareP,
	triangle: triangle,
	triangleP: triangleP
}

