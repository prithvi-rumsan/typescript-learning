"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
console.log(level);
level = 'one';
console.log(level);
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(el => el.toExponential());
console.log(numbers);
let user = [1, 'Ram'];
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
let mySize = size.medium;
console.log(mySize);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.12;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Ram',
    retire: (date) => console.log(date)
};
employee.name = 'Shyam';
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let lengthUnit = 'cm';
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('HELLO!');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
if (customer !== null && customer !== undefined)
    console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map