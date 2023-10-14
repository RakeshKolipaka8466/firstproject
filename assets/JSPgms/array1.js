// let a=[1,2,3,4,5,6];
// a.map();//Uncaught TypeError: undefined is not a function
//console.log(a);

//map function
var numbers=[1,2,3,4,5,6,7,8,9,10];
const func=(v,index,array)=>{
    return v%2===0;
};
const methodmap=numbers.map(func);
console.log("methodmap:",methodmap);
//output methodmap:false,true,false,true....

//forEach()
var numbers=[1,2,3,4,5,6,7,8,9,10];
const fun=(v,index,array)=>{
    return v%2===0;
};
const methodforEach=numbers.forEach(fun);
console.log("methodforEach:",methodforEach);
//output methodforEach:undefined ,forEach() not return anything if u return its displays undefined

var number1=[1,2,3,4,5,6,7,8,9,10];
const funct=(v,index,array)=>{
    console.log(v);
};
number1.forEach(funct);

//filter()
var aa=[1,2,3,4,5,6,7,8];
const bb=(value,index,array)=>{
    return value%2===0;
}
const cc=aa.filter(bb);
console.log("methodfilter:",cc);

const std=undefined;
const std2=null;
const std3="";
const std4=0;
const std5=false;
const std6="VishalSir";
std && console.log("std",std);
std2 && console.log("std",std2);
std3 && console.log("std",std3);
std4 && console.log("std",std4);
std5 && console.log("std",std5);
std6 && console.log("std",std6);

std && std.forEach(()=>{
    console.log("it will not run");
});

Array.isArray(std6) && std6.forEach(()=>{
    console.log("Heyy");
});



const companyEmp=[
    {name:"Vishal",sal:200000},
    {name:"Rakesh",sal:150000},
    {name:"Jayavardhan",sal:100000},
    {name:"Sagar",sal:100000},
    {name:"Raja",sal:99000},
];
console.log(companyEmp[0]); /*
Object
name: "Vishal"
sal: 200000*/
console.log(companyEmp[0].name);//Vishal
console.log(companyEmp[2].name);//Jayavardhan
console.log(companyEmp);
/*
Array(5)
0: {name: 'Vishal', sal: 20000}
1: {name: 'Rakesh', sal: 15000}
2: {name: 'Jayavardhan', sal: 10000}
3: {name: 'Sagar', sal: 10000}
4: {name: 'Raja', sal: 9900}
length: 5
*/

let totalSum=0;
companyEmp.forEach((emp)=>{
    console.log(emp);
    totalSum=totalSum+emp.sal;
});
console.log(totalSum);

//sum of no's pgm 
let arrr=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(let i=0;i<arrr.length;i++){
    sum+=arrr[i];
}console.log(sum);

//sum of no's pgm using forEach
let l=[1,2,3,4,5];
let s=0;
l.forEach((value)=>{
    s=s+value;
})
console.log(s);


//reduce()
const empDetails=[
    {name:"Rakesh",sala:49000},
    {name:"Jaya",sala:50000},
    {name:"Vardhan",sala:29000},
];
let totalSalary=empDetails.reduce((acc,value)=>{
    return acc+value.sala;
},0);
console.log(totalSalary,"Total Salary");
//output 128000 'Total Salary'

let ddd=[1,2,3,4,5,6];
const dt=((acc,value,index,array)=>{
   return acc+value;
});
console.log(ddd.reduce(dt));//21


//find()
const employees=[
    {name:"Rakesh",salary:45000},
    {name:"Jaya",salary:50000},
    {name:"Vardhan",salary:29000},
];
const empFinder=((value,index)=>{
    return value.salary===50000;
});
console.log(employees.find(empFinder));
/* output
name: "Jaya"
salary: 50000 */

//find()
let stdAssign=[
    {name:"vishal",ass:80},
    {name:"vimal",ass:70},
    {name:"vishu",ass:60},
];
const isEligible=stdAssign.every((value)=>{
   return value.ass>=60;
    
});
const isnotEligible=stdAssign.every((value)=>{
       return value.ass<=60;
   });
console.log(isEligible,"Eligible for Gift because of ass>=60");
console.log(isnotEligible,"not Eligible for Gift because of ass<=60");

//some()
let stdAss=[
    {name:"vishal",assi:80},
    {name:"vimal",assi:70},
    {name:"vishu",assi:90},
];
const isElig=stdAss.some((value)=>{
   return value.assi>=60;
    
});
console.log(isElig);


const numberss = [1, 2, 3, 4, 5];
const squares = numberss.map(num => num*num);
console.log(squares);


























































































































