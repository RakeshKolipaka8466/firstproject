console.log("DOM Material");
const rootE=document.getElementById("root");
console.log("root1",rootE);
rootE.innerText="Hey DOM Material";
rootE.style.fontSize="36px";
rootE.style.color="red";
rootE.style.margin="auto";
rootE.style.width="100%";
rootE.style.textAlign="center";

const root2=document.createElement("div");
document.body.appendChild(root2);//node
console.log("root2",root2);
root2.innerText="Hey this is dynamically added div";
root2.style.fontSize="36px";
root2.style.color="red";
root2.style.margin="auto";
root2.style.width="100%";
root2.style.textAlign="center";

//3div's,1span 1big box have 2 boxes and 1 text,2nd box have 1box and 1 text,3rd box have 1 text pgm
const box1=document.createElement("div");
box1.className="box1";
document.body.appendChild(box1);
const box2=document.createElement("div");
box2.style.backgroundColor="green";
box2.style.width="300px";
box2.style.height="300px";
box2.style.border="2px solid black";
box2.style.display="flex";
box2.style.justifyContent="center";
box2.style.alignItems="center";
box1.appendChild(box2);
const box3=document.createElement("div");
box3.style.backgroundColor="maroon";
box3.style.width="200px";
box3.style.height="200px";
box3.style.border="2px solid blue";
box3.style.display="flex";
box3.style.justifyContent="center";
box3.style.alignItems="center";
box2.appendChild(box3);
const spanText=document.createElement("span");
spanText.innerText="Cool!!!"
spanText.style.display="flex";
spanText.style.justifyContent="center";
spanText.style.alignItems="center";
spanText.style.background="yellow";
spanText.style.border="2px solid white";
spanText.style.width="100px";
spanText.style.height="100px";
spanText.style.color="red";
box3.appendChild(spanText);

















