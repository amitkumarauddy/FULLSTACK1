function diceRoll(){
    var outcome = Math.floor(Math.random() * 6) + 1;
    return outcome;
}

function main(){
    var outcome1 = diceRoll();
    var outcome2 = diceRoll();
    var randomImageSrc1 = "./images/" + "dice" + outcome1 + ".png";
    var randomImageSrc2 = "./images/" + "dice" + outcome2 + ".png";

    document.querySelector(".img1").setAttribute("src",randomImageSrc1);
    document.querySelector(".img2").setAttribute("src",randomImageSrc2);

    if(outcome1 == outcome2){
        document.querySelector("h1").innerHTML = "DRAW";
    }
    else if(outcome1 > outcome2){
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
}

main();


