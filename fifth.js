// smooth scrolling
//atach loco scroll css
//atach locomotive scroll
//somecode from loco github


//gsap
//atach gsap
//scrolltriger
var circle = document.querySelector(".circle");
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});





/// start my code
let timeout;
let elems = document.querySelectorAll(".elem");
let img = document.querySelectorAll("img");

function firstPageAni(){
var tl = gsap.timeline();
tl.from("#nav", {
y: "-10",
opacity: 0,
ease: "expo.easeInOut",
duration: 1.5
})

.to(".boundingelem", {
    y: 0,
    ease: "expo.easeInOut",
    duration: 2,
stagger: .2,
delay: -1,
    })

    .from("#herofooter", {
        delay: -1,
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: "expo.easeInOut"
        })


}

/// when mouse move then we will do skew and maninm and max skew we can define
//when mouse move the chapta value increase;
//when mouse is stop chapta can remove

function circleChaptaKro(){
    //define defult value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
this.clearTimeout(timeout)

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);


 xprev = dets.clientX;
 yprev = dets.clientY;

 circleMouseFollower(xscale, yscale);
 setTimeout(function(){
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
 }, 100)
 
    })
}

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`

    })
}



circleChaptaKro()
circleMouseFollower();
firstPageAni();


//select all three elements and put on this eventlistener mousemove then check mouse on x whichi direction and y direction, rotate it when it move and when moving is fast rotation is also fast..
elems.forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            x: 4,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8)
        })
    })


    elem.addEventListener("mouseleave", function(dets){
   
    
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: .5,
        })
    })






})

