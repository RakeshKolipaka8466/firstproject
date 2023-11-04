function handleCard(e){
    window.location.pathname=e.target.id;
    console.log("ge",e.target.id);
    console.log("pe",e.currentTarget.id);
}