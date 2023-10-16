var fadeover = document.getElementById('fadeover');
const innerheight = window.innerHeight;
const innerwidth = window.innerWidth;
const viewportlength = ''+(innerheight/1.2)+'px';
const scrolldisto = '+='+(innerheight*1)+'px';
const introscrub = true;
const introremstart = (16 * 30);
const introstart_a = 0;
const introstart_b = '20%';
const introstart_c = '50%';
const introend = '300%';
const james_zone = document.getElementById('james_zone');

const cloud_a = document.getElementById('cloud_a');
const cloud_b = document.getElementById('cloud_b');


var elementbox = document.getElementById("elements");  
var elementboxFromTop = elementbox.getBoundingClientRect().top; 


let prevheight = 0;

function getScrollDisto(){
  prevheight = window.scrollY
  console.log(prevheight);
}


function moveClouds(){
  cloud_a.style.transform = 'translatex(104vw)';
    cloud_b.style.transform = 'translatex(109vw)';
}

function callJamesa(){
  james_zone.style.display = 'block';
}

function leaveJamesa(){
  james_zone.style.display = 'none';
}


var mainScrollAnimation = function(){


gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.saveStyles(".mobile, .desktop");

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({


  "(min-width: 800px)": function() {

//start desktop
//start desktop
//start desktop

const start_function = gsap.timeline({
scrollTrigger: {
trigger: '#section_1',
start: 10,
  onEnter: moveClouds,
  markers: true,
}
});


const main_building = gsap.timeline({
ease: "power1",
scrollTrigger: {
trigger: '#section_1',
start: introremstart+'px',
end: '400%',
scrub: 0.5,
pin: '#contento',
pinType: "fixed",
markers: true,
}
});


const the_lift = gsap.timeline({
ease: "power1",
scrollTrigger: {
trigger: '#section_1',
start: 0,
end: '40%',
scrub: 0.5,
markers: true,
}
});
the_lift
//.to(".lift", { yPercent: 140},1) floor 2 from top
.to(".lift", { yPercent: 275, duration: 1})



const main_building_stuff_a = gsap.timeline({
ease: "power1",
scrollTrigger: {
trigger: '#section_1',
start: '10%',
end: '60%',
scrub: 0.5,
markers: true,
}
});
main_building_stuff_a
.to(".shine", { opacity:1},1)
.to(".shine", { opacity:0 },4)


const main_building_switch = gsap.timeline({
ease: "power1",
scrollTrigger: {
trigger: '#section_1',
start: '100%',
end: '300%',
scrub: 0.5,
  onEnter: callJamesa,
  onLeave: leaveJamesa,
  markers: true,
}
});
main_building_switch
.to(".lift", {opacity:0, duration: 0.3}, 1)
.to(".maincolourbuilding", {opacity:0, duration: 0.5}, 1.5)
.to(".mainxraybuilding", {opacity:1, duration: 0.5}, 1.5)
.to('#contento', { backgroundColor: '#fef9ef', duration: 0.5}, 1.5)


const section_two = gsap.timeline({
ease: "power1",
scrollTrigger: {
trigger: '#elements',
pinnedContainer: '#element_holder',
start: '550%',
end: "+=2000",
scrub: 0.5,
pin: '#elements',
pinType: "fixed",
markers: true,
id: 'elements'
}
});




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
