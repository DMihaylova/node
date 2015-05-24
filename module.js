var Pi = Math.PI;

//circle area
var circleA = function(r) {
	return Pi*r*r;
};

//circle perimeter
var circleP = function(r) {
	return Pi*r*2;
};

//square area
var rectangleA = function(a, b) {
	return a*b;
};

//square perimeter
var rectangleP = function(a, b) {
	return 2*(a+b);
};

//triangle area
var triangleA = function(a, b, c) {
	var p = (a+b+c)/2;
	return Math.sqrt(p*(p-a)*(p-b)*(p-c));
};

//triangle perimeter
var triangleP = function(a, b, c) {
	return a+b+c;
};

//it needs to be exported in order to require it from the console
exports.circleA = circleA;
exports.rectangleA = rectangleA;
exports.triangleA = triangleA;
exports.circleP = circleP;
exports.rectangleP = rectangleP;
exports.triangleP = triangleP;
