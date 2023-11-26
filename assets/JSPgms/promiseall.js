const pr1=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        resolved("promise pr1 resolved");
    },1000);
    
})
const pr2=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        resolved("promise pr2 resolved");
    },1000);
    
})
const pr3=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        rejected("promise pr3 rejected");
    },5000);
    
})
const promise=Promise.all([pr1,pr2,pr3]);
console.log(promise);

promise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

const pr5=Promise.all([1,2,3,4,5]);
pr5.then((ree)=>{
    console.log(ree);
})



const pr6=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        resolved("promise pr1 resolved");
    },1000);
    
})
const pr7=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        resolved("promise pr2 resolved");
    },1000);
    
})
const promiseallsettled=Promise.allSettled([pr1,pr2,pr3,pr5,pr6,pr7]);
promiseallsettled.then((resu)=>{
    console.log(resu);
})
.catch((error)=>{
    console.log(error);
})





//quiz ues

function job() {
return new Promise(function(resolve, reject) {
            reject();
});
}
let promise1 = job();

promise1.then(function() {
console.log('Success 1');
})
.then(function() {
    console.log('Success 2');
})
.then(function() {
    console.log('Success 3');
})
.catch(function() {
    console.log('Error 1');
})
.then(function() {
    console.log('Success 4');
});















