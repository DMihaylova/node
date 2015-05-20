var Pi = 3.14;

//circle area
var circle = function(r) {
	return Pi*r*r;
};

//square perimeter
var square = function(a) {
	return 4 * a;
};

//triangle perimeter
var triangle = function(a, b, c) {
	return a+b+c;
};

//it needs to be exported in order to require it from the console
exports = {
	circle: circle,
	square: square,
	triangle: triangle
}

