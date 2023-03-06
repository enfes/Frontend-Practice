
var header = document.getElementById("nav-two");

window.addEventListener('scroll', function() {
    // if scroll down after 45px (position Y)
    if(window.scrollY > 45){
        header.classList.add("sticky");
    }else{
       header.classList.remove("sticky");
    }
});

 var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       header.classList.remove("sticky");
   } else {
      // upscroll code
      
   }
   lastScrollTop = st;
   if(window.screenTop = 0)
      {
        header.classList.remove("sticky");
      }
      else
      {
      }
});
