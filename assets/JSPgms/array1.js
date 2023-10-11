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



























