var fadeover = document.getElementById('fadeover');
var hotobject = variable_text.text;
var hotobjectimages = variable_text.images;

const lifta = 730;
const liftb = 860;
const liftc = 1150;

const shinea = 180;
const shineb = 220;
const shinec = 305;

const shinelefta = 7;
const shineleftb = 4;
const shineleftc = 8;

var scrollbuildingdistance = 0;

if (window.innerWidth > 1366) {
scrollbuildingdistance = 1700;
} else if ((window.innerWidth > 991) && (window.innerWidth < 1366)) {
scrollbuildingdistance = 1200;
} else if (window.innerWidth < 991) {
scrollbuildingdistance = 800;
} else {
scrollbuildingdistance = 1700;

}




var jamescalled = false;
const james_zone = document.getElementById('james_zone');
const james_side = document.getElementById('james_side');
const james_side_text = document.getElementById('james_side_text');
    var jamestextchanger = document.getElementById('jamesballoon');

const rightsidebuttons = document.getElementById('rightsidebuttons');
const main_intro_text_holder = document.getElementById('main_intro_text_holder');

const xray_conto = document.getElementById('xray_conto');
const xray_wellness = document.getElementById('xray_wellness');
const xray_financial = document.getElementById('xray_financial');

var xray_node_a = document.getElementById('xray_node_a');
var xray_node_b = document.getElementById('xray_node_b');
var xray_node_c = document.getElementById('xray_node_c');

var image_element_1 = document.getElementById('image_element_1');
var image_element_2 = document.getElementById('image_element_2');
var image_element_3 = document.getElementById('image_element_3');

var main_side_menu = document.getElementById('main_side_menu');

var mid_exclaim = document.getElementById('mid_exclaim');

var machines_bubble_a = document.getElementById('machines_bubble_a');
var machines_bubble_b = document.getElementById('machines_bubble_b');
var machines_bubble_c = document.getElementById('machines_bubble_c');

var overipad_text = document.getElementById('overipad_text');

var shineo = document.getElementById('shine');

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
        jamestextchanger.innerHTML = "This is the text for the map section!";
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
        clearAllPainBubbles();
            hideAllZoneButtons();
    hideRightSideButtonsCheck();
    rightsidebuttons.classList.remove('hidden_rightside_buttons');
    main_intro_text_holder.classList.remove('active_stuff');
    gsap.to(".rightsidebuttons", {opacity:1})
    gsap.to(".shine", { opacity: 0, duration: 0.2});
    gsap.to(window, {duration: 1.5, scrollTo: 0});
    }


    if(whereto==='b'){
        clearSkeletonText();
        hideRightSideButtonsCheck();
        clearAllPainBubbles();
        gsap.to(window, {duration: 1.2, scrollTo: 2500});
        setTimeout(function(){ 
            gotoSkeletonZone(whattoshow)
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


function clearAllPainBubbles(){
    xray_conto.classList.remove('showzone');
}

function gotoMachines(){
    xray_conto.classList.remove('showzone');
    leaveJamesa();
    gsap.to(window, {duration: 2, scrollTo: '#betweenmessage'});
    setTimeout(function(){ 
         gsap.to(window, {duration: 2, scrollTo: '#machines'});

    }, 5000);
}

function gotoIpad(){
    gsap.to(window, {duration: 3.5, scrollTo: '#triggerlines'});
}

function getAllText(takesinwhich){
    var choice_texto = document.getElementById('choice_texto');
    choice_texto.innerHTML = hotobject.main_intro_text[takesinwhich];

    xray_node_a.innerHTML = hotobject.xray_nodes_a[takesinwhich];
    xray_node_b.innerHTML = hotobject.xray_nodes_b[takesinwhich];
    xray_node_c.innerHTML = hotobject.xray_nodes_c[takesinwhich];
    mid_exclaim.innerHTML = hotobject.mid_exclaim[takesinwhich];

    image_element_1.src = hotobjectimages.image_machines_a[takesinwhich];
    image_element_2.src = hotobjectimages.image_machines_b[takesinwhich];
    image_element_3.src = hotobjectimages.image_machines_c[takesinwhich];

        machines_bubble_a.innerHTML = hotobject.machines_bubble_a[takesinwhich];
    machines_bubble_b.innerHTML = hotobject.machines_bubble_b[takesinwhich];
    machines_bubble_c.innerHTML = hotobject.machines_bubble_c[takesinwhich];
overipad_text.innerHTML = hotobject.overipad_text[takesinwhich];

}


function getJamesText(takesinwhich){
    jamestextchanger.innerHTML = hotobject.jamestextchanger[takesinwhich];
    james_side_text.innerHTML = hotobject.jamestextskeletonzone[takesinwhich];
}

function hideAllZoneButtons(){
    var allZoneButton = document.getElementsByClassName('zone_button');
    for (var i = 0; i < allZoneButton.length; i++) {
        allZoneButton[i].style.display = 'none';
    }
}

function hideRightSideButtonsCheck(){
    var rightSideCHeckBoxes = document.getElementsByClassName('mainchecko');
    for (var i = 0; i < rightSideCHeckBoxes.length; i++) {
        rightSideCHeckBoxes[i].classList.remove('active');
    }
}

function showShine(){
shineo.style.opacity = 1;
}

function resetStartStuff(){
    hideAllZoneButtons();
    hideRightSideButtonsCheck();
    rightsidebuttons.classList.remove('hidden_rightside_buttons');
    main_intro_text_holder.classList.remove('active_stuff');
    gsap.to(".shine", { opacity: 0, duration: 0.2});
    window.scrollTo(0, 0);
}


function gotoSkeletonAnimation(whichlift, whichshine, whichshineleft, whatroute, targo){

    var buttonname = document.getElementById('zone_button_'+whatroute);
    gsap.to(window, {duration: 2, scrollTo: scrollbuildingdistance});
    gsap.to(".shine", { opacity: 0, duration: 0.2});
    gsap.to(".shine", { yPercent: whichshine, xPercent: whichshineleft});
    targo.classList.add('active');
    main_side_menu.classList.remove('disabler');

    setTimeout(function(){ 
        gsap.to(".lift", { yPercent: whichlift, duration: 1, })
        gsap.to("#beams", {xPercent: 10, duration: 1 });
        gsap.to(".shine", { opacity: 0, duration: 0.5, });
    }, 800);

    setTimeout(function(){ 
        gsap.to(".shine", {  opacity: 1, duration: 1.5, });
        //showShine();
        main_intro_text_holder.classList.add('active_stuff');
        rightsidebuttons.classList.add('hidden_rightside_buttons');
    }, 1200); 

    setTimeout(function(){ 
        getAllText(whatroute);
        buttonname.style.display = 'block';
    }, 2000);

// if (window.innerWidth < 1366) {
//     setTimeout(function(){ 
//         gsap.to(".shine", {  opacity: 1, duration: 1.5, });
//         //showShine();
//         main_intro_text_holder.classList.add('active_stuff');
//         rightsidebuttons.classList.add('hidden_rightside_buttons');
//     }, 1000); 
// } else{
//     setTimeout(function(){ 
//         //showShine();
//         main_intro_text_holder.classList.add('active_stuff');
//         rightsidebuttons.classList.add('hidden_rightside_buttons');
//     }, 1000); 
// }


// gsap.to(window, {duration: 2, scrollTo: 1800});
}

function alerter(){
    alert('I happened');
}

function clearSkeletonText(){
    xray_conto.classList.remove('showzone');
}

function showSkeletonStuff(){
    xray_conto.classList.add('showzone');
}


//maintravelfunction
function gotoSkeletonZone(whattoshow){
    gsap.to(window, {duration: 1.2, scrollTo: 2400});
    main_intro_text_holder.classList.remove('active_stuff');
    getJamesText(whattoshow);

    if(whattoshow==='sustainability'){
        setTimeout(function(){ 
            showSkeletonStuff(); 
        }, 1400);
    }

    if(whattoshow==='wellness'){
        setTimeout(function(){ 
            showSkeletonStuff(); 
        }, 1400);
    }

    if(whattoshow==='financial'){
        setTimeout(function(){ 
            showSkeletonStuff(); 
        }, 1400);
    }

}




var mainScrollAnimation = function(){
    ScrollTrigger.saveStyles(".mobile, .desktop");
/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
    ScrollTrigger.matchMedia({
        "(min-width: 1366px)": function() {

//start desktop
//start desktop
//start desktop


            const main_building = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#mainbuilding",
                    start: 800, 
// end: "+=" + ((window.innerHeight)*3),
                    end: 5000,
                    pin: "#mainbuilding",
                    scrub: 0.5,
//markers: true,
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
onEnterBack:  () => { leaveJamesa();gotoSection('a');},
//markers: true,
// onLeave: finished,
                }
            });
// the_lift



            const overbuilding_start = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: '#mainbuilding',
                    start: 1700,
                    end: 2200,
                    scrub: true,
                    delay: 0.25,
//markers: true,
                    id:'marker 1',
                    onEnter:  () => { callJamesa(); hideRightSideButtonsCheck(); },
                    onEnterBack:  () => { callJamesa(); hideRightSideButtonsCheck(); },
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
                    start: 'top 0%',
                    end: "+=100%",
                    pin: "#machines",
                    scrub: false,
// delay: 0.75,
markers: true,
                    id:'machines',
                    onEnter: leaveJamesa,
                }
            });
            machines
                        .to('.overcream',{autoAlpha: 1, duration: 0.2})
            .to("#xraybuilding", {opacity:0, duration: 1.5})
            .to(".showonmachines", {opacity: 1}, 0.25)
            .to(".goahead", {opacity:1})



            const machinelines = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#ipad",
                    start: 'bottom -30%',
                    end: "+=600%",
                    pin: "#machines",
                    scrub: true,
//markers: true,
                    id:'machines_2',
                    onEnter: leaveJamesa,
                    onEnterBack: leaveJamesa,
                }
            });
            machinelines
            .to('#contento', { backgroundColor: '#ffffff'})
            .to('#polyline_a', { strokeDashoffset: 0},1)
            .to('#polyline_b', { strokeDashoffset: 0},1.5)
            .to('#polyline_c', { strokeDashoffset: 0},1.75)
            .to('.leaf_a', {opacity: 1, xPercent: -30},2)
            .to('.leaf_b', {opacity: 1, xPercent: -15},2.25)
            .to('.leaf_a', {opacity: 0, xPercent: 0},4)
            .to('.leaf_b', {opacity: 0, xPercent: 0},4.15)
            .to('.canvas_a', { opacity: 0, duration: 1},4.2)
            .to('.canvas_b', { opacity: 0, duration: 1},4.3)
            .to('.canvas_c', { opacity: 0, duration: 1},4.4)
            .to('.ipad', {scale: 1.05,duration: 1},4.85)
            .to('.overipadtext', {opacity: 1, yPercent: -1, duration: 1}, 5)
            .to('.talking_head_left', { opacity: 1, yPercent: 10},6)
            .to('.talking_head_right', { opacity: 1, yPercent: 10},6.75)
            .to('.talking_speech_left', { opacity: 1, yPercent: -3,}, 7)
            .to('.talking_speech_right', { opacity: 1, yPercent: -3,}, 8)
            .to('.talking_speech_left', { opacity: 0, yPercent: 3,}, 9)
            .to('.talking_speech_right', { opacity: 0, yPercent: 3,}, 10)
            .to('.talking_speech_left_b', { opacity: 1, yPercent: -3,}, 11)
            .to('.talking_speech_right_b', { opacity: 1, yPercent: -3,}, 12)
            .to('.talking_speech_left_b', { opacity: 0, yPercent: 3,}, 13)
            .to('.talking_speech_right_b', { opacity: 0, yPercent: 3,}, 14)
            .to('.ipad', {scale: 0.95}, 15);




            const simplemap = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#simplemap",
                    start: '+=0%',
                    end: "+=200%",
                    pin: "#simplemap",
                    scrub: true,
                    delay: 0.25,
//markers: true,
                    id:'simplemap',
                    onEnter: callJamesMap,
                    onEnterBack: callJamesMap,
                    onLeave: leaveJamesa,
                }
            });
            simplemap
            .to('#simplemap_text', { opacity: 1, duration: 0.5 })
            .to('.map_holder', { opacity: 0, duration: 1.2 })
            ;



            const usp_section = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#usp_section",
                    start: '+=0%',
                    end: "+=100%",
                    pin: "#usp_section",
                    scrub: true,
//markers: true,
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


            const testimonial_section = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#testimonial_section",
                    start: '+=0%',
                    end: "+=100%",
                    pin: "#testimonial_section",
                    scrub: true,
//markers: true,
                    id:'testimonial_section',

                }
            });
            testimonial_section
            .to('.testimonial_person', { opacity: 1, xPercent: -10, duration: 0.5 },0.2)
            .to('.testimonial_speech', { opacity: 1, xPercent: -10, duration: 0.65 },0.5)
            ;





            const staff_section = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#staff_section",
                    start: '+=0%',
                    end: "+=100%",
                    pin: "#staff_section",
                    delay: 0.15,
                    scrub: true,
//markers: true,
                    id:'staff_section',
                    onEnter: leaveJamesa,
                    onEnterBack: leaveJamesa,
                }
            });
            staff_section
            .to('.staff_person_a', { opacity: 1, xPercent: -15, yPercent: 15})
            .to('.staff_person_b', { opacity: 1, xPercent: 15, yPercent: 25})
            .to('.staff_person_c', { opacity: 1, xPercent: 15, yPercent: 40})
            .to('.staff_person_d', { opacity: 1, xPercent: 5, yPercent: -10})
            .to('.staff_person_e', { opacity: 1, xPercent: 25, yPercent: -15})
            ;




//end desktop
//end desktop
//end desktop
        }, 



        "(max-width: 1365px)": function() {
//start mobile
//start mobile
//start mobile
// alert('mobile');
            const main_building = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#mainbuilding",
                    start: 800, 
// end: "+=" + ((window.innerHeight)*3),
                    end: 3000,
                    pin: "#mainbuilding",
                    pinType: "fixed",
                    scrub: 0.5,
//markers: true,
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
onEnterBack:  () => { leaveJamesa();gotoSection('a');},
//markers: true,
// onLeave: finished,
                }
            });
// the_lift



            const overbuilding_start = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: '#mainbuilding',
                    start: 1700,
                    end: 2200,
                    scrub: true,
                    delay: 0.25,
                    //markers: true,
                    id:'marker 1',
                    onEnter:  () => { callJamesa(); hideRightSideButtonsCheck(); },
                    onEnterBack:  () => { callJamesa(); hideRightSideButtonsCheck(); },
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
                    start: 'top 0%',
                    end: "+=100%",
                    pin: "#machines",
                    scrub: true,
                    delay: 0.25,
//markers: true,
                    id:'machines',
                    onEnter: leaveJamesa,
                }
            });
            machines
            .to("#xraybuilding", {opacity:0, duration: 1.5})
            .to('#contento', { backgroundColor: '#052f3f', duration: 1.8})
            .to(".showonmachines", {opacity: 1}, 0.25)
            .to('.overcream',{autoAlpha: 1, duration: 1})
            .to('.ipad', {scale: 1.25})
            .to('#polyline_a', { strokeDashoffset: 0})
            .to('#polyline_b', { strokeDashoffset: 0})
            .to('#polyline_c', { strokeDashoffset: 0})



            const machinelines = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#ipad",
                    start: 'bottom -30%',
                    end: "+=600%",
                    pin: "#machines",
                    scrub: true,
//markers: true,
                    id:'machines_2',
                    onEnter: leaveJamesa,
                    onEnterBack: leaveJamesa,
                }
            });
            machinelines
// .to('#ipad', { backgroundColor: '#fcfcfa', duration: 1.8})
           .to('#contento', { backgroundColor: '#ffffff'})
            .to('.leaf_a', {opacity: 1, xPercent: -30})
            .to('.leaf_b', {opacity: 1, xPercent: -15})
            .to('.leaf_a', {opacity: 0, xPercent: 0})
            .to('.leaf_b', {opacity: 0, xPercent: 0})
            .to('.canvas_a', { opacity: 0, duration: 1})
            .to('.canvas_b', { opacity: 0, duration: 1})
            .to('.canvas_c', { opacity: 0, duration: 1})
            .to('.ipad', {scale: 1.05})
            .to('#dummypadder', {yPercent: 10, duration: 1},1)
            .to('#dummypadder', {yPercent: 10, duration: 1},1)
            .to('.talking_head_left', { opacity: 1, yPercent: 10},3)
            .to('.talking_head_right', { opacity: 1, yPercent: 10},3.75)
            .to('.talking_speech_left', { opacity: 1, yPercent: -3,}, 4)
            .to('.talking_speech_right', { opacity: 1, yPercent: -3,}, 5)
            .to('.talking_speech_left', { opacity: 0, yPercent: 3,}, 7)
            .to('.talking_speech_right', { opacity: 0, yPercent: 3,}, 8)
            .to('.talking_speech_left_b', { opacity: 1, yPercent: -3,}, 9)
            .to('.talking_speech_right_b', { opacity: 1, yPercent: -3,}, 10)
            .to('.talking_speech_left_b', { opacity: 0, yPercent: 3,}, 11)
            .to('.talking_speech_right_b', { opacity: 0, yPercent: 3,}, 12)
            .to('.ipad', {scale: 0.95}, 13);




            const simplemap = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#simplemap",
                    start: '+=0%',
                    end: "+=200%",
                    pin: "#simplemap",
                    scrub: true,
                    delay: 0.25,
//markers: true,
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
                    end: "+=100%",
                    pin: "#usp_section",
                    scrub: true,
//markers: true,
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


            const testimonial_section = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#testimonial_section",
                    start: '+=0%',
                    end: "+=100%",
                    pin: "#testimonial_section",
                    scrub: true,
//markers: true,
                    id:'testimonial_section',

                }
            });
            testimonial_section
            .to('.testimonial_person', { opacity: 1, xPercent: -10, duration: 0.5 },0.2)
            .to('.testimonial_speech', { opacity: 1, xPercent: -10, duration: 0.65 },0.5)
            ;





            const staff_section = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#staff_section",
                    start: '+=0%',
                    end: "+=100%",
                    pin: "#staff_section",
                    delay: 0.15,
                    scrub: true,
//markers: true,
                    id:'staff_section',
                    onEnter: leaveJamesa,
                    onEnterBack: leaveJamesa,
                }
            });
            staff_section
            .to('.staff_person_a', { opacity: 1, xPercent: -15, yPercent: 15})
            .to('.staff_person_b', { opacity: 1, xPercent: 15, yPercent: 25})
            .to('.staff_person_c', { opacity: 1, xPercent: 15, yPercent: 40})
            .to('.staff_person_d', { opacity: 1, xPercent: 5, yPercent: -10})
            .to('.staff_person_e', { opacity: 1, xPercent: 25, yPercent: -15})
            ;



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



function resetEverything(){
    setTimeout(function(){ 
        fadeover.classList.add('hidden');
    }, 1500);
}

//other functions
document.addEventListener("DOMContentLoaded", function() {
      window.scrollTo(0, 0);
    mainScrollAnimation();

resetEverything();

});

window.onbeforeunload = function () {
    fadeover.classList.remove('hidden');
  window.scrollTo(0, 0);
}


// if (history.scrollRestoration) {
//     history.scrollRestoration = 'manual';
// } else {
//     window.onbeforeunload = function () {
//         window.scrollTo(0, 0);
//     }
// }
