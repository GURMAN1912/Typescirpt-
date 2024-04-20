"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ['Start', 'les paul', 51510];
let mixedData = ['EHE', 1984, false];
stringArr[0] = "jgisdj";
stringArr.push("hey");
guitars[0] = 299;
guitars.unshift("iogsio");
let test = [];
let bands = [];
bands.push("van hak");
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 3423;
let myObj;
myObj = [];
console.log(typeof (myObj));
const Obj = {
    prop1: "string",
    prop2: true,
};
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
