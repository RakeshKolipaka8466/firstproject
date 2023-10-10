//function Expression
var a=function apple(){
    console.log( "It is Function Expression ");
}
a();

//Anonymous Function
var a=function(){
    return "It is Anonymous Function";
}
console.log(a());

//Arrow Function
var a=()=>{
    console.log( "It is Arrow Function");
}
a();

var a=()=>console.log("It is one line Arrow Function"); a();


const array2=[1,2,3,"Vishal",4,"Sir",5];
for(let i=0;i<=array2.length;i++){
    if(typeof array2[i]==="string"){
       array2[i]= {Key:array2[i]};
    }
}console.log(array2);
//output
// (7) [1, 2, 3, {…}, 4, {…}, 5]
// 0 : 1
// 1 : 2
// 2 : 3
// 3 : {Key: 'Vishal'}
// 4 : 4
// 5 : {Key: 'Sir'}
// 6 : 5
// length: 7

//forEach() is a declarative Approach not in imperative approach
//forEach() is a higherorder function by providing array in JS
//forEach() u can use this only for array variable,if u use another variable u will through error
//forEach() will accepts callback function that's why forEach function is higherorder function.
const random=[1,2,3,"hey"];
const call1=(value,index,array)=>{
    console.log("value=>",value,"index=>",index,"array=>",array);

};
random.forEach(call1);
/*
value=> 1 index=> 0 array=> Array(4)
array.js:45 value=> 2 index=> 1 array=> Array(4)
array.js:45 value=> 3 index=> 2 array=> Array(4)
array.js:45 value=> hey index=> 3 array=> Array(4)
*/


const rand=[9,8,7,"VishalSir"];
rand.forEach((value,index,array)=>{
    console.log("index=>",index,"value=>",value);
})
/* output:
index=> 0 value=> 9
array.js:53 index=> 1 value=> 8
array.js:53 index=> 2 value=> 7
array.js:53 index=> 3 value=> VishalSir
*/

//Map Higher order Function
//for map, callback function is mandatory
//first parameter should be function
const employee=[10000,20000,30000,40000,50000,100000];
const  modifyEmployeeArray=(value,index,array)=>{
    return{
        salary:value,
    };
};
const randomArray=employee.map(modifyEmployeeArray);
console.log(randomArray);



const arr1=[1,4,9,16];
const map1=arr1.map(x=>(x%2==0));
console.log(map1);
/*

Array(4)
0: false
1: true
2: false
3: true
length: 4*/

const numbers=[1,2,3,4,5];
const value=numbers.shift();
console.log(value,numbers);//shift opposite pop ,pop removes ele from end ,shift remove ele start

const updatedLen=numbers.unshift("unshift");
console.log("updatedArray",updatedLen);//unshift opposite push,push adds ele from end,unshift adds ele start


const c="split function converting from string to array";
const c1=c.split(" ");
console.log("this is split");
console.log(c1);  


const str="iam Rakesh";
console.log(str.split(" "));



//join function converting from Array to String
const arr=[1,2,3,4,5,6];
console.log("this is join");
console.log(arr.join());  //1,2,3,4,5,6
console.log(arr.join("-")); //1-2-3-4-5-6
console.log(arr.join("/")); //1/2/3/4/5/6
console.log(arr.join(''));













































































