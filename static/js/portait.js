const app = new PIXI.Application({ backgroundColor: 0x5d5d5d });

//Need to ENSURE the full document DOM and CSS tree is finished then paint
$(document).ready(() => {
    document.getElementById("pixi-canvas").appendChild(app.view);
    const parent = document.getElementById("pixi-canvas");

    // Resize the renderer
    app.renderer.resize(parent.clientWidth, parent.clientHeight);

    let isHovered = false;
    let hoverOn=-1;
    let members = [
        {
            photo: `url(https://i.imgur.com/nDvlkE1.png)`,
            location: `../img/singleportait1.png`,
            width: 252,
            height: 440,
            x: 130,
            y: 220,
            name: 'Tseng Da wei/',
            brief: 'Experience/ <br><br>expert in JS frontend, backend<br><br>Contact/<br><br>reastw1234@gmail.com'
        },
        {
            photo: `url(https://i.imgur.com/Ph9NmfR.png)`,
            location: `../img/singleportait2.png`,
            width: 120,
            height: 440,
            x: 289,
            y: 220,
            name: 'Liu He Yi/',
            brief: 'Experience/<br><br>C++ 剛踏出新手村<br>網頁設計 剛踏入新手村<br><br>Contact/<br><br>audrey.88630@gmail.com<br>0966056334',
        },
        {
            photo: `url(https://i.imgur.com/gNQotMz.png)`,
            location: `../img/singleportait3.png`,
            width: 132,
            height: 440,
            x: 400,
            y: 220,
            name: 'Chang Fu Han/',
            brief: 'Experience/<br><br>2016 Summer Intership in Advantech<br><br>Contact/<br><br>zonac0217@gmail.com',
          
        },
        {
            photo: `url(https://i.imgur.com/MrAJt5S.png)`,
            location: `../img/singleportait4.png`,
            width: 160,
            height: 440,

            x: 520,
            y: 220,
            name: 'Tsai Han Ju',
            brief: 'Experience/ <br><br>2017 Industrial Design Winter Exhibtion coutor<br>2017 Summer Internship in Gecko Design<br><br>Contact/<br><br>abby123445@gmail.com<br>0911-314-875'
          
        },
        {
            photo: `url(https://i.imgur.com/mVNIjAy.png)`,
            location: `../img/singleportait5.png`,
            width: 208,
            height: 440,

            x: 680,
            y: 220,
            name: 'Shiue Sheng Cian',
            brief: 'Experience/<br> <br>2017 台灣國際造船暑期實習生<br>2018 上海交通大學暑期交換學生 <br><br>Contact/<br><br>t50504t@gmail.com<br>0970318055'
          
        },
    ];



    let bunnies = [];
    let toggleCharacter = 0;

    let background = PIXI.Sprite.from(`../img/full-portait.png`);
    background.anchor.set(0.5);
    background.width = 800;
    background.x = 400;
    background.height = 440;
    background.y = 220;
    app.stage.addChild(background);



    for (let i = 0; i <= 4; i++) {

        //initialize each character
        let member = PIXI.Sprite.from(members[i].location);
        member.anchor.set(0.5);
        //member.scale=0.5;
        member.width = members[i].width;
        member.height = members[i].height;
        member.x = members[i].x;
        member.y = members[i].y;

        //for events
        member.interactive = true;
        member.buttonMode = true;
        member.on('pointerdown', (object) => { showDetail(object, members, i); });
        member.on(`mouseover`, () => { isHovered=true; hoverOn=i;});
        member.on(`mouseout`,()=>{ isHovered=false; showPortait();})
        console.log(member);
        bunnies.push(member);
        app.stage.addChild(member);

    }

    // Listen for animate update
    app.ticker.add((delta) => {
        if(isHovered){
            hidePortait();
        }
        else {
            showPortait();
        }
        console.log(hoverOn);
    });
    function hidePortait() {
        if (background.alpha > 0.2) {
            background.alpha -= 0.03;
        }
        for (let i = 0; i <= 4; i++) {
            if(i==hoverOn) continue;
            if (bunnies[i].alpha > 0.2)
                bunnies[i].alpha -= 0.03;
        }
    }
    function showPortait() {
        if (background.alpha < 1) {
            background.alpha += 0.03;
        }
        for (let i = 0; i <= 4; i++) {
            bunnies[i].alpha += 0.03;
        }
    }

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
        $("div.pic").css("background-image", members[index].photo);
        $('div.brief').html(members[index].brief);
        toggleCharacter = 1;
    }

    disable_scroll();
});


//disable scrolling to prevent our ugly code
// Writing bad code let me feel guilty, should I blame?
var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

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
