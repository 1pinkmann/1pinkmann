var gearBtn = document.getElementsByClassName('gear');
var starBtn = document.getElementsByClassName('star');
var graphBtn = document.getElementsByClassName('graph');
var lupaBtn = document.getElementsByClassName('lupa');
var hlopBtn = document.getElementsByClassName('hlop');
var hdphoneBtn = document.getElementsByClassName('headphone');
var nextBtn = document.getElementsByClassName('next-btn');
var prevBtn = document.getElementsByClassName('prev-btn');

var blurAnimRun = document.getElementsByClassName('services-container__blur');
var blur2AnimRun = document.getElementsByClassName('services-container__blur2');
var heartAnimRun = document.getElementsByClassName('services-container__heart');
var blurAnimStop = document.getElementsByClassName('services-container__blur');
var blur2AnimStop = document.getElementsByClassName('services-container__blur2');
var heartAnimStop = document.getElementsByClassName('services-container__heart');

var gearBg = document.getElementsByClassName('gear');
var starBg = document.getElementsByClassName('star');
var graphBg = document.getElementsByClassName('graph');
var lupaBg = document.getElementsByClassName('lupa');
var hlopBg = document.getElementsByClassName('hlop');
var hdphoneBg = document.getElementsByClassName('headphone');

var gearAppear = document.getElementsByClassName('services-demo_gear');
var starAppear = document.getElementsByClassName('services-demo_star');
var graphAppear = document.getElementsByClassName('services-demo_graph');
var lupaAppear = document.getElementsByClassName('services-demo_lupa');
var hlopAppear = document.getElementsByClassName('services-demo_hlop');
var hdphoneAppear = document.getElementsByClassName('services-demo_headphone');

var opacityP = document.getElementsByClassName('services-demo__p');
var opacityL = document.getElementsByClassName('services-demo__more-link');

var nextScroll = document.getElementsByClassName('team-container__team-cards');



gearBtn[0].onclick = function() {
    blurAnimRun[0].classList.add("animate-blur");
    blur2AnimRun[0].classList.add("animate-blur2");
    heartAnimRun[0].classList.add("animate-heart");
    gearBg[0].classList.add("active");
    gearAppear[0].classList.add("appear");
    starAppear[0].classList.remove("appear");
    starBg[0].classList.remove("active");
    graphAppear[0].classList.remove("appear");
    graphBg[0].classList.remove("active");
    lupaBg[0].classList.remove("active");
    lupaAppear[0].classList.remove("appear");
    hlopBg[0].classList.remove("active");
    hlopAppear[0].classList.remove("appear");
    hdphoneBg[0].classList.remove("active");
    hdphoneAppear[0].classList.remove("appear");
    opacityP[0].classList.add("opacity");
    opacityL[0].classList.add("opacity");

    setTimeout(function(){
        blurAnimRun[0].classList.remove("animate-blur");
        blur2AnimRun[0].classList.remove("animate-blur2");
        heartAnimRun[0].classList.remove("animate-heart");
    }, 700);
}

starBtn[0].onclick = function() {
    blurAnimRun[0].classList.add("animate-blur");
    blur2AnimRun[0].classList.add("animate-blur2");
    heartAnimRun[0].classList.add("animate-heart");
    starAppear[0].classList.add("appear");
    gearAppear[0].classList.remove("appear");
    starBg[0].classList.add("active");
    gearBg[0].classList.remove("active");
    graphAppear[0].classList.remove("appear");
    graphBg[0].classList.remove("active");
    lupaBg[0].classList.remove("active");
    lupaAppear[0].classList.remove("appear");
    hlopBg[0].classList.remove("active");
    hlopAppear[0].classList.remove("appear");
    hdphoneBg[0].classList.remove("active");
    hdphoneAppear[0].classList.remove("appear");
    opacityP[1].classList.add("opacity");
    opacityL[1].classList.add("opacity");

    setTimeout(function(){
        blurAnimRun[0].classList.remove("animate-blur");
        blur2AnimRun[0].classList.remove("animate-blur2");
        heartAnimRun[0].classList.remove("animate-heart");
    }, 700);
}

graphBtn[0].onclick = function() {
    blurAnimRun[0].classList.add("animate-blur");
    blur2AnimRun[0].classList.add("animate-blur2");
    heartAnimRun[0].classList.add("animate-heart");
    starAppear[0].classList.remove("appear");
    gearAppear[0].classList.remove("appear");
    starBg[0].classList.remove("active");
    gearBg[0].classList.remove("active");
    graphAppear[0].classList.add("appear");
    graphBg[0].classList.add("active");
    lupaBg[0].classList.remove("active");
    lupaAppear[0].classList.remove("appear");
    hlopBg[0].classList.remove("active");
    hlopAppear[0].classList.remove("appear");
    hdphoneBg[0].classList.remove("active");
    hdphoneAppear[0].classList.remove("appear");
    opacityP[2].classList.add("opacity");
    opacityL[2].classList.add("opacity");

    setTimeout(function(){
        blurAnimRun[0].classList.remove("animate-blur");
        blur2AnimRun[0].classList.remove("animate-blur2");
        heartAnimRun[0].classList.remove("animate-heart");
    }, 700);
}

lupaBtn[0].onclick = function() {
    blurAnimRun[0].classList.add("animate-blur");
    blur2AnimRun[0].classList.add("animate-blur2");
    heartAnimRun[0].classList.add("animate-heart");
    starAppear[0].classList.remove("appear");
    gearAppear[0].classList.remove("appear");
    starBg[0].classList.remove("active");
    gearBg[0].classList.remove("active");
    graphAppear[0].classList.remove("appear");
    graphBg[0].classList.remove("active");
    lupaBg[0].classList.add("active");
    lupaAppear[0].classList.add("appear");
    hlopBg[0].classList.remove("active");
    hlopAppear[0].classList.remove("appear");
    hdphoneBg[0].classList.remove("active");
    hdphoneAppear[0].classList.remove("appear");
    opacityP[3].classList.add("opacity");
    opacityL[3].classList.add("opacity");

    setTimeout(function(){
        blurAnimRun[0].classList.remove("animate-blur");
        blur2AnimRun[0].classList.remove("animate-blur2");
        heartAnimRun[0].classList.remove("animate-heart");
    }, 700);
}

hlopBtn[0].onclick = function() {
    blurAnimRun[0].classList.add("animate-blur");
    blur2AnimRun[0].classList.add("animate-blur2");
    heartAnimRun[0].classList.add("animate-heart");
    starAppear[0].classList.remove("appear");
    gearAppear[0].classList.remove("appear");
    starBg[0].classList.remove("active");
    gearBg[0].classList.remove("active");
    graphAppear[0].classList.remove("appear");
    graphBg[0].classList.remove("active");
    lupaBg[0].classList.remove("active");
    lupaAppear[0].classList.remove("appear");
    hdphoneBg[0].classList.remove("active");
    hdphoneAppear[0].classList.remove("appear");
    hlopBg[0].classList.add("active");
    hlopAppear[0].classList.add("appear");
    opacityP[4].classList.add("opacity");
    opacityL[4].classList.add("opacity");

    setTimeout(function(){
        blurAnimRun[0].classList.remove("animate-blur");
        blur2AnimRun[0].classList.remove("animate-blur2");
        heartAnimRun[0].classList.remove("animate-heart");
    }, 700);
}

hdphoneBtn[0].onclick = function() {
    blurAnimRun[0].classList.add("animate-blur");
    blur2AnimRun[0].classList.add("animate-blur2");
    heartAnimRun[0].classList.add("animate-heart");
    starAppear[0].classList.remove("appear");
    gearAppear[0].classList.remove("appear");
    starBg[0].classList.remove("active");
    gearBg[0].classList.remove("active");
    graphAppear[0].classList.remove("appear");
    graphBg[0].classList.remove("active");
    lupaBg[0].classList.remove("active");
    lupaAppear[0].classList.remove("appear");
    hlopBg[0].classList.remove("active");
    hlopAppear[0].classList.remove("appear");
    hdphoneBg[0].classList.add("active");
    hdphoneAppear[0].classList.add("appear");
    opacityP[5].classList.add("opacity");
    opacityL[5].classList.add("opacity");

    setTimeout(function(){
        blurAnimRun[0].classList.remove("animate-blur");
        blur2AnimRun[0].classList.remove("animate-blur2");
        heartAnimRun[0].classList.remove("animate-heart");
    }, 700);
}

nextBtn[0].onclick = function() {
    nextScroll[0].classList.add("next");
}

nextBtn[0].onclick = function() {
    nextScroll[0].classList.add("next");
    nextScroll[0].classList.remove("prev");
}

prevBtn[0].onclick = function() {
    nextScroll[0].classList.remove("next");
    nextScroll[0].classList.add("prev");
}

    