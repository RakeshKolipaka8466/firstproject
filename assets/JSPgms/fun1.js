// let a=50;
// var b=40;
// {
//     console.log(b);//40
//     //console.log(a);//error
//     var b=90;
//     let a=200;
//     function call(){
//         //console.log(b);//error
//         console.log(a);//undefined
//         let b=55;
//         var a=65;
//         console.log(a);//65
//         console.log(b);//55
//     }
//     call();
//     console.log(b);//90
//     console.log(a);//200
// }
// console.log(b);//90
// console.log(a);//50



// function callme(a,b,c){
//    if(a>b){

//     var a=60;
//     let b=50;
//     const c=60;
//     console.log(a,b,c);//60 50 60
//    } 
//    console.log(a,b,c);//60 4 5
// }callme(12,4,5);



// console.log(callme);//callme(){ return 4}
// console.log(callme());// 4
// var callme=function(){
//     return 2;
// }
// function callme(){
//     return 4;
// }




console.log([]==![]);//true

function callme3(){
    var a=b=c=60;
    console.log(a,b,c);//60 60 60

}callme3();
//console.log(a);//error
console.log(b);//60
console.log(c);//60


















