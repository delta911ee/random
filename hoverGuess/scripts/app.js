import { words } from "../data/words.js"

let lettersContainer = document.querySelector(".letters")
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let secretWordArray = words[Math.floor(Math.random()*words.length)]
let secretWord = secretWordArray[0].toLowerCase()
let hint = secretWordArray[1]
let secretWordLetters = secretWord.split("")
let lives = document.querySelector(".lives")
let lifeCount = 5
let guessBox = document.querySelector(".guess")
let submit = document.querySelector(".submit")
let getHint = document.querySelector(".getHint")


let looseModal = document.querySelector(".loose")
let winModal = document.querySelector(".win")
let playAgain = document.querySelector(".playAgain")
let tryAgain = document.querySelector(".tryAgain")
let correctWord = document.querySelector(".correctWord")

let hintModal = document.querySelector(".hint")
let hintText = document.querySelector(".hintText")
let okayButton = document.querySelector(".okay")

getHint.addEventListener("click", ()=>{
    hintText.innerText = hint
    hintModal.showModal()
})

okayButton.addEventListener("click", ()=>{
    hintModal.close()
})

playAgain.addEventListener("click", ()=>{
    winModal.close()
    location.reload()
})

tryAgain.addEventListener("click", ()=>{
    looseModal.close()
    location.reload()
})

function youWon(){
    winModal.showModal()
}

function youLost(){
    correctWord.innerText = "The word was " + secretWord
    looseModal.showModal()
}

function checkGuess(guess){
    if(guess.toLowerCase() == secretWord){
        youWon()
    }
    else{
        lifeCount--
        lives.innerText = lifeCount
        if(lifeCount == 0){
            youLost()
        }
    }
}

function createLetterBox(letter){
    let box = document.createElement("div")
    box.classList.add("letterBox")
    box.innerText = letter
    box.addEventListener("mouseover", ()=>{
        if(secretWordLetters.includes(box.innerText.toLowerCase())){
            box.style.color = "#37d27f";
        }
    })
    box.addEventListener("mouseout", ()=>{
        box.style.color = "gray";
    })
    lettersContainer.appendChild(box)
}

letters.split("").forEach(letter=>{
    createLetterBox(letter)
})

window.addEventListener("keypress", (event)=>{
    if(document.activeElement == guessBox && event.key == "Enter" && guessBox.value != ""){
        checkGuess(guessBox.value)
        guessBox.value = ""
    }
})

submit.addEventListener("click", ()=>{
    if(guessBox.value != ""){
        checkGuess(guessBox.value)
        guessBox.value = ""
    }
    else{
        alert("Enter a guess!")
    }
})