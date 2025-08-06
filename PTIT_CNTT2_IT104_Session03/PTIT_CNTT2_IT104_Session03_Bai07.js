var str = 'banana';
var res = "";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var i = str_1[_i];
    if (!res.includes(i)) {
        res += i;
    }
}
console.log(res);
