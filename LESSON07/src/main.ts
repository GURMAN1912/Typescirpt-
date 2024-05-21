interface TransactionObj{
    [index:string]:number
}
const todayTransaction:TransactionObj={
    Pizza:-19,
    Books:93,
    jobs:38
}
console.log(todayTransaction.Pizza)
const totalNet  =(transactions:TransactionObj):number=>{
    let total=0;
    for(const transaction in transactions){
        total+=transactions[transaction];
    }
    return total;
}

console.log(totalNet  (todayTransaction));
const echo=<T>(arg:T):T=>arg

const isObj=<T>(arg:T):boolean=>{
    return(typeof arg==='object' &&!Array.isArray(arg)&&arg!==null)
}
console.log(isObj(true))
console.log(isObj("falh"))
console.log(isObj({name:"diugas"}))
