const wallid=document.getElementById("wall_id");
const wallcolor=document.getElementById("wall_color");
const applybtn=document.getElementById("apply-btn");
const resetbtn=document.getElementById("reset-btn");
applybtn.addEventListener("click",apply);
function apply(){
const selectwall=document.getElementById(wallid.value);
selectwall.style.background=wallcolor.value;
}
resetbtn.addEventListener("click",reset);
function reset(){
const boxes=document.querySelectorAll(".block");
for(let value of boxes){
    value.style.background="transparent";
}
}