var numberOfButtonClick = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtonClick; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (buttonInner) {

        var buttonInner = this.innerHTML;
        musicTime(buttonInner);
        buttonAnimation(buttonInner);
    });
}

document.addEventListener("keydown", function (event) {
    musicTime(event.key)
    buttonAnimation(event.key)
});

function musicTime(stick) {

    switch (stick) {
        case "w": var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a": var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s": var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d": var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j': var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k": var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l": var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(buttonInner);
            break;
    }

}

function buttonAnimation(recentKey) {

    var buttonAnim = document.querySelector(`.${recentKey}`);
    buttonAnim.classList.add("pressed");
    setTimeout(function () {
        buttonAnim.classList.remove("pressed");
    }, 100);
}

























/*document.querySelectorAll(".drum")[0].addEventListener("click",function (){alert(" i got clicked");});
document.querySelectorAll(".drum")[1].addEventListener("click",function () {alert("i got clicked");});
document.querySelectorAll(".drum")[2].addEventListener("click",function (){ alert ("i got clicked");});
document.querySelectorAll(".drum")[3].addEventListener("click",function(){ alert("i got clicked");});
document.querySelectorAll(".drum")[4].addEventListener("click",function(){alert ("i goy clicked");});
document.querySelectorAll(".drum")[5].addEventListener("clicked",function(){alert("i got clicked");}))*/
