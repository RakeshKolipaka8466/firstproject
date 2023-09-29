// var a=40;
// function call(){
//     a=60;
//     console.log(a);//60
// }
// call();


// var a=40;
// function call(){       //total golbalscope
//     a=60;              //call(){} //its lexicalscope(its own scope + parent scope) r local scope
//     let b=500;
//     console.log(a);//60
// }
// call();
// console.log(b);//uncaught reference error b is not defined



//3 types of scope global scope,functional scope,block scope
//Block Scope
// if(true){
//     var firstName="Vishal"; //firstName is global Scope
//     let middleName="Sharma";//middleName and LastName is the blockScope
//     const lastName="Sir";
//     console.log(firstName);//Vishal
//     console.log(middleName);//Sharma
//     console.log(lastName);//Sir
// }
// console.log(firstName);//Vishal
// console.log(middleName);//uncaught reference error middleName is not defined
// console.log(lastName);



//Functional Scope
var a=40;
function varScope(){
    var a=60;
    var c=60;
    let s=30;
    const ss=60;
    console.log("a",a);//a 60
    console.log("c",c);//c 60
    console.log("s",s);//s 30
    console.log("ss",ss);//ss 60
}
varScope();
console.log("outside===");//outside===
console.log("a",a);//a 40
console.log("c",c);//uncaught reference error c is not defined
console.log("s",s);
console.log("ss",ss);








