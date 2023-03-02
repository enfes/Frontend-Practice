
var header = document.getElementById("rewards");

window.addEventListener('scroll', function() {
    // if scroll down after 45px (position Y)
    if(window.scrollY>45){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});