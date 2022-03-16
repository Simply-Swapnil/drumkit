var numberOfDrums = document.querySelectorAll(".drum").length;

// For loop to apply event listener to all drums

for (var i = 0; i < numberOfDrums; i++) {

    //To address respective drum click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var whichDrum = this.innerHTML;

        //The innerHTML of the button or .drum is used to identify which drum is clicked.
        makeSound(whichDrum);
        buttonAnimate(whichDrum);

    });
}


//To address respective keypress
document.addEventListener("keydown", function(event){

    //The "event" variable ; refers to the event that triggered the keypress; is created to use methods of keydown i.e identifying the key pressed in this case using event.key
    makeSound(event.key);
    buttonAnimate(event.key);

});




//Creating function to create sound for respective keypress or drumclick both

function makeSound(key) {

    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "f":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        default:
            console.log(key);

    }
}


function buttonAnimate(currentkey) {

    //Instead of switch cases to identify the drum/key this option is easier.
    var activeButton = document.querySelector("." + currentkey);

    //Adding the pressed style or class on click
    activeButton.classList.add("pressed");

        //Removing the pressed style or class after 0.1 sec to create animation effect
    setTimeout(function(){
        activeButton.classList.remove("pressed");
        }, 100);

}
