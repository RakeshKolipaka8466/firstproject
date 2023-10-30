// var count=0;
// function clickme(e){
//     alert("button successfully clicked");
//     console.log(e);
//     document.getElementById("btn1").addEventListener("click",function(){
//         alert("Hey......");
//         count++;
//         console.log("count=",count);
//     })
// }

// function clickme(e){
//     alert("Hey successfully Clicked");
//     document.getElementById("btn1").addEventListener("click",hello);
// }
// function hello(){
//     alert("HEY Triggering after adding event");
// }

document.getElementById("btn1").addEventListener("click",clickme);
function clickme(){
    console.log("button 1 clicked");
    document.getElementById("btn2").addEventListener("click",cell);
}
function cell(){
    console.log("button 2 clicked");
    document.getElementById("btn1").removeEventListener("click",clickme);
}
document.getElementById("btn3").addEventListener("click",remove);
function remove(){
    document.getElementById("btn2").removeEventListener("click",cell);
}

function selectTheme(e){
    document.querySelector("body").style.backgroundColor=e.target.value;
}