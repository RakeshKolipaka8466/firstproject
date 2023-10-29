const box1=document.createElement("div");
box1.className="box1";
document.body.appendChild(box1);
const box2=document.createElement("div");
box2.style.background="yellow";
box2.style.border="2px solid white";
box2.style.width="350px";
box2.style.height="350px";
box2.style.display="flex";
box2.style.justifyContent="center";
box2.style.alignItems="center";
box1.appendChild(box2);
const box3=document.createElement("div");
box3.style.background="maroon";
box3.style.border="2px solid green";
box3.style.width="300px";
box3.style.height="300px";
box3.style.display="flex";
box3.style.justifyContent="center";
box3.style.alignItems="center";
box2.appendChild(box3);
const box4=document.createElement("span");
box4.innerText="!!Cool...";
box4.style.fontSize="30px";
box4.style.background="blue";
box4.style.border="2px solid black";
box4.style.color="red";
box4.style.width="250px";
box4.style.height="250px";
box4.style.display="flex";
box4.style.justifyContent="center";
box4.style.alignItems="center";
box3.appendChild(box4);

//came HTML collections used by   getElementByTagName
const eleByTag=document.getElementsByTagName("div");
console.log(eleByTag);//how many div's we were use in this pgm ,total div's come
console.log(eleByTag[1]);//come second div properties

for(let value of eleByTag){
    console.log(value);//total div properties come
}

console.log(Array.isArray(eleByTag));//false

const eleByClassName=document.getElementsByClassName("box1");
console.log(eleByClassName);//HTMLCollection [div.box1]

//getElementsByTagName will return the collection of element with specific tag
//getElementsByClassName will return the collection of element with specific class

//getElementsByClassName,getElementsByTagName,getElementById,querySelector,querySelectorAll .this All
//are the properties (method) attached to the document Object. 

const doc=document;
console.log(doc);//#document

const getByQuery=document.querySelector("div");
console.log(getByQuery);//div.box1
//querySelector will return the 1st element matches the div selector

const getByQueryAll=document.querySelectorAll("div");
console.log(getByQueryAll);//NodeList(3) [div.box1, div, div]
//it will search in whole dom and return 1st matches value

const QuerySelectorAll=document.querySelectorAll(".abc");//div.abc1
//console.log(QuerySelectorAll);

const btn=document.createElement("button");
btn.textContent="Click Me";
document.body.appendChild(btn);
box4.appendChild(btn);//Click Me button

function button2(arg1){
    const buttonnode=arg1.target;
    console.log(arg1.target);
    if(buttonnode.textContent==="send"){
        buttonnode.textContent="undo";
    }else{
        buttonnode.textContent="send";
    }
}









































