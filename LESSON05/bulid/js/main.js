"use strict";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let myValNext = addOrConcat(2, 2, 'add');
10;
