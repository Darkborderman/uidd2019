
//Setup content when iframe loaded
let content=document.getElementById("tab-content");
content.addEventListener("loadend",()=>{
    content.src="./tab/contract_record.html"; 
});

//Implement tablist
let tabList=["contract_form","verification","applicant_form","record_report","scanning"];

tabList.forEach((tab)=>{
    document.getElementById(tab).addEventListener("click",()=>{
        content.src=`./tab/${tab}.html`;
        for(item of tabList){
            document.getElementById(item).style.backgroundColor="#f7f7f7";
        }
        document.getElementById(tab).style.backgroundColor="#efefef";

    });
});
