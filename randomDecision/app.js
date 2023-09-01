let askSection = document.querySelector(".askSection")
let answerSection = document.querySelector(".answerSection")
let questionInput = document.querySelector(".question")
let askButton = document.querySelector(".askButton")
let answer = document.querySelector(".answer")
let askAnother = document.querySelector(".askAnother")
let inputText = document.querySelector(".inputText")

let options = ["Yes, you should.", "No, you should not."]

function sayAnswer(){
    q = questionInput.value
    if(q==''){
        questionInput.classList.add("shake")
        setTimeout(()=>{
            questionInput.classList.remove("shake")
        },500)
    }
    else{
        askSection.classList.add("moveRight")
        answerSection.classList.add("moveUp")
        answer.innerText = options[Math.floor(Math.random()*options.length)]
        inputText.innerText = "You asked : " + questionInput.value;
        questionInput.value = ''
        questionInput.classList.add("hide")
    }
}

window.addEventListener("load", ()=>{
    questionInput.focus()
})

askButton.addEventListener("click", ()=>{
    sayAnswer()
    questionInput.focus()
})

window.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        sayAnswer()
    }
})

askAnother.addEventListener("click", ()=>{
    answerSection.classList.remove("moveUp")
    askSection.classList.remove("moveRight")
    questionInput.classList.remove("hide")
})
