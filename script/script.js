$(function () {

 /* =============================
    STICKY HEADER + ACTIVE MENU
 ==============================*/

 const header = $(".header-area");
 const navLinks = $(".header ul li a");
 const sections = $("section");


 $(window).on("scroll", function () {

     let scroll = $(this).scrollTop();

     // Sticky Header
     header.toggleClass("sticky", scroll > 50);

     updateActiveSection(scroll);

 });



 /* =============================
     SMOOTH SCROLL
 ==============================*/

 navLinks.on("click", function (e) {

     e.preventDefault();

     let target = $(this).attr("href");

     let position = target === "#home"
         ? 0
         : $(target).offset().top - 60;

     $("html,body").animate({
         scrollTop: position
     }, 600);


     navLinks.removeClass("active");
     $(this).addClass("active");

 });



 /* =============================
     SCROLL REVEAL
 ==============================*/

 const sr = ScrollReveal({

     distance: "80px",

     duration: 1200,

     delay: 150,

     reset: false

 });


 sr.reveal(".profile-photo,.about-content,.education", {

     origin: "left"

 });


 sr.reveal(".profile-text,.about-skills,.internship", {

     origin: "right"

 });


 sr.reveal(".project-title,.contact-title", {

     origin: "top"

 });


 sr.reveal(".projects,.contact", {

     origin: "bottom"

 });



 /* =============================
     CONTACT FORM
 ==============================*/


 const scriptURL =
 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';


 const form = document.forms["submitToGoogleSheet"];

 const msg = document.getElementById("msg");


 if(form){

 form.addEventListener("submit", e => {

     e.preventDefault();


     msg.innerHTML = "Sending...";


     fetch(scriptURL, {

         method: "POST",

         body: new FormData(form)

     })

     .then(() => {

         msg.innerHTML = "✅ Message Sent";


         setTimeout(() => {

             msg.innerHTML = "";

         },3000);


         form.reset();

     })


     .catch(() => {

         msg.innerHTML="❌ Failed";

     });


 });

 }


});



/* =============================
 ACTIVE SECTION
==============================*/


function updateActiveSection(scroll){


 let sections=$("section");


 sections.each(function(){


     let top=$(this).offset().top-80;

     let height=$(this).outerHeight();

     let id=$(this).attr("id");


     if(scroll>=top && scroll<top+height){

         $(".header ul li a")
         .removeClass("active");


         $(".header ul li a[href='#"+id+"']")
         .addClass("active");

     }


 });


}


