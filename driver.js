var emotions = ["Happy", "Surprised", "Bad", "Fearful", "Angry", "Disgusted", "Sad"];
var randomInt;
//generate a random number and display that emotion on the screen.
function randomEmotion(){
    randomInt = randomNumber(0, emotions.length)
    let randomEmotion = emotions[randomInt];
    document.getElementById("displayEmotion").innerHTML = randomEmotion;
}

//returns a random int between min (included) and max (excluded)
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}