var apples1 = 5;
var speed = 'hello';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// Array
var colors = ['red', 'green', 'white'];
var myNumbers = [2, 3, 4, 5];
var truths = [true, true, false];
// classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// object literal
var point = {
    x: 10,
    y: 10
};
// Functions
var logNum = function (i) {
    console.log(i);
};
// Functions that returns the 'any' type
var json = '{"x":20,"y":30}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// Variable whose type cannot be inferred
var numbers = [-10, -1, 12];
var numbersAboveZero;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i];
    }
}
console.log("Number above zero: " + numbersAboveZero);
