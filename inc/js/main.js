const bodo = document.querySelector('body');
var fadeover = document.getElementById('fadeover');
var globalroute = '';
var hotobject = variable_text.text;
var hotobjectimages = variable_text.images;
var scrollnumber = document.getElementById('scrollnumber');
const lifta = 730;
const liftb = 860;
const liftc = 1150;

const shinea = 180;
const shineb = 220;
const shinec = 305;

const shinelefta = 15;
const shineleftb = 16;
const shineleftc = 16;
let currentsection = 'a'

var scrollbuildingdistance = 0;
var ipaddistance = 0;
var gotoskellyzone = 0;

if (window.innerWidth > 1366) {
    scrollbuildingdistance = 1700;
    gotoskellyzone = 2400;
} else if ((window.innerWidth > 1024) && (window.innerWidth < 1366)) {
    scrollbuildingdistance = 1700;
    gotoskellyzone = 2100;
} else if ((window.innerWidth > 991) && (window.innerWidth < 1024)) {
    scrollbuildingdistance = 1200;
    gotoskellyzone = 2100;
} else if (window.innerWidth < 991) {
    scrollbuildingdistance = 800;
    gotoskellyzone = 2100;
} else {
    scrollbuildingdistance = 1700;
    gotoskellyzone = 2400;

}


if (window.innerHeight > 1200) {
    ipaddistance = '+=600%';
    console.log(ipaddistance + ' : ' + window.innerHeight);
} else {
    ipaddistance = '+=665%';
    console.log(ipaddistance + ' : ' + window.innerHeight);
}







var jamescalled = false;
const james_zone = document.getElementById('james_zone');
const james_side = document.getElementById('james_side');
const james_side_text = document.getElementById('james_side_text');
const jamesloser = document.getElementById('jamesloser');
var jamestextchanger = document.getElementById('jamesballoon');
const rightsidestuff = document.getElementById('rightsidestuff');
const rightsidebuttons = document.getElementById('rightsidebuttons');
const main_intro_text_holder = document.getElementById('main_intro_text_holder');

var building_person_1 = document.getElementById('building_person_1');
var building_person_2 = document.getElementById('building_person_2');
var building_person_3 = document.getElementById('building_person_3');
var building_person_4 = document.getElementById('building_person_4');

const xray_conto = document.getElementById('xray_conto');
const xray_wellness = document.getElementById('xray_wellness');
const xray_financial = document.getElementById('xray_financial');

var xray_node_a = document.getElementById('xray_node_a');
var xray_node_b = document.getElementById('xray_node_b');
var xray_node_c = document.getElementById('xray_node_c');
var xray_node_d = document.getElementById('xray_node_d');
var xray_node_e = document.getElementById('xray_node_e');

var image_element_1 = document.getElementById('image_element_1');
var image_element_2 = document.getElementById('image_element_2');
var image_element_3 = document.getElementById('image_element_3');

var usp_element_1 = document.getElementById('usp_element_1');
var usp_element_2 = document.getElementById('usp_element_2');
var usp_element_3 = document.getElementById('usp_element_3');

var main_side_menu = document.getElementById('main_side_menu');
var choice_texto = document.getElementById('choice_texto');
var rightSideCheckBoxes = document.getElementsByClassName('mainchecko');
var mid_exclaim = document.getElementById('mid_exclaim');

var machines_bubble_a = document.getElementById('machines_bubble_a');
var machines_bubble_b = document.getElementById('machines_bubble_b');
var machines_bubble_c = document.getElementById('machines_bubble_c');

var overipad_text = document.getElementById('overipad_text');
var ipad_speech_a = document.getElementById('ipad_speech_a');
var ipad_speech_b = document.getElementById('ipad_speech_b');
var ipad_speech_c = document.getElementById('ipad_speech_c');
var ipad_speech_d = document.getElementById('ipad_speech_d');
var simplemap_text = document.getElementById('simplemap_text');

var threecta_a = document.getElementById('threecta_a');
var threecta_b = document.getElementById('threecta_b');
var threecta_c = document.getElementById('threecta_c');
var main_testimonial = document.getElementById('main_testimonial');
var testimonial_author = document.getElementById('testimonial_author');
var testimonialimage = document.getElementById('testimonialimage');

var shineo = document.getElementById('shine');


function getAllText(takesinwhich){
    choice_texto.innerHTML = hotobject.main_intro_text[takesinwhich];

    xray_node_a.innerHTML = hotobject.xray_nodes_a[takesinwhich];
    xray_node_b.innerHTML = hotobject.xray_nodes_b[takesinwhich];
    xray_node_c.innerHTML = hotobject.xray_nodes_c[takesinwhich];
    xray_node_d.innerHTML = hotobject.xray_nodes_d[takesinwhich];
    xray_node_e.innerHTML = hotobject.xray_nodes_e[takesinwhich];
    mid_exclaim.innerHTML = hotobject.mid_exclaim[takesinwhich];

    image_element_1.src = hotobjectimages.image_machines_a[takesinwhich];
    image_element_2.src = hotobjectimages.image_machines_b[takesinwhich];
    image_element_3.src = hotobjectimages.image_machines_c[takesinwhich];

building_person_1.style.backgroundImage = "url('"+hotobjectimages.window_person_a[takesinwhich]+"')";
building_person_2.style.backgroundImage = "url('"+hotobjectimages.window_person_b[takesinwhich]+"')";
building_person_3.style.backgroundImage = "url('"+hotobjectimages.window_person_c[takesinwhich]+"')";
building_person_4.style.backgroundImage = "url('"+hotobjectimages.window_person_d[takesinwhich]+"')";

testimonialimage.style.backgroundImage = "url('"+hotobjectimages.testimonial_image[takesinwhich]+"')";
usp_element_1.style.backgroundImage = "url('"+hotobjectimages.usp_element_1[takesinwhich]+"')";
usp_element_2.style.backgroundImage = "url('"+hotobjectimages.usp_element_2[takesinwhich]+"')";
usp_element_3.style.backgroundImage = "url('"+hotobjectimages.usp_element_3[takesinwhich]+"')";

    machines_bubble_a.innerHTML = hotobject.machines_bubble_a[takesinwhich];
    machines_bubble_b.innerHTML = hotobject.machines_bubble_b[takesinwhich];
    machines_bubble_c.innerHTML = hotobject.machines_bubble_c[takesinwhich];
    overipad_text.innerHTML = hotobject.overipad_text[takesinwhich];
    ipad_speech_a.innerHTML = hotobject.ipad_speech_a[takesinwhich];
    ipad_speech_b.innerHTML = hotobject.ipad_speech_b[takesinwhich];
    ipad_speech_c.innerHTML = hotobject.ipad_speech_c[takesinwhich];
    ipad_speech_d.innerHTML = hotobject.ipad_speech_d[takesinwhich];
    simplemap_text.innerHTML = hotobject.simplemap_text[takesinwhich];

    threecta_a.innerHTML = hotobject.threecta_a[takesinwhich];
    threecta_b.innerHTML = hotobject.threecta_b[takesinwhich];
    threecta_c.innerHTML = hotobject.threecta_c[takesinwhich];
    main_testimonial.innerHTML = hotobject.main_testimonial[takesinwhich];
    testimonial_author.innerHTML = hotobject.testimonial_author[takesinwhich];

}




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

function gotoNextId(where, duration){
    gsap.to(window, {duration: duration, scrollTo: where});
}


function callJamesa(){
    james_zone.classList.add('shown');
    jamesloser.classList.add('activejames');
}


function callJamesMap(){
    setTimeout(function(){ 
        james_zone.classList.add('shown');
        jamesloser.classList.add('activejames');
        jamestextchanger.innerHTML = hotobject.jamesemap_intro[globalroute];
        james_side_text.innerHTML = hotobject.jamesemap_maintext[globalroute];
    }, 2000);
}


function leaveJamesa(){
    james_zone.classList.remove('shown');
    jamesloser.classList.remove('activejames');
}

function togglejamesmain(){
    james_zone.classList.toggle('jamesminimised');
    jamesloser.classList.toggle('activejames');
}



function togglejamescontent(){
    if(jamescalled){
        james_side.classList.remove('shown');
        jamescalled=false;
        console.log('jamesuncalled');
    } else {
        james_side.classList.add('shown');
        jamescalled=true;
        console.log('jamescalled');
    } 
}

function toggleSpeech(whichspeech){
    var whichletter = document.getElementById('speech_'+whichspeech);
    whichletter.classList.toggle('speechshown');
}

function activeMenuCircle(whatletter){
    var allcircles = document.getElementsByClassName('innercircle');
    for (var i = 0; i < allcircles.length; i++) {
        allcircles[i].classList.remove('activio');
    }
    document.getElementById('innercircle_'+whatletter).classList.add('activio');
}


function activeMenuCircleEventual(whatletter){
    var allcircles = document.getElementsByClassName('innercircle');
    setTimeout(function(){     
        for (var i = 0; i < allcircles.length; i++) {
            allcircles[i].classList.remove('activio');
        }
        document.getElementById('innercircle_'+whatletter).classList.add('activio');
        hideRightSideButtonsCheck();
    }, 3500);  
}




function declareCurrentSection(declare){
    currentsection = declare;
}




gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function gotoSection(whereto){
    activeMenuCircle(whereto);

    if(whereto==='a'){
        hideRightSideButtonsCheck();
        clearSkeletonText();
        hideAllZoneButtons();
        clearChoice();
        clearAllPainBubbles();
        declareCurrentSection(whereto);
        rightsidebuttons.classList.remove('hidden_rightside_buttons');
        gsap.to(".rightsidebuttons", {opacity:1})
        gsap.to(".shine", { opacity: 0, duration: 0.6});
        gsap.to(window, {duration: 1.5, scrollTo: 0});
        location.reload();
    }

    if(whereto==='b'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        gsap.to(window, {duration: 1.2, scrollTo: 2500});
        setTimeout(function(){ 
            gotoSkeletonZone(whattoshow)
        }, 1400);
    }

    if(whereto==='c'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        gsap.to(window, {duration: 1.2, scrollTo: '#betweenmessage'});
        console.log(currentsection);
    }

    if(whereto==='d'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        gsap.to(window, {duration: 1.75, scrollTo: '#machines_section_navigator'});
    }
    if(whereto==='e'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        if(currentsection === 'd'){
            gsap.to(window, {duration: 1.75, scrollTo: '#triggerlines'});
        } else{
            gsap.to(window, {duration: 1, scrollTo: '#triggerlines'});
        }
        console.log(currentsection);
    }
    if(whereto==='f'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        if((currentsection === 'c')||(currentsection === 'd')||(currentsection === 'e')){
            gsap.to(window, {duration: 1.75, scrollTo: '#simplemap_navigator'});
        } else{
            gsap.to(window, {duration: 1, scrollTo: '#simplemap'});
        }
        console.log(currentsection);
    }
    if(whereto==='g'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        if(currentsection === 'f'){
            gsap.to(window, {duration: 2.5, scrollTo: '#usp_section_navigator'});
        } else{
            gsap.to(window, {duration: 1, scrollTo: '#usp_section'});
        }
        console.log(currentsection);
    }
    if(whereto==='h'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        if(currentsection === 'g'){
            gsap.to(window, {duration: 1.75, scrollTo: '#testimonial_section_navigator'});
        } else{
            gsap.to(window, {duration: 1, scrollTo: '#testimonial_section'});
        }

        console.log(currentsection);
    }
    if(whereto==='i'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        declareCurrentSection('i');activeMenuCircle('i');
        if(currentsection === 'h'){
            gsap.to(window, {duration: 2.5, scrollTo: '#staff_section_menu_navigator'});
        } else{
            gsap.to(window, {duration: 1, scrollTo: '#staff_section'});
        }
        console.log(currentsection);
    }
    if(whereto==='j'){
        hideRightSideButtonsCheck();
        declareCurrentSection(whereto);
        clearSkeletonText();
        clearChoice();
        clearAllPainBubbles();
        hideAllZoneButtons();
        console.log('aaargh');
        declareCurrentSection('j');activeMenuCircleEventual('j');
        gsap.to(window, {duration: 3.5, scrollTo: '#grid_section'});
        console.log(currentsection);
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

    setTimeout(function(){ 
        gsap.to(window, {duration: 2.5, scrollTo: '#betweenmessage'});
        activeMenuCircle('c');
    }, 100);
}

function gotoIpad(){
    gsap.to(window, {duration: 15, scrollTo: '#triggerlines'});
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


function staffHover(whthovernumber){

    var allStaffItems = document.getElementsByClassName('staff_person');
    var targetStaff = document.getElementById('staff_person_'+whthovernumber);

    for (var i = 0; i < allStaffItems.length; i++) {
        allStaffItems[i].style.opacity = '0.2';
    }
    targetStaff.style.opacity = '1';
};



function hideRightSideButtonsCheck(){
// alert('right side');
    main_intro_text_holder.classList.remove('active_stuff');
    for (var i = 0; i < rightSideCheckBoxes.length; i++) {
        rightSideCheckBoxes[i].classList.remove('active');
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

//end main pick route
function pickRoute(whichlift, whichshine, whichshineleft, whatroute, targo){
    globalroute = whatroute;
    bodo.classList.add('routeclass-'+globalroute);
    getAllText(whatroute);
    var buttonname = document.getElementById('zone_button_'+whatroute);



    function task1() {
        return new Promise(function(resolve, reject) {
            console.log("task 1")
            setTimeout(function() {
                var buttonname = document.getElementById('zone_button_'+whatroute);
                targo.classList.add('active');
            }, 50);
        })
    }

    function task2() {
        return new Promise(function(resolve, reject) {
            console.log("task 2")
            setTimeout(function() {
                gsap.to(window, {duration: 1.6,  ease: "power1", scrollTo: scrollbuildingdistance});
                gsap.to(".shine", { opacity: 0, duration: 0.3});
                gsap.to(".shine", { yPercent: whichshine, xPercent: whichshineleft});
                main_side_menu.classList.remove('disabler');
                resolve('done 2');
            }, 400);
        })
    }

    function task3() {
        return new Promise(function(resolve, reject) {
            console.log("task 3")
            setTimeout(function() {
                gsap.to(".lift", { yPercent: whichlift, duration: .4, })
                gsap.to("#beams", {xPercent: 10, duration: .7 });
                // gsap.to(".shine", { opacity: 0, duration: .8, });
                gsap.to(".shine", {  opacity: 1, duration: .3, },2.5);
                resolve('done 3');
            }, 900);
        })
    }

    function task4() {
        return new Promise(function(resolve, reject) {
            console.log("task 4")
            setTimeout(function() {
                main_intro_text_holder.classList.add('active_stuff');
                rightsidebuttons.classList.add('hidden_rightside_buttons');
                buttonname.style.display = 'block';
                resolve('done 4');
                declareCurrentSection('a');activeMenuCircle('a');
            }, 2500);
        })
    }


    Promise.all([task1(), task2(), task3(), task4()]).then(function(values) {
        console.log(values);
        cleanUrl();
    });

//end main pick route




//end


}





function alerter(){
    alert('I happened');
}

function clearChoice(){
    main_intro_text_holder.classList.remove('active_stuff');
}

function clearSkeletonText(){
    xray_conto.classList.remove('showzone');
}

function showSkeletonStuff(){
    setTimeout(function(){ 
        xray_conto.classList.add('showzone');
    }, 800);
}


//maintravelfunction
function gotoSkeletonZone(whattoshow){
    gsap.to(window, {duration: 1.2, scrollTo: gotoskellyzone});
    clearChoice();
    getJamesText(whattoshow);
    rightsidestuff.style.display= 'none';
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
                    scrub: 0.25,
                    onEnterBack:  () => { leaveJamesa();activeMenuCircle('a');
                    declareCurrentSection('a');},
//markers: true,
                }
            });



            const the_lift = gsap.timeline({
                ease: "elastic.out(1,0.3)",
                scrollTrigger: {
                    trigger: '#mainbuilding',
                    start: 200,
                    end: '30%',
                    scrub: 0.5,
                    delay: 0.25,
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
// delay: 0.25,
//markers: true,
                    id:'marker 1',
                    onEnter:  () => { callJamesa(); hideRightSideButtonsCheck(); showSkeletonStuff();declareCurrentSection('b');activeMenuCircle('b');},
                    onEnterBack:  () => { callJamesa(); hideRightSideButtonsCheck(); showSkeletonStuff();declareCurrentSection('b');activeMenuCircle('b');},
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
            .to('.overcream',{opacity: 0, duration: 0.2})


            const machines = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#machines",
                    start: '#machines',
                    end: "+=100%",
                    pin: "#machines",
                    scrub: true,
// delay: 0.75,
// markers: true,
                    id:'machines',
                    onEnter:  () => { leaveJamesa(); declareCurrentSection('d');activeMenuCircle('d');},
                    onEnterBack:  () => { leaveJamesa(); declareCurrentSection('d');activeMenuCircle('d');},
                }
            });
            machines
            .to('.element_holder', {opacity:1, duration: 0.5})
            .to('.overcream',{opacity: 1, duration: 0.2})
            .to("#xraybuilding", {opacity:0, duration: 1.5})
            .to(".showonmachines", {opacity: 1}, 0.25)
            .to('.ipad', {scale: 1.2,yPercent: 40,})
            .to(".goahead", {opacity:1})



            const machinelines = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#ipad",
                    start: 'bottom -30%',
                    end: ipaddistance,
                    pin: "#machines",
                    scrub: true,
//markers: true,
                    id:'machines_2',
                    onEnter:  () => { leaveJamesa(); declareCurrentSection('e');activeMenuCircle('e');},
                    onEnterBack:  () => { leaveJamesa(); declareCurrentSection('e');activeMenuCircle('e');},
                }
            });
            machinelines
            .to('#contento', { backgroundColor: '#fcfcfa'})
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
            .to('.ipad', {yPercent: 45, duration: 1},4.85)
            .to('.overipadtext', {opacity: 1, yPercent: 40, duration: 1}, 5)
            .to('.talking_head_left', { opacity: 1, yPercent: 10},6)
            .to('.talking_head_right', { opacity: 1, yPercent: 10},6.75)
            .to('.talking_speech_left', { opacity: 1, yPercent: -3,}, 7)
            .to('.talking_speech_right', { opacity: 1, yPercent: -3,}, 8)
            .to('.talking_speech_left', { opacity: 0, yPercent: 3,}, 9)
            .to('.talking_speech_right', { opacity: 0, yPercent: 3,}, 10)
            .to('.talking_speech_left_b', { opacity: 1, yPercent: -3,}, 10.5)
            .to('.talking_speech_right_b', { opacity: 1, yPercent: -3,}, 11)
            .to('.talking_speech_left_b', { opacity: 0, yPercent: 3,}, 11.5)
            .to('.talking_speech_right_b', { opacity: 0, yPercent: 3,}, 11.75)
            .to('#nextstepafteripad', {opacity: 1, yPercent: 10})
            .to('.ipad', {scale: 0.95, yPercent: 55});




            const simplemap = gsap.timeline({
                ease: "power1",
                scrollTrigger: {
                    trigger: "#simplemap",
                    start: '+=0%',
                    end: "+=200%",
                    pin: "#simplemap",
                    scrub: true,
// delay: 0.25,
//markers: true,
                    id:'simplemap',
                    onLeave: leaveJamesa,
                    onEnter:  () => { callJamesMap(); declareCurrentSection('f');activeMenuCircle('f');},
                    onEnterBack:  () => { callJamesMap(); declareCurrentSection('f');activeMenuCircle('f');},
                }
            });
            simplemap
            .to('#simplemap_text', { opacity: 1, yPercent: -20, duration: 0.5 })
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
                    onEnter:  () => { leaveJamesa(); declareCurrentSection('g');activeMenuCircle('g');},
                    onEnterBack:  () => { leaveJamesa(); declareCurrentSection('g');activeMenuCircle('g');},

                }
            });
            usp_section
            .to('#simplemap_text', { opacity: 0, yPercent: 20, duration: 0.5 })
            .to('.usp_block_a', { opacity: 1, xPercent: 150, duration: 0.5 },0.2)
            .to('.usp_block_b', { opacity: 1, yPercent: -150, duration: 1 },0.7)
            .to('.usp_block_c', { opacity: 1, xPercent: -150, duration: 1.2 },0.9)
            .to('.getmoreinfo_button', { opacity: 1, yPercent: 10, duration: 1 },1.5)
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
                    onEnter:  () => { leaveJamesa(); declareCurrentSection('h');activeMenuCircle('h');},
                    onEnterBack:  () => { leaveJamesa(); declareCurrentSection('h');activeMenuCircle('h');},
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
                    start: '0%',
                    end: "+=100%",
                    pin: "#staff_section",
                    scrub: true,
//markers: true,
                    id:'staff_section',
                    onEnter:  () => { leaveJamesa(); declareCurrentSection('i');activeMenuCircle('i');},
                    onEnterBack:  () => { leaveJamesa(); declareCurrentSection('i');activeMenuCircle('i');},
                }
            });
            staff_section
            .to('.staff_person_1', { opacity: 0.5})
            .to('.staff_person_2', { opacity: 0.5})
            .to('.staff_person_3', { opacity: 0.5})
            .to('.staff_person_4', { opacity: 0.5})
            .to('.staff_person_5', { opacity: 0.5})
            .to('.staff_person_6', { opacity: 0.5})
            .to('.staff_person_7', { opacity: 0.5})
            .to('.staff_person_8', { opacity: 0.5})
            .to('.staff_person_9', { opacity: 0.5})
            ;




//end desktop
//end desktop
//end desktop
        }, 



        "(max-width: 1500px)": function() {
//start mobile


//             const main_building = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: "#mainbuilding",
//                     start: 400, 
// // end: "+=" + ((window.innerHeight)*3),
//                     end: 5000,
//                     pin: "#mainbuilding",
//                     scrub: true,
// //markers: true,
//                 }
//             });



//             const the_lift = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: '#mainbuilding',
//                     start: 0,
//                     end: '30%',
//                     scrub: true,
//                     delay: 0.25,
//                     onEnterBack: leaveJamesa,
//                     onEnterBack:  () => { leaveJamesa();gotoSection('a');},
// //markers: true,
// // onLeave: finished,
//                 }
//             });
// // the_lift



//             const overbuilding_start = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: '#mainbuilding',
//                     start: 1700,
//                     end: 2200,
//                     scrub: true,
//                     delay: 0.25,
// //markers: true,
//                     id:'marker 1',
//                     onEnter:  () => { callJamesa(); hideRightSideButtonsCheck(); showSkeletonStuff();},
//                     onEnterBack:  () => { callJamesa(); hideRightSideButtonsCheck(); showSkeletonStuff();},
//                 }
//             });
//             overbuilding_start
//             .to(".rightsidebuttons", {opacity:0})
//             .to(".solarpanels", {opacity:0})
//             .to(".lift", {opacity:0})
//             .to(".shine", {opacity:0})
//             .to("#maincolourbuilding", {opacity:0, duration: 1.5})
//             .to('#contento', { backgroundColor: '#fff8f0'})
//             .to("#xraybuilding", {opacity:1, duration: 1.5})
//             .to('.overcream',{opacity: 0, duration: 0.2})


//             const machines = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: "#machines",
//                     start: 'top 0%',
//                     end: "+=100%",
//                     pin: "#machines",
//                     scrub: true,
// // delay: 0.75,
//                     //markers: true,
//                     id:'machines',
//                     onEnter: leaveJamesa,
//                 }
//             });
//             machines
//             .to('.overcream',{opacity: 1, duration: 0.2})
//             .to("#xraybuilding", {opacity:0, duration: 1.5})
//             .to(".showonmachines", {opacity: 1}, 0.25)
//             .to(".goahead", {opacity:1})



//             const machinelines = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: "#ipad",
//                     start: 'bottom -30%',
//                     end: "+=600%",
//                     pin: "#machines",
//                     scrub: true,
// //markers: true,
//                     id:'machines_2',
//                     onEnter: leaveJamesa,
//                     onEnterBack: leaveJamesa,
//                 }
//             });
//             machinelines
//             .to('#contento', { backgroundColor: '#ffffff'})
//             .to('#polyline_a', { strokeDashoffset: 0},1)
//             .to('#polyline_b', { strokeDashoffset: 0},1.5)
//             .to('#polyline_c', { strokeDashoffset: 0},1.75)
//             .to('.leaf_a', {opacity: 1, xPercent: -30},2)
//             .to('.leaf_b', {opacity: 1, xPercent: -15},2.25)
//             .to('.leaf_a', {opacity: 0, xPercent: 0},4)
//             .to('.leaf_b', {opacity: 0, xPercent: 0},4.15)
//             .to('.canvas_a', { opacity: 0, duration: 1},4.2)
//             .to('.canvas_b', { opacity: 0, duration: 1},4.3)
//             .to('.canvas_c', { opacity: 0, duration: 1},4.4)
//             .to('.ipad', {scale: 1.05,duration: 1},4.85)
//             .to('.overipadtext', {opacity: 1, yPercent: -1, duration: 1}, 5)
//             .to('.talking_head_left', { opacity: 1, yPercent: 10},6)
//             .to('.talking_head_right', { opacity: 1, yPercent: 10},6.75)
//             .to('.talking_speech_left', { opacity: 1, yPercent: -3,}, 7)
//             .to('.talking_speech_right', { opacity: 1, yPercent: -3,}, 8)
//             .to('.talking_speech_left', { opacity: 0, yPercent: 3,}, 9)
//             .to('.talking_speech_right', { opacity: 0, yPercent: 3,}, 10)
//             .to('.talking_speech_left_b', { opacity: 1, yPercent: -3,}, 11)
//             .to('.talking_speech_right_b', { opacity: 1, yPercent: -3,}, 12)
//             .to('.talking_speech_left_b', { opacity: 0, yPercent: 3,}, 13)
//             .to('.talking_speech_right_b', { opacity: 0, yPercent: 3,}, 14)
//             .to('.ipad', {scale: 0.95}, 15);




//             const simplemap = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: "#simplemap",
//                     start: '+=0%',
//                     end: "+=200%",
//                     pin: "#simplemap",
//                     scrub: true,
//                     delay: 0.25,
// //markers: true,
//                     id:'simplemap',
//                     onEnter: callJamesMap,
//                     onEnterBack: callJamesMap,
//                     onLeave: leaveJamesa,
//                 }
//             });
//             simplemap
//             .to('#simplemap_text', { opacity: 1, duration: 0.5 })
//             .to('.map_holder', { opacity: 0, duration: 1.2 })
//             ;



//             const usp_section = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: "#usp_section",
//                     start: '+=0%',
//                     end: "+=100%",
//                     pin: "#usp_section",
//                     scrub: true,
// //markers: true,
//                     id:'usp_section',
//                     onEnter: leaveJamesa,
//                     onEnterBack: leaveJamesa,

//                 }
//             });
//             usp_section
//             .to('.usp_block_a', { opacity: 1, xPercent: 150, duration: 0.5 },0.2)
//             .to('.usp_block_b', { opacity: 1, xPercent: 150, duration: 1 },0.7)
//             .to('.usp_block_c', { opacity: 1, xPercent: 150, duration: 1.2 },0.9)
//             ;


//             const testimonial_section = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: "#testimonial_section",
//                     start: '+=0%',
//                     end: "+=100%",
//                     pin: "#testimonial_section",
//                     scrub: true,
// //markers: true,
//                     id:'testimonial_section',

//                 }
//             });
//             testimonial_section
//             .to('.testimonial_person', { opacity: 1, xPercent: -10, duration: 0.5 },0.2)
//             .to('.testimonial_speech', { opacity: 1, xPercent: -10, duration: 0.65 },0.5)
//             ;





//             const staff_section = gsap.timeline({
//                 ease: "power1",
//                 scrollTrigger: {
//                     trigger: "#staff_section",
//                     start: '+=0%',
//                     end: "+=100%",
//                     pin: "#staff_section",
//                     delay: 0.15,
//                     scrub: true,
// //markers: true,
//                     id:'staff_section',
//                     onEnter: leaveJamesa,
//                     onEnterBack: leaveJamesa,
//                 }
//             });
//             staff_section
//             .to('.staff_person_a', { opacity: 1, xPercent: -15, yPercent: 15})
//             .to('.staff_person_b', { opacity: 1, xPercent: 15, yPercent: 25})
//             .to('.staff_person_c', { opacity: 1, xPercent: 15, yPercent: 40})
//             .to('.staff_person_d', { opacity: 1, xPercent: 5, yPercent: -10})
//             .to('.staff_person_e', { opacity: 1, xPercent: 25, yPercent: -15})
//             ;



// //end mobile
// //end mobile
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


function cleanUrl(){
    window.history.pushState('', '', '/');
}

function resetEverything(){
    setTimeout(function(){ 
        fadeover.classList.add('hidden');
    }, 1000);
}

//doc ready functions
document.addEventListener("DOMContentLoaded", function() {
    leaveJamesa();
    clearAllPainBubbles();
    resetEverything();
    window.scrollTo(0, 0);
    mainScrollAnimation();
});
//before unload function
window.onbeforeunload = function () {
    fadeover.classList.add('hidden');
    leaveJamesa();
// cleanUrl();
    clearAllPainBubbles();
    window.scrollTo(0, 0);
}
//end

//hide scroll on body without overflow:hidden
bodo.addEventListener('wheel', preventScroll, {passive: false});
function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
}
//end
//reload if back button
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();
//end reload if back button