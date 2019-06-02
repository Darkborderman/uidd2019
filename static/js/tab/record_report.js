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
});

//Setup content when iframe loaded
let content=document.getElementById("content");
content.addEventListener("loadend",()=>{
    content.src="../category/overview.html"; 
});

document.getElementById("query_record").addEventListener("click",()=>{
    content.src="../category/query_record.html";
});