const app = new PIXI.Application({ backgroundColor: 0x5d5d5d });

//Need to ENSURE the full document DOM and CSS tree is finished then paint
$(document).ready(() => {
    document.getElementById("pixi-canvas").appendChild(app.view);
    const parent = document.getElementById("pixi-canvas");

    // Resize the renderer
    app.renderer.resize(parent.clientWidth, parent.clientHeight);

    let isHovered=false;
    let members = [
        {   photo:`url(https://i.imgur.com/nDvlkE1.png)`,
            location: `../img/singleportait1.png`,
            width:309,
            height:550,
            x: 170,
            y: 300,
            name: 'Tsai Han Ju/',
            brief: 'Experience/ <br><br>2017 Industrial Design Winter Exhibtion coutor<br>2017 Summer Internship in Gecko Design<br><br>Contact/<br><br>abby123445@gmail.com<br>0911-314-875'
        },
        {
            
            photo:`url(https://i.imgur.com/Ph9NmfR.png)`,
            location: `../img/singleportait2.png`,
            width:150,
            height:550,
            x: 365,
            y: 300,
            name: '2',
            brief: '2 profile'
        },
        {
            photo:`url(https://i.imgur.com/gNQotMz.png)`,
            location: `../img/singleportait3.png`,
            width:166,
            height:550,
            x: 500,
            y: 300,
            name: '3',
            brief: '3 profile'
        },
        {   
            photo:`url(https://i.imgur.com/MrAJt5S.png)`,
            location: `../img/singleportait4.png`,
            width:200,
            height:550,

            x: 645,
            y: 300,
            name: '4',
            brief: '4 profile'
        },
        {   photo:`url(https://i.imgur.com/mVNIjAy.png)`,
            location: `../img/singleportait5.png`,
            width:258,
            height:550,

            x: 845,
            y: 300,
            name: '5',
            brief: '5 profile'
        },
    ];



    let bunnies = [];
    let toggleCharacter = 0;
    
    let background= PIXI.Sprite.from(`../img/full-portait.png`);
    background.anchor.set(0.5);
    background.width=988;
    background.x=499;
    background.height=550;
    background.y=300;
    app.stage.addChild(background);
    
    
    
    for (let i = 0; i <= 4; i++) {

        //initialize each character
        let member = PIXI.Sprite.from(members[i].location);
        member.anchor.set(0.5);
        //member.scale=0.5;
        member.width=members[i].width;
        member.height=members[i].height;
        member.x = members[i].x;
        member.y = members[i].y;

        //for events
        member.interactive = true;
        member.buttonMode = true;
        member.on('pointerdown', (object) => { showDetail(object, members, i); });

        console.log(member);
        bunnies.push(member);
        app.stage.addChild(member);

    }

    // Listen for animate update
    app.ticker.add((delta) => {

        
    });

    function showDetail(object, members, index) {
        i = toggleCharacter;
        if (i == 0) {
            $("div.top").animate({ top: "-=49%", opacity: 1 }, 500, function () {
                $("div.pic").animate({ top: "-=35%", opacity: 1 }, 1000);
                $("div.name").animate({ top: "-=17%", opacity: 1 }, 1000);
            });
            $("div.bottom").animate({ top: "+=49%", opacity: 1 }, 500, function () {
                $("div.brief").animate({ top: "+=14%", opacity: 1 }, 1000);
            });
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
        }
        $("div.name").html(members[index].name);
        $("div.pic").css("background-image",members[index].photo);
        $('div.brief').html(members[index].brief);
        toggleCharacter = 1;
    }

    disable_scroll();
});


//disable scrolling to prevent our ugly code
// Writing bad code let me feel guilty, should I blame?
var keys = [32,33,34,35,36,37,38,39,40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}
