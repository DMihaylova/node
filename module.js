//площ на окръжност
var circle = function(r) {
	return (3.14*(r*r));
};

//периметър на квадрат
var square = function(a) {
	return 4 * a;
};

//периметър на триъгълник
var triangle = function(a, b, c) {
	return (a+b+c);
};

//трябва да го експортнем и да рекуаернем файла от конзолата
exports.circle = circle;
exports.square = square;
exports.triangle = triangle;

