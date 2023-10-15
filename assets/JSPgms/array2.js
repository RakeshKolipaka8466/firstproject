//slice(startIndex,endIndex)end index excluded,not included
const a=[1,2,3,4,5];
console.log(a.slice());//1 to 5 displyed because by default it takes startindex0,end indexlastone
console.log(a.slice(0,4));//1to 4 displayed
console.log(a.slice(1,4));//2 to 4
console.log(a.slice(1,-1));//2 to 4
console.log(a.slice(-1,-5));//[]
console.log(a.slice(1,1));//[]
console.log(a.slice(-5,-1));//1 to 4 printed
console.log(a.slice(4,1));


//splice()
const aa=[1,2,3,4,5,6,7,8,9,10];
console.log(aa.splice());//[]
console.log(aa);//1to 10
console.log(aa.splice(1,2));//2,3deleted
console.log(aa);//1,4,5,6,7,8,9,10
console.log(aa.splice(5,2));//8,9deleted
console.log(aa);//1,4,5,6,7,10
console.log(aa.splice(1,2,"Rakesh","Ramesh"));//4,5deleted
console.log(aa);//1,Rakesh,Ramesh,6,7,10
console.log(aa.splice(1,2,"Ram","Tim","Rim"));//rakesh,rameshdeleted
console.log(aa);//1,ram,tim,rim,6,7,10

//sort()
const aaa=["Rakesh","Jayavardhan","Sagar","Vikas","Anjali"];
console.log(aaa.sort());

const ab=[10,20,80,0,3,9];
const ac=ab.sort();
console.log(ac);
const compareFun=(a,b)=>a-b;
ac.sort(compareFun);
console.log("sorted array:",ac);

const marks=[10,100,11,23,9,1,56,99,12];
const comFun=(a,b)=>a-b;
console.log("sorted:",marks.sort(comFun));


const companyEmp=[
    {name:"Vishal",sal:200000},
    {name:"Rakesh",sal:150000},
    {name:"Jayavardhan",sal:100000},
    {name:"Sagar",sal:100000},
    {name:"Raja",sal:99000},
];
companyEmp.sort((a,b)=>a.sal-b.sal);
console.log(companyEmp);

//replace() and replaceAll()
const name1="v-i-s-a-l";
const name2=name1.replace("-","=+");
const name3=name1.replaceAll("-","=+");
console.log(name2);//v=+i-s-a-l
console.log(name3);//v=+i=+s=+a=+l



























