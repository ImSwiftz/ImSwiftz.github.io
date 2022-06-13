var charecter = 
document.getElementById("charecter");
var block = document.getElementById("block");
function jump(){
   if(charecter.classList != "animate"){
    charecter.classList.add("animate");
    }
    setTimeout(function(){
        charecter.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function(){
    var charecterTop = 
    parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
    var blockleft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<150 && blockleft>0 && charecterTop>=300){
        block.style.animation = "none";
        block.style.display = "none";
        alert("U lose")
    }
},10);