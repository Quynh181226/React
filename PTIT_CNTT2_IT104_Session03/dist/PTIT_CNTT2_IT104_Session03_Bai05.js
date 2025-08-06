"use strict";
let firstName = 'Quynh';
let lastName = 'Nhi';
const check = (str) => {
    if (str.length === 0)
        return str;
    return str[0].toUpperCase() + str.slice(1);
};
let fullName = check(firstName) + ' ' + check(lastName);
console.log(fullName);
