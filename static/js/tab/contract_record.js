let isHide=[false,false];
document.getElementById("categoryControl").addEventListener("click",(event)=>{
    if(isHide[0]==false||isHide[1]==false){
        document.querySelectorAll(".section > *").forEach((element)=>{
            element.style.display="none";
        });
        isHide=[true,true];
    }
    else{
        document.querySelectorAll(".section > *").forEach((element)=>{
            element.style.display="inline-block";
        });
        isHide=[false,false];
    }
},true);
document.querySelectorAll(".section").forEach((element,index)=>{
    element.addEventListener("click",(event)=>{
        if(event.target==event.currentTarget){
            if(isHide[index]==false){
                for(item of element.children){
                    item.style.display='none';
                    isHide[index]=true;
                }
            }
            else{
                for(item of element.children){
                    item.style.display='inline-block';
                    isHide[index]=false;
                }
            }
        }

    });
},false);
//0-13 form 1
let inputList=[];
for(let i=0;i<=33;i++){
    inputList.push(false);
}
document.querySelectorAll("input").forEach((element,index)=>{
    if(element.value!=""){
        inputList[index]=true;
    }
});

document.querySelectorAll("input").forEach((element,index)=>{
    element.addEventListener("blur",()=>{
        if(element.value!=""){
            inputList[index]=true;
            checkColorChange(0,13,sectionElement[0]);
            checkColorChange(14,33,sectionElement[1]);
        }
        else{
            inputList[index]=false;
            checkColorChange(0,13,sectionElement[0]);
            checkColorChange(14,33,sectionElement[1]);
        }
    });
});

let sectionElement=document.querySelectorAll(".section");

function checkColorChange(start,end,element){
    for(let i=start;i<=end;i++){
        if(inputList[i]==false){
            element.style.backgroundColor="#FFDCE0";
            return;
        }
    }
    element.style.backgroundColor="#EFF6F9";
}