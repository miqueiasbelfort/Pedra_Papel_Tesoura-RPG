
// btns
const pedra = document.querySelector(".pedra")
const papel = document.querySelector(".papelPlayer")
const tesoura = document.querySelector(".tesoura")

//life
const lifePlayer = document.querySelector(".life")
const monsterLife = document.querySelector(".monsterLife")

//the choice h1
const choicePlayerTitle = document.getElementById("choicePLayer")
const choiceMachineTitle = document.getElementById("choiceMachine")

//Funções de click
pedra.addEventListener("click", element => startGame(element))
papel.addEventListener("click", element => startGame(element))
tesoura.addEventListener("click", element => startGame(element))

//Função para pegar a escolha do player e o a escolha da maquina
const startGame = (element) => {
    const btn = element.target.alt;

    if(btn == undefined){
        btn = "Player"
    }

    const monsterChoice = getChoiceMachine();

    choicePlayerTitle.innerHTML = btn;
    choiceMachineTitle.innerHTML = monsterChoice;

    const winner = checkTheGame(btn, monsterChoice)
    console.log(winner)
}

function getChoiceMachine(){ //Função que retorna um escolha aleatoria com base em números aleatorios 

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
        default: {
            machineChoiceRandom = "Tesoura"
        }
    }
    console.log(theRandomNunber)
    return machineChoiceRandom

}

//Função para checar as opções
const checkTheGame = (playerChoice, monsterChoice) => {
    
    let win = ""

    //Monster win
    if(playerChoice == "Pedra" && monsterChoice == "Papel"){
        win = "Monster"
        const playerWidth = lifePlayer.style.width = `${lifePlayer.offsetWidth - 20}px`
        console.log(checkTheLife(playerWidth))


    } else if (playerChoice == "Papel" && monsterChoice == "Tesoura"){
        win = "Monster"
        const playerWidth = lifePlayer.style.width = `${lifePlayer.offsetWidth - 20}px`
        console.log(checkTheLife(playerWidth))


    } else if (playerChoice == "Tesoura" && monsterChoice == "Pedra"){
        win = "Monster"
        const playerWidth = lifePlayer.style.width = `${lifePlayer.offsetWidth - 20}px`
        console.log(checkTheLife(playerWidth))


    } 
    //Player win
    if(playerChoice == "Pedra" && monsterChoice == "Tesoura"){
        win = "Player"
        const monsterWidth = monsterLife.style.width = `${monsterLife.offsetWidth - 20}px`
        console.log(checkTheLife(monsterWidth))



    } else if(playerChoice == "Papel" && monsterChoice == "Pedra"){
        win = "Player"
        const monsterWidth = monsterLife.style.width = `${monsterLife.offsetWidth - 20}px`
        console.log(checkTheLife(monsterWidth))



    } else if (playerChoice == "Tesoura" && monsterChoice == "Papel"){
        win = "Player"
        const monsterWidth = monsterLife.style.width = `${monsterLife.offsetWidth - 20}px`
        console.log(checkTheLife(monsterWidth))
    }

    //Inpate
    if(playerChoice == monsterChoice){
        win = "Empate"
    }

    return win

}

const checkTheLife = (life) => {
    if(life <= 0){
        return "Death"    
    }
    return "live"
}