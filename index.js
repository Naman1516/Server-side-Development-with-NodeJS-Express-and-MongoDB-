var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

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