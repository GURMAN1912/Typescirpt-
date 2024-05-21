class Coder{
    constructor(
        public readonly name:string,
        public music:string,
        private age:number,
        protected lang:string="Typescript"
    ){
        this.name=name;
        this.music=music;
        this.age=age;
        this.lang=lang;
    }
    public getAge(){
        return this.age;
    }
}
const Dave=new Coder('dave','Rock',42);

console.log(Dave.getAge());


class WebDev extends Coder{
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number,
    ){
        super(name,music,age);
        this.computer=computer;
    }
    public getlang(){return this.lang}
}
const sra=new WebDev("mac","sara",'jfoa',33);
sra.getlang();

class Peeps{
    static count:number=0;
    static getCount():number{
        return Peeps.count
    }
    public id:number;
    constructor(public name:string){
        this.name=name;
        this.id=++Peeps.count;
}
}
const John=new Peeps("John")
const Amy=new Peeps("Amy")
const aa=new Peeps("Johaa");

console .log(John.id)