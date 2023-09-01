let submitButton = document.querySelector(".submit");
let inputText = document.querySelector(".input");
let outputText = document.querySelector(".outputText");

function getRandom(){
    return Math.floor(Math.random()*2)
}

function randomCapitalization(str){
    let output = "";
    let letters = str.toLowerCase().split("")
    letters.forEach(letter=>{
        if(typeof(letter) != "number" && letter != " "){
            if(getRandom() == 1){
                output += letter.toUpperCase();
            }
            else{
                output += letter;
            }
        }
        else{
            output += letter;
        }
    })

    outputText.innerText = output;
}

submitButton.addEventListener("click", ()=>{
    if(inputText.value != ""){
        randomCapitalization(inputText.value);
    }
    else{
        window.alert("Enter a sentence")
    }
})