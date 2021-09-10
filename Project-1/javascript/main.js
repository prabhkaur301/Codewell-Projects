var hamburger=document.querySelector(".hamburger i");
hamburger.addEventListener("click",function(){
    document.querySelector(".navlinks").classList.toggle("on");
    hamburger.classList.toggle("fa-times");

})