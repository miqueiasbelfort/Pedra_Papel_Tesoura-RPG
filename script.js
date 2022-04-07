
// btns
const pedra = document.querySelector(".pedra")
const papel = document.querySelector(".papelPlayer")
const tesoura = document.querySelector(".tesoura")

//the choice h1
const choicePlayerTitle = document.getElementById("choicePLayer")
const choiceMachineTitle = document.getElementById("choiceMachine")


pedra.addEventListener("click", (e) => {
    const pedra = e.target.alt
    //console.log(pedra)
    choicePlayerTitle.innerHTML = pedra
    const monsterChoice = getChoiceMachine()
    choiceMachineTitle.innerHTML = monsterChoice

    if(pedra && monsterChoice == "Papel"){
        alert("Papel ganha de pedra")
    } else if (pedra && monsterChoice == "Tesoura"){
        alert("Pedra ganha de tesoura")
    }

})
papel.addEventListener("click", (e) => {
    const papel = e.target.alt
    //console.log(papel)  
    choicePlayerTitle.innerHTML = papel
    const monsterChoice = getChoiceMachine()
    choiceMachineTitle.innerHTML = monsterChoice

})
tesoura.addEventListener("click", (e) => {
    const tesoura = e.target.alt
    //console.log(tesoura)
    choicePlayerTitle.innerHTML = tesoura
    const monsterChoice = getChoiceMachine()
    choiceMachineTitle.innerHTML = monsterChoice
})

function getChoiceMachine(){
    const theRandomNunber = Math.floor(Math.random() * 3)
    let machineChoiceRandom = ""
    switch(theRandomNunber){
        case 0: {
            machineChoiceRandom = "Pedra"
            break
        }
        case 1: {
            machineChoiceRandom = "Papel"
            break
        }
        case 2: {
            machineChoiceRandom = "Tesoura"
            break
        }
    }
    console.log(theRandomNunber)
    return machineChoiceRandom
}
