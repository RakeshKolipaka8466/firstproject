let promise=new Promise(function (resolve,reject){
   setTimeout(()=>resolve(1),1000);
});
promise.then(function (result){
    
    console.log(result);
    //return result*2;
});
promise.then(function (result){
    console.log(result);
    //return result*2;
});
promise.then(function (result){
    console.log(result);
    //return result*2;
});