//control button hide or display
let isHide=false;
document.getElementById("categoryControl").addEventListener("click",()=>{
    if(!isHide){
        document.querySelectorAll(".category").forEach((element)=>{
            element.style.display="none";
        });
        isHide=true;
    }
    else{
        document.querySelectorAll(".category").forEach((element)=>{
            element.style.display="inline-block";
        });
        isHide=false;
    }
})