// var c=1;
// a();
// b();
// console.log(c);
// function a(){
//     var a1=100;
//     console.log(a1);
// }
// function b(){
//     var b1=10;
//     console.log(b1);
// }

//setTimeout

// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },5000)
//         }
//     }
// x();
// console.log("Hey");

function x(){
    for(let i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },5000)
        }
    }
x();
console.log("Hey");