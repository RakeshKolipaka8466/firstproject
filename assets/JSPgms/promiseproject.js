function displayData(users){
    var result=document.getElementById("result");
    users?.forEach((val)=>{
        console.log("users",val);

        var div=document.createElement("div");
        div.style="border:3px solid green ; background:lightyellow";
        div.innerHTML= `<div>${val.firstName}</div>

        <img src="${val.image}"/>
        <div>${val.lastName}</div>
        <div>${val.gender}</div>
        <div>${val.phone}</div>` ;

        result.appendChild(div);
    });
}

var getData=(e)=>{
    var getinputid=document.getElementsByClassName("input")[0].value;
    var response=fetch(`https://dummyjson.com/users/search?q=${getinputid}`);
    response.then((res)=>{
        res.json().then((result)=>{
            console.log(result.users);
            displayData(result?.users);
        });
    });
}