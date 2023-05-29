var menubtn = document.querySelector("#menubtn");
var closebtn = document.querySelector("#closebtn");

menubtn.addEventListener("click"  , function(){
    document.querySelector('header').style.left = 0;
    document.querySelector("#menubtn").style.display = "none";
    document.querySelector("#closebtn").style.display = "initial";
});
closebtn.addEventListener("click"  , function(){
    document.querySelector('header').style.left = "-100%";
    document.querySelector("#menubtn").style.display = "initial";
    document.querySelector("#closebtn").style.display = "none";
});
