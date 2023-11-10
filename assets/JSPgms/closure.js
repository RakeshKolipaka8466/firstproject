function callme(){
    let b=20;
    function callme2(){
        console.log(b);
    }
    callme2();
}callme();
const functionValue=callme;
console.log(functionValue);
//the above process is called closure.
//closure is nothing but it is a function with lexical scope environment
//lexical scope is nothing but it access its own scope and its parent scope


//sum(12)(24)(16)
function sum(a1){
    return(a2)=>{
        return(a3)=>{
            return a1+a2+a3;
        };
    };
}
const result=sum(12)(24)(16);
console.log(result);

//closure pgm in our assignment
function generateOrder(){
    let count=0;
    return function func(){
        count++;
        return "Total Orders = "+count;
    };
}const func=generateOrder();
console.log(func());
console.log(func());
console.log(func());

//currying
function  multiply(c) {
    return(a)=>{
        return(b)=>{
            return a*b*c;
        };
    };
    
}
console.log(multiply(2)(3)(4));

