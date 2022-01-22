Webcam.set({
    width: 310,
    height: 315,
    image_format: 'png',
    png_quality: 100,
});
Webcam.attach("#webcam");
function captureimg(){
    Webcam.snap(function(image){
        document.getElementById("captureimg").innerHTML = "<img id='pic' src=" + image +">";
    });
}
console.log("ml5 version",ml5.version);
AIml = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BYiNzbrOm/model.json", modelloaded);
function modelloaded(){
    console.log("Model is Loaded!!");
}
function TTOS(){
    store_api = window.speechSynthesis;
    speakdata1 = "The first Prediction is" + prediction1;
    speakdata2 = "The second Prediction is" +prediction2;
    Utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    store_api.speak(Utterthis);
}
function check(){
    emotion = document.getElementById("pic");
    AIml.classify(emotion,gotresult);
}
function gotresult(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("prediction1").innerHTML = results[0].label;
        document.getElementById("prediction2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        TTOS();
        if (results[0].label == "Happy"){
            document.getElementById("emoji1").innerHTML = "&#128522;";
        }
        if (results[0].label == "Sad"){
            document.getElementById("emoji1").innerHTML = "&#128532;";
        }
        if (results[0].label == "Supprised"){
            document.getElementById("emoji1").innerHTML = "&#128558;";
        }
        if (results[0].label == "Angry"){
            document.getElementById("emoji1").innerHTML = "&#128545;";
        }
        if (results[1].label == "Happy"){
            document.getElementById("emoji2").innerHTML = "&#128522;";
        }
        if (results[1].label == "Sad"){
            document.getElementById("emoji2").innerHTML = "&#128532;";
        }
        if (results[1].label == "Supprised"){
            document.getElementById("emoji2").innerHTML = "&#128558;";
        }
        if (results[1].label == "Angry"){
            document.getElementById("emoji2").innerHTML = "&#128545;";
        }
    }
}