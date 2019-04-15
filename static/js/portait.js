const app = new PIXI.Application({ backgroundColor: 0x5d5d5d });

//Need to ENSURE the full document DOM and CSS tree is finished then paint
$(document).ready(() => {
    document.getElementById("pixi-canvas").appendChild(app.view);
    const parent = document.getElementById("pixi-canvas");

    // Resize the renderer
    app.renderer.resize(parent.clientWidth, parent.clientHeight);

    let members = [
        {
            location: `../img/singleportait1.png`,
            name: 'Tsai Han Ju/',
            brief: 'Experience/ <br><br>2017 Industrial Design Winter Exhibtion coutor<br>2017 Summer Internship in Gecko Design<br><br>Contact/<br><br>abby123445@gmail.com<br>0911-314-875'
        },
        {
            location: `../img/singleportait2.png`,
            name:'2',
            brief:'2 profile'
        },
        {
            location: `../img/singleportait3.png`,
            name:'3',
            brief:'3 profile'
        },
        {
            location: `../img/singleportait4.png`,
            name:'4',
            brief:'4 profile'
        },
        {
            location: `../img/singleportait5.png`,
            name:'5',
            brief:'5 profile'
        },
    ]


    let bunnies = [];
    let toggleCharacter = 0;
    for (let i = 0; i <= 4; i++) {

        //initialize each character
        let member = PIXI.Sprite.from(members[i].location);
        member.anchor.set(0.5);
        member.width=800;
        member.height=600;
        member.x=400;
        member.y=300;
        //for events
        member.interactive = true;
        member.buttonMode = true;
        member.on('pointerdown', (object) => { showDetail(object,members, i); });

        bunnies.push(member);
        app.stage.addChild(member);

    }

    // Listen for animate update
    app.ticker.add((delta) => {
    });

    function showDetail(object,members, index) {
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
        $("div.pic").css("background-image", "url(https://i.imgur.com/dnYu2CZ.png)");
        $('div.brief').html(members[index].brief);
        toggleCharacter = 1;
    }
});
