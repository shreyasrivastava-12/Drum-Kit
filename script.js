var drums = document.querySelectorAll(".drum");

for(var i = 0;i<drums.length;i++){
    drums[i].addEventListener("click", function(){
        var char = this.textContent;
        makeSound(char);
        makeAnimation(char);
    });
}

document.addEventListener("keydown", function(event){
    var char = event.key;
    makeSound(char);
    makeAnimation(char);
});

function makeSound(char){
    var instrument;

    switch(char){
        case "w":
            instrument = "tom-1";
            break;

        case "a":
            instrument = "tom-2";
            break;

        case "s":
            instrument = "tom-3";
            break;

        case "d":
            instrument = "tom-4";
            break;

        case "j":
            instrument = "snare";
            break;

        case "k":
            instrument = "crash";
            break;

        case "l":
            instrument = "kick-bass";
            break;

        default:
            console.log("char");
            return;
    }

    var aud = "./sounds/" + instrument + ".mp3";
    var audio = new Audio(aud);
    audio.play();
}

function makeAnimation(char){

    var activeDrum = document.querySelector("." + char);

    activeDrum.classList.add("pressed");

    setTimeout(function(){
        activeDrum.classList.remove("pressed");} , 100);
}