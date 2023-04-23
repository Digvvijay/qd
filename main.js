function setup()
{
    cv=createCanvas(400,400);
    cv.center();
    background("white");
    cv.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

function preload()
{
    Classifier=ml5.imageClassifier('Doodlenet');
}

function draw()
{
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function classifyCanvas()
{
    Classifier.classify(canvas,gotResult);
}

var score=0;
var time=0;
var stbd=Math.floor((Math.random()*array_1.length)+1);
label=results[0].label;
confidence=Math.round(results[0].confidence*100);

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        if(condition){
            time++
            }
        
        console.log(results);
        document.getElementById("label").innerHTML='Your Sketch: '+label;
        document.getElementById("confidence").innerHTML='confidence: '+confidence;
        utterthis=new SpeechSynthesisUtterance("this looks like " + results[0].label);
        synth.speak(utterthis);    
    }
}