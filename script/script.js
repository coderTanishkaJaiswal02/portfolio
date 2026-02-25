
/* DARK MODE */

document
.getElementById("mode")
.onclick=function(){

document.body
.classList.toggle("light");

};



/* LOADER */

window.onload=function(){

gsap.to(".loader",{

opacity:0,

duration:1,

onComplete:function(){

document
.querySelector(".loader")
.style.display="none";

}

});


};



/* CURSOR */

document
.addEventListener("mousemove",e=>{

document
.querySelector(".cursor")
.style.left=e.pageX+"px";

document
.querySelector(".cursor")
.style.top=e.pageY+"px";

});



/* GSAP */

gsap.from(".hero h1",{

y:100,

opacity:0

});


gsap.utils
.toArray("section")
.forEach(sec=>{

gsap.from(sec,{

scrollTrigger:sec,

y:100,

opacity:0

});

});



/* SKILLS */

gsap.to(".f90",{

scrollTrigger:"#skills",

width:"90%"

});


gsap.to(".f85",{

scrollTrigger:"#skills",

width:"85%"

});


gsap.to(".f80",{

scrollTrigger:"#skills",

width:"80%"

});



/* PARTICLES */

particlesJS("particles-js",{

particles:{

number:{value:80},

size:{value:3},

move:{speed:2}

}

});
