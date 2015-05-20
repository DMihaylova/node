var node = require("./module.js");

var r = 5;
var a = 3;
var b = 4;
var c = 5;

console.log("The area of circle with radius " + r + " is: " + node.circleA(r));
console.log("The perimeter of circle with radius " + r + " is: " + node.circleP(r));
console.log("The perimeter of triangle with sides " + a + "," + b +","+ c + " is: " + node.triangleP(a,b,c));
console.log("The area of triangle with sides " + a + "," + b +","+ c + " is: " + node.triangleA(a,b,c));
console.log("The perimeter of rectangle with sides " + a + "," + b + " is: " + node.rectangleP(a,b));
console.log("The area of rectangle with sides " + a + "," + b + " is: " + node.rectangleA(a,b));
