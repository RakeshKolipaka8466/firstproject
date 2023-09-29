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
if(true){
    var firstName="Vishal";
    let middleName="Sharma";
    const lastName="Sir";
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
console.log(firstName);
console.log(middleName);
console.log(lastName);

