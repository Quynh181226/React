"use strict";
let str = 'banana';
let res = "";
for (let i of str) {
    if (!res.includes(i)) {
        res += i;
    }
}
console.log(res);
