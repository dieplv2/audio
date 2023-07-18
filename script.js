const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let navbar = $$(".nav-list li");

let icon = $(".icon");

icon.onclick = function () {
    let x = $("#navtop");

    if(x.className === "nav-list") {
        console.log('pass');
        x.className += " reponsive";
    } else {
        x.className = "nav-list";
    }
}


// Top Ring

let myMp3 = $("#myMp3");
let pause = $(".pause").style.display = 'none';

console.log(myMp3.currentTime);




function myPlay() {
    if(myMp3.play()){
        $(".play").style.display = 'none';
        $(".pause").style.display = 'block';
    }

}

function myPause() {

    console.log($(".play").style.display = 'block');
    if(myMp3.pause());
        $(".pause").style.display = 'none';
       
}