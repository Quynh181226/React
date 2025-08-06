var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");
var btnPower = document.getElementById("btnPower");
var btnSqrt = document.getElementById("btnSqrt");
var btnFactorial = document.getElementById("btnFactorial");
var calc = document.getElementById("cal");
var ans = document.getElementById("ans");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
btnSum.addEventListener("click", function () { return curr = "+"; });
btnSub.addEventListener("click", function () { return curr = "-"; });
btnMul.addEventListener("click", function () { return curr = "*"; });
btnDiv.addEventListener("click", function () { return curr = "/"; });
btnPower.addEventListener("click", function () { return curr = "^"; });
btnSqrt.addEventListener("click", function () { return curr = "√"; });
btnFactorial.addEventListener("click", function () { return curr = "!"; });
var curr = "";
var res;
var text;
calc.addEventListener('click', function () {
    var x = parseFloat(input1.value);
    var y = parseFloat(input2.value);
    if (isNaN(x))
        return;
    if (isNaN(y) && curr !== "!")
        return;
    switch (curr) {
        case "+":
            res = x + y;
            text = "".concat(x, "+").concat(y, "=").concat(res);
            break;
        case "-":
            res = x - y;
            text = "".concat(x, "-").concat(y, "=").concat(res);
            break;
        case "*":
            res = x * y;
            text = "".concat(x, "*").concat(y, "=").concat(res);
            break;
        case "/":
            if (y === 0)
                return;
            res = x / y;
            text = "".concat(x, "/").concat(y, "=").concat(res);
            break;
        case "^":
            res = Math.pow(x, y);
            text = "".concat(x, "^").concat(y, "=").concat(res);
            break;
        case "√":
            if (y === 0)
                return;
            res = Math.pow(x, 1 / y);
            text = "".concat(y, "\u221A").concat(x, "=").concat(res.toFixed(2));
            break;
        case "!":
            if (x < 0)
                return;
            if (!Number.isInteger(x))
                return;
            res = factorial(x);
            text = "".concat(x, "!=").concat(res);
            break;
        default:
            showError('Invalid');
            return;
    }
    ans.textContent = text;
    ans.className = "";
});
factorial = function (n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
};
showError = function (mes) {
    ans.textContent = "Loi: ".concat(mes);
    ans.className = "error";
};
