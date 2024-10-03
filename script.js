var drums = document.querySelectorAll(".drum");

for(var i = 0;i<drums.length;i++){
    drums[i].addEventListener("click", function(){
        var textInside = this.textContent;
        var instrument;

        switch(textInside){
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
                console.log("textInside");
                return;
        }

        var aud = "./sounds/" + instrument + ".mp3";
        var audio = new Audio(aud);
        audio.play();
    });
}