
type stringOrNumber=string|number ;

type stringOrNumberArray=(string|number)[];

type Guitarist={
    name?:string,
    active:boolean,
    albums:stringOrNumberArray
}
type UserId=stringOrNumber

let username:'Dave'|'John'|'Amy';

const add=(a:number,b:number):number=>{
    return a+b;
}
const logMsg=(message:any):void=>{
    console.log(message)
}
logMsg("Helllo..")
logMsg(add(3,4))

type mathFunction=(a:number,b:number)=>number

let multiply:mathFunction=function(c,d){
    return c*d

}

const addAll=(a:number, b:number , c:number):number =>{
    if(typeof(c)!=='undefined')
        {
            return a+b+c;
        }
    return a+b;
}
const sumAll=(a:number,b:number,c:number=2):number=>{
    return a+b+c;
}
logMsg(sumAll(23,4,undefined));

//Rest parameters
const total=(...nums:number[]):number=>{
    return nums.reduce((prev,curr)=>prev+curr);
}
logMsg(total(1,2,3,4))

const createError=(errMsg:string):never=>{
    throw new Error(errMsg);
}
const infinite=()=>{
    let i:number=1;
    while(true){
        i++;
        if(i>100){
            break;
        }
    }
}
const numberOrString=(value:number|string):
string=>{
    if(typeof value==='string') return 'string';
    if(typeof value ==='number') return 'number'
    return createError("this should never happn")
}
