//Math.random()
console.log(Math);//total functions came

console.log(Math.random());//0.48578985178668543 every refresh changed to min to max r 0 to 1

console.log(Math.random()*10);//9.39048444525027 every refresh changed to min to max

for(let i=0;i<10;i++){
    console.log(Math.random()*10);   //10 times came value max9 to min 0 changed every refresh
}

let max=100;
let min=20;
const randomNo=Math.random()*(max-min)+min;
console.log(randomNo);//every refresh the value changed between 100 to 20

//Math.ceil() it takes round up value
console.log(Math.ceil(5.2));//6
console.log(Math.ceil(5.5));//6
console.log(Math.ceil(5.6));//6
console.log(Math.ceil(5.1));//6
console.log(Math.ceil(5.0));//5


//Math.floor() it takes round down value
console.log(Math.floor(5.2));//5
console.log(Math.floor(5.5));//5
console.log(Math.floor(5.6));//5
console.log(Math.floor(5.1));//5
console.log(Math.floor(5.9));//5
console.log(Math.ceil(5.0));//5

//Math.round() it takes nearest value
console.log(Math.round(5.2));//5
console.log(Math.round(5.5));//6
console.log(Math.round(5.6));//6
console.log(Math.round(5.1));//5
console.log(Math.round(5.0));//5
console.log(Math.ceil(5.2));//6
console.log(Math.ceil(5.5));//6
console.log(Math.ceil(5.6));//6
console.log(Math.ceil(5.1));//6
console.log(Math.ceil(5.9));//6

//Math.max() and Math.min()
console.log(Math.max(10,20,30));//30
console.log(Math.min(10,20,30));//10


const array=[100,200,10,300,555,999];
function getMin(arr){
    return Math.max(...arr);
}console.log(getMin(array));//999


const array1=[100,200,10,300,555,999];
function getMin1(arr1){
    return Math.min(...arr1);
}console.log(getMin1(array1));//10

//generate random no
function generateRandomNo(max,min){
    return Math.ceil(Math.random()*(max-min)+min);
}const gRNO=generateRandomNo(10,50);
console.log(gRNO);//






