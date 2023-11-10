//first way to create object
const stdData={
    phone:123456,
    city:"Hyderabad",
};
stdData.name="Vishal";
console.log(stdData);

//2nd way to create object use new keyword and Object fun
const data=new Object();
data.name="vvvinayak";
data.country="india";
data.code=123;
console.log(data);

//3rd way to create object use Object.create()
const list=Object.create(null);
list.name="Rakesh";
list.no=123;
list.city="Wgl";
console.log(list);


//how u can access the obj value
const stD={
    fname:"Vimal",
    circle:"no circle",
    mode:"offline",
}
const {fname,circle,mode}=stD;
console.log(fname ,circle ,mode);
console.log(stD.fname);
console.log(stD["fname"]);
delete stD.circle;
console.log(stD);

//regex replace and replaceAll
const msg="Hey Hai Bro Hi Ha Ha Ha";
console.log(msg.replace("H","h"));
console.log(msg.replaceAll("H","h"));

//shorthand way
const ffname="vimall";
const ddata=100;
const obj1={ffname,ddata};
console.log(obj1);

//let=30;this will give u error
const std1={
    const:30,
    let:50,
    function:"Hey iam Function",
    return:34,
};
console.log("reserved keyword of JS as Key : ",std1);



const emp={
    firstName:"chim",
    lastName:"rim",
    getFullName:function(){
        return this.firstName+""+this.lastName;
    },
    salary:300000,
    increment:30,
    getIncrementSalary:function(){
        return (this.salary*this.increment)/100+this.salary;
    },
};
console.log(emp.getFullName());
console.log(emp.getIncrementSalary());

const employee={
    getinc:()=>{
        console.log("this is inside arrow function",this);
        return this.inc;
    },
};
console.log(employee.getinc());



//getter and setter method
const vehicle={
    type:"car",
    tyre:4,
    //get is the keyword ,getTyre is the getter 
    get getTyre(){
        return this.tyre;
    },
    //set is the keyword,setTyre is the setter
    set setTyre(count){
        this.tyre=count;
    },
};
console.log("getters : ",vehicle.tyre);//4
vehicle.setTyre=6;
console.log("getters : ",vehicle.tyre);//6



//Object.assign - this will create a shallow copy of object
const SourceObj={
    coll:"Newton",
    online:"Yes",
};
const targetObj={};
const resultObj=Object.assign(targetObj,SourceObj);
console.log(resultObj);
console.log(targetObj);
console.log(resultObj===targetObj);


//shalllow copy  
const a=20;//primitive
const b=a; //we created the copy of a pass by value
console.log(b);

const a1=[21,22,23];//non primitive array  3length
const b1=a1;
b1[3]=28;
console.log(a1);//[21,22,23,28]
console.log(b1);//[21,22,23,28] //these type of copy is called shallow copy(reference copy)

//deep copy
const a2=[1,2,3,4];
const b2=a2;
const c2=b2;
console.log(c2);
const deepCopy=[...c2];
console.log("deep copy",deepCopy);

const newtonStd=["Tim","Tom","Rim"];
//deep copy
const deepcopy=[...newtonStd];
deepcopy.push("deepak");
console.log(deepcopy,"print deep copy details");
console.log(newtonStd,"after deep copy original array");

//shallow copy
const newtonStdShallowcopy=newtonStd;
newtonStdShallowcopy.push("Jtm");
console.log(newtonStdShallowcopy,"Shallow Copy");
console.log(newtonStd,"after shallow copy original arr");


const a4={};
const a5=Object.create(null);
console.log(a4===a5);



















































