
/* DARK MODE */

document
.getElementById("mode")
.onclick=function(){

document.body
.classList.toggle("light");

};


/* STICKY */

window.onscroll=function(){

document
.querySelector(".header")
.classList
.toggle("sticky",
window.scrollY>50);

};



/* ANIMATE SKILLS */

window.onload=function(){

let fills=
document
.querySelectorAll(".fill");

fills.forEach(bar=>{

bar.style.width=
bar.classList
.contains("f90")?"90%":
bar.classList
.contains("f85")?"85%":
"80%";

});

};
