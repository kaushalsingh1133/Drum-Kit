for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }
}
// this function will work only when we click any key which we have used in it(k,a,u,s,h,o,l)
document.addEventListener("keypress",function(){
    makeSound(event.key);
    buttonAnimation(event.key);
});
// this function will play sound of the key
function makeSound(key){
    switch(key){
            case "k":
                var a1 = new Audio("sounds/tom-1.mp3");
                a1.play();
                break
            case "a":
                var a1 = new Audio("sounds/tom-2.mp3");
                a1.play();
                break;
             case "u":
                var a1 = new Audio("sounds/tom-3.mp3");
                a1.play();
                break;
            case "s":
                var a1 = new Audio("sounds/tom-4.mp3");
                a1.play();
                break;
            case "h":
                var a1 = new Audio("sounds/snare.mp3");
                a1.play();
                break;
            case "o":
                var a1 = new Audio("sounds/crash.mp3");
                a1.play();
                break;
            case "l":
                var a1 = new Audio("sounds/kick-bass.mp3");
                a1.play();
                break;
            default : break;
        }
}
// this will work when we click the key
function buttonAnimation(key){
    var active = document.querySelector("."+key);
    // after click this will apply 'pressed' class properties
     active.classList.add("pressed");
    // after 100ms this will remove 'pressed' class properties
    setTimeout(() => {
         active.classList.remove("pressed");
     }, 100);
}