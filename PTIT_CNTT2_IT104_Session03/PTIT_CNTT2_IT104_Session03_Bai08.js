var cal = function (a, b) {
    var numA = Number(a), numB = Number(b);
    if (isNaN(Number(a)) || isNaN(Number(b)))
        return 'Invalid';
    console.log("Total: ".concat(numA + numB));
    console.log("Sub: ".concat(numA - numB));
    console.log("Mul: ".concat(numA * numB));
    console.log("Div: ".concat(numB !== 0 ? numA / numB : 'Cannot divide for 0'));
};
cal('10', 2);
