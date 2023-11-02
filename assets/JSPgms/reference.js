let array=[1,2,3,4,56];
function modifyArray(arr){
 let result=[];
 for(let i=0;i<arr.length;i++){
    arr[i]*=2;
 }
 result=arr;
 return result;
}
const result=modifyArray(array);
console.log(result);
console.log(array);



let object={
    name:"vishal",
    lastName:"sharma",
};
function modifyObject(object){
let result={};
for(let key in object){
    object[key]=object[key]+"joshi";
}
result=object;
return result;
}
const resultObject=modifyObject(object);
resultObject["name"]="Not a number";
console.log(resultObject);
console.log(object);

