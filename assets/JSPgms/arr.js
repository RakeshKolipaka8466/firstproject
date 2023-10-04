//const a=[1,2,3,[4,5,6],"Newton Vishal Sir",true,false,function(){console.log("Iam Rakesh");}];
//console.log(a); // Array(8)click on this  0:1 1:2 2:3 3:[3] [4,5,6] 4:"Newton Vishal Sir"
//5:true 6:false 7:f() length:8 


//for(let value of a)
//console.log(value);
//arr.js:5 1
// arr.js:5 2
// arr.js:5 3
// arr.js:5 Array(3)
// arr.js:5 Newton Vishal Sir
// arr.js:5 true
// arr.js:5 false
// arr.js:5 ƒ (){console.log("Iam Rakesh");}

//Imperative Approach u can modify our need i.e Imperative Approach

// for(let i=0;i<11;i++){  
//     console.log(i);     //0 1 2 3 4 5 6 7 8 9 10
// }

// for(let i=1;i<11;i++){  
//     console.log(i);      //1 2 3 4 5 6 7 8 9 10
// }

// for(let i=10;1<=i;i--){
//     console.log(i);           //10 9 8 7 6 5 4 3 2 1
// }


//Declarative Approach   u can't ctrl the loop our need i.e. Declarative Approach
// let a=[1,2,3,4,5];
// for(let value of a){
//     console.log(value);  //1 2 3 4 5
// }

// let b=[10,20,30,40,50];
// for(let index in b){
//     console.log(index);  //0 1 2 3 4
// }

//split()

// const c="split function converting from string to array";
// const c1=c.split(" ");
// console.log(c1);  
//output 
// (7) ['split', 'function', 'converting', 'from', 'string', 'to', 'array', '']
// 0: "split"
// 1: "function"
// 2: "converting"
// 3: "from"
// 4: "string"
// 5: "to"
// 6: "array" 
// length: 7

// const str="iam Rakesh";
// console.log(str.split(" "));

// output
// (2) ['iam', 'Rakesh']
// 0: "iam" 
// 1: "Rakesh"
// length: 2

//join function converting from Array to String
// const arr=[1,2,3,4,5,6];
// console.log(arr.join());  //1,2,3,4,5,6
// console.log(arr.join("-")); //1-2-3-4-5-6
// console.log(arr.join("/")); //1/2/3/4/5/6

//push()
const a=[1,2,3,4,5,6];
console.log(a); 
/*
(6) [1, 2, 3, 4, 5, 6]
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
6: "Hello"
length: 7
*/
const b=a.push("Hello");
console.log(b); //7


const d=[1,"Raj",23,true];
d.push("Rakesh");
console.log(d);
d.push("Rakesh");
console.log(d);



//pop()
const e=[1,2,3,4,5,6,7,8];
console.log(e);
e.pop();
console.log(e);
e.pop();
console.log(e);
e.pop();
console.log(e);
//output
/* 8) [1, 2, 3, 4, 5, 6, 7, 8]0: 1 1: 2 2: 3 3: 4 4: 5 
(7) [1, 2, 3, 4, 5, 6, 7]0: 1 1: 2 2: 3 3: 4 4: 5length: 5
(6) [1, 2, 3, 4, 5, 6]0: 1 1: 2 2: 3 3: 4 4: 5length: 5
(5) [1, 2, 3, 4, 5]*/


//indexof()
const f=[1,2,3,4,56,[11,22,333]];
console.log(f.indexOf(4));//3
console.log(f.indexOf("[11,22,333]"));//nonprimitive gave -1
console.log(f.indexOf(55555));//-1  there is no our value it will return -1

//includes
const g=[1,2,3,4,5];
console.log(g.includes(3));//true
console.log(g.includes(11111));//false



































