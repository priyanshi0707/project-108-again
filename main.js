var dog=0;
var cat=0;
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9kxWXXtKp/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if (error){
        cosole.error(error);
    }else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can Hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    
        if(results[0].label=="barking"){
        dog=dog+1;
           }else if(results[0].label=="meowing"){
               cat=cat+1;
           }
    }
}
