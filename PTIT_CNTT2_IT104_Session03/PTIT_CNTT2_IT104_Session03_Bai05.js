var firstName = 'Quynh';
var lastName = 'Nhi';
var check = function (str) {
    if (str.length === 0)
        return str;
    return str[0].toUpperCase() + str.slice(1);
};
var fullName = check(firstName) + ' ' + check(lastName);
console.log(fullName);
