//curring Que
/*function multiply(){
    //write your code
}
const data=multiply(2)(5)(6);
console.log(data); //60 is the ans=>2*5*6=60  */

//ans line no 9 to 20
/*function multiply(a){
    //write your code
    
        return(b)=>{
            return(c)=>{
                return a*b*c;
            }
        }
    }

const data=multiply(2)(5)(6);
console.log(data);//60  */









//Que2->
// infinitCurryingSum(1)(2)(3)(4)(5)(6)(7)(8)(9)....(n)();
const sum=(a)=>{
    return(b)=>{
        if(b){
            return sum(a+b);
        }
        return a;
    };
};
const data2=sum(2)(3)(4)(1);
console.log(data2());
const data3=sum(5)(5);
console.log(data3());
sum(1)(2)(3)(4)(5)(6)(7)(8)(9)();
















