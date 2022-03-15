numberOfButtons = document.querySelectorAll(".drum__btn").length;

for (let i = 0; i < numberOfButtons; i++){

document.querySelectorAll("button")[i]
    .addEventListener("click", function(){
        let buttonStyle = this.innerHTML;
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
        let sound1 = new Audio("DrumSounds/clap.wav");
        sound1.play();
        break;
    
        case "s":
        let sound2 = new Audio("DrumSounds/hihat.wav");
        sound2.play();
        break;
    
        case "d":
        let sound3 = new Audio('DrumSounds/kick.wav');
        sound3.play();
        break;
    
        case "f":
        let sound4 = new Audio('DrumSounds/openhat.wav');
        sound4.play();
        break;
    
        case "h":
        let sound5 = new Audio('DrumSounds/ride.wav');
        sound5.play();
        break;
    
        case "j":
        let sound6 = new Audio('DrumSounds/snare.wav');
        sound6.play();
        break;
    
        case "k":
        let sound7 = new Audio('DrumSounds/tink.wav');
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
    let activeButton = document.querySelector("." + currentKey);
        
    activeButton.classList.add("animation_" + currentKey,);
    
    setTimeout(function() {
        activeButton.classList.remove("animation_" + currentKey);
    }, 100);
    }
        