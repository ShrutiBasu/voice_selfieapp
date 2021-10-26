var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        speak();
    }
}

camera = document.getElementById("camera");
function speak() {
    var syndh = window.speechSynthesis;
    var speekdata = "taking your selfie in 5 seconds";
    var utter = new SpeechSynthesisUtterance(speekdata);
    syndh.speak(utter);
    Webcam.attach(camera);
    setTimeout(function () {
        take_selfie();
        save();
    }, 5000);
}
Webcam.set({ width: 360, height: 250, image_format: 'jpeg', jpeg_quality: 90 });

function take_selfie() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + img + '"/>';
    })
}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_image").src;
    link.href=img;
    link.click();
}