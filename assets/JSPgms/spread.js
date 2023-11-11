let employee={
    user:{
        address:{
            country:{
                state:{
                    city:{
                        postoffice:{
                            pincode:12345,
                        },
                    },
                },
            },
        },
    },
};
console.log(employee);
//i want to change pincode  first way is:
employee.user.address.country.state.city.postoffice.pincode=678910;
//i want to change pincode but usinng spread operator
employee={
    ...employee,
    user:{
        ...employee.user,
        address:{
            ...employee.user.address,
            country:{
                ...employee.user.address.country,
                state:{
                    ...employee.user.address.country.state,
                    city:{
                        ...employee.user.address.country.state.city,
                        postoffice:{
                            ...employee.user.address.country.state.city.postoffice,
                            pincode:11121314,
                        },
                    },
                },
            },
        },

    },
};
console.log(employee);

//spread operator is use for merging 2 objects
//adding key and item to the obj and updating nested object
let A={
    a:123,
};
A.b=2345;
console.log(A);

A["B"]=2888;
console.log(A);

const C={
    ...A,
    Operator:"*",
};
console.log(C);

const std1Address={
    firstName:"Rakesh",
    secondName:"Raki",
    address:"Hyd",
    phone:1234667899,
}
const std2Address={
    lastName:"Rajesh",
    secName:"Raj",
    secaddress:"Hyder",
    secphone:1234667802,   
}
const mergedObj={
    ...std1Address,
    ...std2Address,
};
console.log(mergedObj);



const array=[
    {
        city:"Hyd",
        local:"Isnapur",
        pincode:1234,
    },
    {
        city:"Hyder",
        local:"Isnapurrr",
        pincode:51234,
    },
    {
        city:"hHyd",
        local:"iIsnapur",
        pincode:81234,
    },
];
const arraysObj=array.map((obj)=>{
    return{
        ...obj,
        isDelivered:true,
    };
});
console.log(arraysObj);


let employee10={
    name:"vimal",
    college:"LPU",
    city:{
        name:"kanpur",
        state:"UP",
        locality:"Vishnupuri",
        pincode:208002,
        info:{
            id:111,
            dm:"Raji",
        },
    },
};
employee10={
    ...employee10,
    college:"Newton",
    city:{
        ...employee10.city,
        locality:"Shivapuri",
        info:{
            ...employee10.city.info,
            dm:"Rajitha",
        },
    },
};
console.log(employee10);


























