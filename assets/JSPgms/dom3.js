//const array=["black","red","white","pink","maroon","gold","silver","maroon"];
// function change(e){
//     const arrIndex=Math.floor(Math.random()*array.length);
//     const container=document.getElementById("container");
//     container.style.background=array[arrIndex];
// }
var color="";
function changeHandler(e){
    color=e.target.value;
}
function change(e){
    const container=document.getElementById("container");
    //container.style.background=color;
     container.style.background=document.getElementById("color").value;
}