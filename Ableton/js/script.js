
var header = document.getElementById("nav-two");
/*
window.addEventListener('scroll', function() {
    // if scroll down after 45px (position Y)
    if(window.scrollY >45){
        header.classList.add("sticky");
    }else{
       header.classList.remove("sticky");
    }
});*/
/*
$(window).scroll(function(event){
    if (window.scrollY ){
        // upscroll code
        header.classList.add("sticky");
    } else {
       // downscroll code
       header.classList.remove("sticky");
    }
 });
*/
 var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       header.classList.remove("sticky");
   } else {
      // upscroll code
      header.classList.add("sticky");
   }
   lastScrollTop = st;
});
/*
$(document).ready(function (){
    $(window).scroll(function(){
        var mesafe = $(window).scrollTop();

        if(mesafe > 300) {
            header.classList.add("sticky");
        }
        else{
            header.classList.add("sticky");
        }
    })
})*/