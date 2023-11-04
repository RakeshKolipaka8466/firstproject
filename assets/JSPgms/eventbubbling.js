function grandparent(){
    console.log("Iam a Grand Parent");
}
function parent(){
    console.log("Iam a Parent");
}
function child(){
    console.log("Iam a Child");
}
function grandchild(){
    console.log("Iam a Grand Child");
}
document.body.addEventListener("click",()=>{
    console.log("Iam a Body");
})


function cardHandler(){
    console.log("Card Clicked");
    alert("Hey Leaving Page");
    window.location.pathname="dom1.html";
}
function buttonHandler(){
    console.log("Button Handler");
}


document.getElementById("capture").addEventListener('click',()=>{
    alert("iam capture parent");
});
document.getElementById("childCap").addEventListener('click',()=>{
    alert("iam capture child");
});