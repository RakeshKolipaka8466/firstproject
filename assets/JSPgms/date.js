const currentDate=new Date();
console.log(currentDate);
console.log(currentDate.getTime(),"currentDate.getTime()");
console.log(currentDate.getFullYear(),"currentDate.getFullYear()");
console.log(currentDate.getMonth(),"currentDate.getMonth()");
console.log(currentDate.getDay(),"currentDate.getDay()");
console.log(currentDate.getMilliseconds(),"currentDate.getMilliseconds()");
console.log(currentDate.getSeconds(),"currentDate.getSeconds()");
console.log(currentDate.getMinutes(),"currentDate.getMinutes()");
console.log(currentDate.getHours(),"currentDate.getHours()");
console.log(currentDate.getDate(),"currentDate.getDate()");
//JS takes months start from 0 to 11  0->jan,1->feb.....11->dec
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());
console.log(currentDate.toLocaleString());

//
function getFormattedDate(curr){
    return `${curr.getDate()}-${curr.getMonth()+1}-${curr.getFullYear()}`;
}
console.log(getFormattedDate(currentDate));

