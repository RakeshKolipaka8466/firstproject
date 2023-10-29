const arr=["blue","black","red","maroon","yellow","pink","green"];
function random(){
    const randomIndex=Math.floor(Math.random()*arr.length);
    const container=document.getElementById("container");
    container.style.backgroundColor=arr[randomIndex];
}

const button=document.createElement("button");
button.textContent="ChangeColorr";
button.style.marginTop="10px";
document.body.appendChild(button);
button.addEventListener("click",random);

//oninput= what u have to enter that name displayed
function changeHandler(e){
    console.log(e.target.value);
}