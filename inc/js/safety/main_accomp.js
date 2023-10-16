var fadeover = document.getElementById('fadeover');

const lifta = 150;
const liftb = 285;
const liftc = 500;
const shinea = 10;
const shineb = 50;
const shinec = 115;
const shinelefta = 7;
const shineleftb = 4;
const shineleftc = 8;
var jamescalled = false;
const james_zone = document.getElementById('james_zone');
const james_side = document.getElementById('james_side');
const james_side_text = document.getElementById('james_side_text');
const jamesballoon = document.getElementById('jamesballoon');


const rightsidebuttons = document.getElementById('rightsidebuttons');
const sustain_text = document.getElementById('sustain_text');
const wellness_text = document.getElementById('wellness_text');
const financial_text = document.getElementById('financial_text');


const xray_sustainability = document.getElementById('xray_sustainability');
const xray_wellness = document.getElementById('xray_wellness');
const xray_financial = document.getElementById('xray_financial');



function killAllNodeText(){
  var allNodeText = document.getElementsByClassName('node_text');
for (var i = 0; i < allNodeText.length; i++) {
    allNodeText[i].style.display = 'none';
}
}


function getPain(e){
var nexto = e.nextElementSibling;
console.log(nexto);
killAllNodeText();
nexto.style.display = 'block';
}


function callJamesa(){
  console.log('james here');
  james_zone.classList.add('shown');
}


function callJamesMap(){
  console.log('james here');
  setTimeout(function(){ 
  james_zone.classList.add('shown');
  jamesballoon.innerHTML = "This is the text for the map section!";
  james_side_text.innerHTML = "This is the text for the map popup section.This is the text for the map popup section.This is the text for the map popup section.This is the text for the map popup section.This is the text for the map popup section.This is the text for the map popup section.This is the text for the map popup section. ";
}, 800);
}


function leaveJamesa(){
  james_zone.classList.remove('shown');
}


function togglejamescontent(){
if(jamescalled){
  james_side.classList.remove('shown');
  jamescalled=false;
    console.log(jamescalled);
} else {
  james_side.classList.add('shown');
  jamescalled=true;
} 

}




gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function gotoSection(whereto){
var allcircles = document.getElementsByClassName('innercircle');
for (var i = 0; i < allcircles.length; i++) {
    allcircles[i].classList.remove('activio');
}
document.getElementById('innercircle_'+whereto).classList.add('activio');

  if(whereto==='a'){
    clearSkeletonText();
 gsap.to(window, {duration: 1.5, scrollTo: 0});
  }


    if(whereto==='b'){
        clearSkeletonText();
      gsap.to(window, {duration: 1.2, scrollTo: 2500});
      setTimeout(function(){ 
  showSkeletonStuff_sustainability(); 
}, 1400);
  }

    if(whereto==='c'){
        clearSkeletonText();
      gsap.to(window, {duration: 1.2, scrollTo: 4610});
  }

    if(whereto==='d'){
        clearSkeletonText();
gsap.to(window, {duration: 1.75, scrollTo: 6600});
  }

}


function gotoStart(){
      gsap.to(window, {duration: 1.5, scrollTo: 0});
      setTimeout(function(){ 
        location.reload();
      }, 2000);
}


function clearSkeletonText(){
 xray_sustainability.classList.remove('showzone');
}

function showSkeletonStuff_sustainability(){
 xray_sustainability.classList.add('showzone');
}


function gotoSkeletonZone(whattoshow){
gsap.to(window, {duration: 1.2, scrollTo: 2400});
sustain_text.classList.remove('active_stuff');


if(whattoshow==='sustainability'){
setTimeout(function(){ 
  showSkeletonStuff_sustainability(); 
}, 1400);
}

}


function clearAllPainBubbles(){
    xray_sustainability.classList.remove('showzone');
}

function moveToMachines(){
      xray_sustainability.classList.remove('showzone');
      gsap.to(window, {duration: 2, scrollTo: 4610});
}


function gotoIpad(){
      gsap.to(window, {duration: 1.75, scrollTo: 6600});
}




function gotoSkeletonAnimation(whichlift, whichshine, whichshineleft, targo){
gsap.to(".shine", { opacity: 0, duration: 0.2, stagger: 2});
setTimeout(function(){ 
gsap.to(".lift", { yPercent: whichlift, duration: 1, })
gsap.to("#beams", {xPercent: 10, duration: 1 });
gsap.to(".shine", { yPercent: whichshine, xPercent: whichshineleft, opacity: 0, duration: 0.2, });
}, 500);

setTimeout(function(){ 
gsap.to(".shine", {  opacity: 1, duration: 1.5, });
sustain_text.classList.add('active_stuff');
rightsidebuttons.classList.add('hidden_rightside_buttons');
}, 700); 
targo.classList.add('active');
// gsap.to(window, {duration: 2, scrollTo: 1800});
}


var mainScrollAnimation = function(){




ScrollTrigger.saveStyles(".mobile, .desktop");

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({


  "(min-width: 800px)": function() {

//start desktop
//start desktop
//start desktop


const main_building = gsap.timeline({
ease: "power1",
scrollTrigger: {
    trigger: "#mainbuilding",
    start: 0, 
// end: "+=" + ((window.innerHeight)*3),
    end: 2400,
    pin: "#mainbuilding",
    scrub: 0.5,
    // markers: true,
}
});



const the_lift = gsap.timeline({
ease: "power1",
scrollTrigger: {
trigger: '#mainbuilding',
start: 0,
end: '30%',
scrub: 0.5,
delay: 0.25,
      onEnterBack: leaveJamesa,
// markers: true,
 // onLeave: finished,
}
});
// the_lift



const overbuilding_start = gsap.timeline({
ease: "power1",
scrollTrigger: {
trigger: '#mainbuilding',
start: 1700,
end: 2400,
scrub: true,
delay: 0.25,
// markers: true,
id:'marker 1',
  onEnter: callJamesa,
}
});
overbuilding_start
.to(".rightsidebuttons", {opacity:0})
.to(".solarpanels", {opacity:0})
.to(".lift", {opacity:0})
.to(".shine", {opacity:0})
.to("#maincolourbuilding", {opacity:0, duration: 1.5})
.to('#contento', { backgroundColor: '#fff8f0'})
.to("#xraybuilding", {opacity:1, duration: 1.5})


const machines = gsap.timeline({
ease: "power1",
scrollTrigger: {
    trigger: "#machines",
start: 'top 40%',
end: "+=60%",
    // pin: "#machines",
    scrub: true,
delay: 0.75,
    // markers: true,
    id:'machines',
      onEnter: leaveJamesa,
}
});
machines
.to("#xraybuilding", {opacity:0, duration: 1.5})
.to('#contento', { backgroundColor: '#052f3f', duration: 1.8})
.to(".element_a", { yPercent: 20, }, 0.2)
.to(".showonmachines", {opacity: 1}, 0.25)
.to(".element_b", { yPercent: 20, }, 0.25)
.to(".element_c", { yPercent: 20, }, 0.3)
.to('#polyline_a', { strokeDashoffset: 0})
.to('#polyline_b', { strokeDashoffset: 0})
.to('.ipad', {scale: 0.95})

const machinelines = gsap.timeline({
ease: "power1",
scrollTrigger: {
    trigger: "#ipad",
start: '+=0%',
end: "+=350%",
pin: "#machines",
    scrub: true,
delay: 0.5,
  // markers: true,
    id:'ipad',
      onEnter: leaveJamesa,
      onEnterBack: leaveJamesa,
}
});
machinelines
.to('#polyline_a', { opacity: 0, duration: 1.5 },1)
.to('#polyline_b', { opacity: 0, duration: 1.5},1)
.to('.ipad', {scale: 1})
.to('.talking_head_left', { opacity: 1, yPercent: 10},0.5)
.to('.talking_head_right', { opacity: 1, yPercent: 10},0.75)
.to('.talking_speech_left', { opacity: 1, yPercent: -30,}, 3)
.to('.talking_speech_right', { opacity: 1, yPercent: -30,}, 4)
.to('.ipad', {scale: 0.95}, 7);




const simplemap = gsap.timeline({
ease: "power1",
scrollTrigger: {
    trigger: "#simplemap",
start: '+=0%',
end: "+=200%",
pin: "#simplemap",
    scrub: true,
delay: 0.25,
  // markers: true,
    id:'simplemap',
onEnter: callJamesMap,
onEnterBack: callJamesMap,
      onLeave: leaveJamesa,
}
});
simplemap
.to('#simplemap_text', { opacity: 1, duration: 0.5 })
.to('#contento', { backgroundColor: '#fff', duration: 0.75})
.to('.map_holder', { opacity: 0, duration: 1.2 })
;



const usp_section = gsap.timeline({
ease: "power1",
scrollTrigger: {
    trigger: "#usp_section",
start: '+=0%',
end: "+=90%",
pin: "#usp_section",
    scrub: true,
delay: 0.15,
  // markers: true,
    id:'usp_section',
      onEnter: leaveJamesa,
      onEnterBack: leaveJamesa,

}
});
usp_section
.to('.usp_block_a', { opacity: 1, xPercent: 150, duration: 0.5 },0.2)
.to('.usp_block_b', { opacity: 1, xPercent: 150, duration: 1 },0.7)
.to('.usp_block_c', { opacity: 1, xPercent: 150, duration: 1.2 },0.9)
;




//end desktop
//end desktop
//end desktop
  }, 




  "(max-width: 799px)": function() {
//start mobile
//start mobile
//start mobile



//end mobile
//end mobile
//end mobile
},


  "all": function() {





//end all
//end all
  }

});







//end
//end
//end
};





//other functions
document.addEventListener("DOMContentLoaded", function() {
  mainScrollAnimation();

setTimeout(function(){ 
fadeover.classList.add('hidden');
}, 1000);

});
