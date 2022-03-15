numberOfButtons = document.querySelectorAll(".drum__btn").length;

for (var i = 0; i < numberOfButtons; i++){

document.querySelectorAll("button")[i]
    .addEventListener("click", function(){
        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress", function(event){
    sound(event.key);
    animation(event.key);
})

function sound(key) {
    switch (key) {
        case "a":
        var sound1 = new Audio("DrumSounds/clap.wav");
        sound1.play();
        break;
    
        case "s":
        var sound2 = new Audio("DrumSounds/hihat.wav");
        sound2.play();
        break;
    
        case "d":
        var sound3 = new Audio('DrumSounds/kick.wav');
        sound3.play();
        break;
    
        case "f":
        var sound4 = new Audio('DrumSounds/openhat.wav');
        sound4.play();
        break;
    
        case "h":
        var sound5 = new Audio('DrumSounds/ride.wav');
        sound5.play();
        break;
    
        case "j":
        var sound6 = new Audio('DrumSounds/snare.wav');
        sound6.play();
        break;
    
        case "k":
        var sound7 = new Audio('DrumSounds/tink.wav');
        sound7.play();
        break;

        case "l":
            var sound7 = new Audio('DrumSounds/tom.wav');
            sound7.play();
            break;
    
        default: console.log(key);
    }
    }

function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
        
    activeButton.classList.add("animation_" + currentKey,);
    
    setTimeout(function() {
        activeButton.classList.remove("animation_" + currentKey);
    }, 100);
    }
        