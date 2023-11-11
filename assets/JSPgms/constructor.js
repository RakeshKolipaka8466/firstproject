//1st way
const a={
    name:"vishal",
    add:"Bangalore",
};
console.log(a);

//2nd way to obj creation using new keyword and Object()
const b=new Object(null);
b.name="Rakesh",
b.address="Hyderabad",
console.log(b);

//3rd way obj creation like using Object.create
const c=Object.create(null);
c.name="Vikram",
c.address="Wgl",
console.log(c);

//there is another way to create object i.e. Constructor
//constructor function is always start with uppercase or capital letter
//we can create constructor function only in normal function
//we can't use arrow function for creating constructor function

function Emp(){
    console.log(this);
}
Emp();//total window functions came



//empty obj creation
function Empl(){

}
const emp=new Empl();
console.log(emp);

function Employee(name,city,sal){
    this.name=name;
    this.city=city;
    this.sal=sal;
}
const employ=new Employee('vishal','Bangalore','200000');
const employ1=new Employee('Rakesh','Hyderabad','150000');
console.log("Employee :",employ,employ1);


const CreateObj=(name,city,sal)=>{
    return{
        name,
        city,
        sal,
    };
};
const oobj=CreateObj("tim","Bardon",45000);
console.log(oobj);










































