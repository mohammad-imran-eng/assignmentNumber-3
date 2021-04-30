

var depth = 13;
var animal = 0;
if (depth <= 10) {
    animal = depth * 50;
}

else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    var animal = firstPart + secondPart;
}

else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdpart = remaining * 300;
    animal = firstPart + secondPart + thirdpart;
}

console.log(animal);
