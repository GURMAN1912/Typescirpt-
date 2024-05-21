let stringArr=["one","two","three"]
let guitars=['Start','les paul',51510]
let mixedData=['EHE',1984,false]

stringArr[0]="jgisdj"
stringArr.push("hey");
guitars[0]=299;
guitars.unshift("iogsio");

let test=[]
let bands:string[]=[]
bands.push("van hak");

let myTuple:[string,number,boolean]=['Dave',42,true];
let mixed=['John',1,false];
myTuple[1]=3423

let myObj:object
myObj=[]
console.log(typeof(myObj))

const Obj={
    prop1:"string",
    prop2:true,
    
}
enum Grade{
    U,
    D,
    C,
    B,
    A
}
console.log(Grade.B );
