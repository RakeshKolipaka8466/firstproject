//eg1 
//console.log(a); //undefined
// var a=30;
// console.log(a);//30
// var a=40;


//eg2
// console.log(a);//error -cannot access a before initialization
// let a=40;
// console.log(a);//40
// a=60;
// console.log(b);//error
// const b=40;
// console.log(b);//40

//eg3
// var a=20;
// let a=30;
// console.log(a); //error already declared

//eg4
// console.log(callMe); // undefined
// var callMe=()=>{   // in the place of var replace let r const its showing error
//     console.log("Hey");
// }

//eg5
//console.log(a); //error a is not defined
// function callMe(){
//     return a;
// }
// let a=callMe;
// console.log(a);

//eg5
// console.log(callMe1());
// console.log(callMe1);
// function callMe1(){
//     return 20;
// }
// console.log(callMe1);
// console.log(callMe1());

//eg6
console.log(doRevise);
console.log(doRevise());
var doRevise=function(){
    console.log("Success");
};
console.log(doRevise);
console.log(doRevise());


































