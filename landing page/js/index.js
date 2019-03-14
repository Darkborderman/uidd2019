//set interval change
let currentChips=1;
setInterval(()=>{
    currentChips++;
    currentChips%=3;
    changeChip(currentChips,500);
},4000);
//change chip when click on buttons
document.getElementById("left").addEventListener("click",()=>{
    currentChips++;
    currentChips%=3;
    changeChip(currentChips,200);
});
document.getElementById("right").addEventListener("click",()=>{
    currentChips--;
    if(currentChips<0) currentChips=2;
    currentChips%=3;
    changeChip(currentChips,200);
});

function changeChip(chipNumber,duration){
    if(chipNumber==0){
        $("#chips").fadeOut(duration,()=>{
            $("#chips").attr("src","/images/chips/cheddar.png");
        });
        $("#chips").fadeIn(duration);
    }
    if(chipNumber==1){
        $("#chips").fadeOut(duration,()=>{
            $("#chips").attr("src","/images/chips/flamingHot.png");
        });
        $("#chips").fadeIn(duration);
    }
    if(chipNumber==2){
        $("#chips").fadeOut(duration,()=>{
            $("#chips").attr("src","/images/chips/onion.png");
        });
        $("#chips").fadeIn(duration);
    }
}