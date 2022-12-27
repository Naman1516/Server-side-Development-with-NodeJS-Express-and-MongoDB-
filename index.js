var rect = require('./rectangle')

function solveRect(l, b) {
    if (l <= 0 || b <= 0) {
        console.error("Dimensions should be > 0")
    }
    else {
        console.log("Perimeter: " + rect.perimeter(l, b));
        console.log("Area: " + rect.area(l, b));
    }
}

solveRect(2, 5);