//eg1
// console.log("1");

// setTimeout(()=>{
//     console.log("2");
// },1000)

// console.log("2");

// setTimeout(()=>{
//     console.log("3");
// },0)

// console.log("4");

// setTimeout(()=>{
//     console.log("5");
// },3000)


//eg2
// console.log("1");

// function callback(){
//     console.log("2");
//     setTimeout(function callbackbabu(){
//         console.log("Hey iam sonu");
//     },100)
// }
// setTimeout(callback,1000);

// console.log("2");

// setTimeout(function name(){
//     console.log("3");
//     setTimeout(function nameChild(){
//         console.log("inside name function");
//     },0)
// },3000);

// console.log("4");

// setTimeout(function chirloot(){
//     console.log("5");
//     setTimeout(function chirlootchild(){
//         console.log("hey iam chirlootchild");
//     },0)
// },2000);

//eg3
console.log("start");
setTimeout(()=>{
    console.log("settimeout");
},0);

Promise.resolve().then(()=>{
    console.log("resolve");
});
console.log("end");

const promise=new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(()=>{
        console.log("timeStart");
        resolve("success");
        console.log("timeEnd");
    },0);
    console.log(2);
});
promise.then((res)=>{
    console.log(res);
});
setTimeout(()=>{
    console.log("Are!!!");
},0);
console.log(4);