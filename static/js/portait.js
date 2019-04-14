const app = new PIXI.Application({ backgroundColor: 0x1099bb });

//Need to ENSURE the full document DOM and CSS tree is finished then paint
$(document).ready(()=>{
    document.getElementById("pixi-canvas").appendChild(app.view);
const parent = document.getElementById("pixi-canvas");

// Resize the renderer
app.renderer.resize(parent.clientWidth, parent.clientHeight);

// create a new Sprite from an image path

let bunnies = [];
let toggleCharacter=0;
for (let i = 0; i <= 4; i++) {
    
    //initialize each character
    let bunny = PIXI.Sprite.from('../img/bunny.png');
    bunny.anchor.set(0.5);
    bunny.width=100;
    bunny.height=400;
    bunny.x = app.screen.width / 6 +150*i;
    bunny.y = app.screen.height - 250;

    //for events
    bunny.interactive = true;
    bunny.buttonMode = true;
    bunny.on('pointerdown', showDetail);

    bunnies.push(bunny);
    app.stage.addChild(bunny);

}

for(let item in bunnies){
}


// Listen for animate update
app.ticker.add((delta) => {
});

function showDetail(){
    i=toggleCharacter;
    console.log(`here`);
    if (i == 0) {
       $("div.top").animate({ top: "-=49%", opacity: 1 }, 500, function () {
          $("div.pic").animate({ top: "-=35%", opacity: 1 }, 1000);
          $("div.name").animate({ top: "-=17%", opacity: 1 }, 1000);
       });
       $("div.bottom").animate({ top: "+=49%", opacity: 1 }, 500, function () {
          $("div.brief").animate({ top: "+=14%", opacity: 1 }, 1000);
       });
 
       $("div.name").html('Tsai Han Ju/')
       $("div.pic").css("background-image", "url(https://i.imgur.com/dnYu2CZ.png)");
       $('div.brief').html('Experience/ <br><br>2017 Industrial Design Winter Exhibtion coutor<br>2017 Summer Internship in Gecko Design<br><br><br>Contact/<br><br>abby123445@gmail.com<br>0911-314-875')
    }
 
    if (i == 1) {
 
       $("div.top").animate({ top: "+=49%", opacity: 0 }, 100)
          .animate({ top: "-=49%", opacity: 1 }, 500);
 
       $("div.bottom").animate({ top: "-=49%", opacity: 0 }, 100)
          .animate({ top: "+=49%", opacity: 1 }, 500);
 
       $("div.pic").animate({ top: "+=35%", opacity: 0 }, 200)
          .animate({ top: "-=35%", opacity: 1 }, 1000);
       $("div.name").animate({ top: "+=17%", opacity: 0 }, 200)
          .animate({ top: "-=17%", opacity: 1 }, 1000);
       $("div.brief").animate({ top: "-=14%", opacity: 0 }, 200)
          .animate({ top: "+=14%", opacity: 1 }, 1000);
 
 
       $("div.name").html('Tsai Han Ju/')
       $("div.pic").css("background-image", "url(https://i.imgur.com/dnYu2CZ.png)");
       $('div.brief').html('Experience/ <br><br>2017 Industrial Design Winter Exhibtion coutor<br>2017 Summer Internship in Gecko Design<br><br><br>Contact/<br><br>abby123445@gmail.com<br>0911-314-875')
    }
    toggleCharacter = 1;
 }
});
