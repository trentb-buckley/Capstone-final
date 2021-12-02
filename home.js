// const { default: axios } = require("axios")



let body = document.querySelector('body')
let card0 = document.getElementById('card-0')
let card1 = document.getElementById('card-1')
let card2 = document.getElementById('card-2')
let card3 = document.getElementById('card-3')
let card4 = document.getElementById('card-4')
let card5 = document.getElementById('card-5')
let card6 = document.getElementById('card-6')
let card7 = document.getElementById('card-7')
let card8 = document.getElementById('card-8')
let card9 = document.getElementById('card-9')
let card10 = document.getElementById('card-10')
let card11 = document.getElementById('card-11')
let card12 = document.getElementById('card-12')
let card13 = document.getElementById('card-13')
let card14 = document.getElementById('card-14')
let card15 = document.getElementById('card-15')

let startBtn = document.getElementById('start-btn')
let scoreList = document.getElementById('score-list')

let cardArr = ["one", "two", "one", "two", "three", "three", "four", "four", "five", "five", "six", "six", "seven", "seven", "eight", "eight"]
function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;
    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]]
        }
        return arr
    }
    
    
    let checkArr = []
    let checkId = []
    let finished8 = 0
    let message = []
    
    let tileArr = [card0, card1, card2, card3, card4, card5, card6, card7, card8, 
        card9, card10, card11, card12, card13, card14, card15]
        
        
        let textBoxArr = ["txt-0", "txt-1", "txt-2", "txt-3", "txt-4", "txt-5", "txt-6",
        "txt-7", "txt-8", "txt-9", "txt-10", "txt-11", "txt-12", "txt-13", "txt-14", "txt-15"]
        
        
const getScore = () => {
    axios.get(`http://localhost:3888/api/scores/`)
        .then( (res) => {
            for(i=0;i<res.data.length;i++) {
                let score = document.createElement('li')
                score.classList.add('score-li')
                score.textContent = res.data[i]
                scoreList.appendChild(score)         
            }
        
        })
}
getScore()
// const prompt = () => {
//     let varb = prompt("Give us a name for your best time")
//     if(varb === '') {
//         let varb = prompt("Please enter an actual name")
//     }
//     return varb
// }

let started = 0
startBtn.addEventListener('click', (req, res) => {
    if(started > 0) {
        return
    }else {
    started++
    // yay.remove()
    
    
    // let cardArr = axios.get(`http://localhost:3888/api/cardarr/`)
    // .then((res) => {
    //     let tempArr = res.data
    // })
    let name = prompt("Give us a name for your best time")
    // let name = prompt()
    let now = performance.now()
    let newArr = shuffle(cardArr);
    let score = document.createElement('h2')
    body.appendChild(score)
    for(i=0; i<tileArr.length; i++) {
        let textBox = document.createElement('p')
        textBox.textContent = newArr[i]
        textBox.classList.add(`${textBoxArr[i]}`)
        tileArr[i].appendChild(textBox)
        // tileArr[i].backgroundColor = 'black'
        tileArr[i].addEventListener('click', () => {
            // tileArr[i].innerHTML = ''
            checkArr.push(textBox.textContent)
             // console.log(tileArr[i])
            // checkId.push(tileArr[i].id)
            if(checkArr.length < 2) {
                return;
                } else if(checkArr[0] === checkArr[1]) {
                score.textContent = `${finished8 + 1}/8 matches`
                finished8++
                for(i=0; i<tileArr.length; i++) {
                    if(tileArr[i].textContent === checkArr[0]) {
                        tileArr[i].style.backgroundColor = 'gray'
                        // console.log(finished8)
                        if(finished8===8) {
                        let later = performance.now()
                        let time = ((later - now) / 1000).toFixed(2)
                        // let name = promt("Whats your name?")
                        console.log('Yay you win')
                        let yay = document.createElement('h1')
                        yay.textContent = `${name}, your time was ${time}s`
                        yay.classList.add('yay-txt')
                        body.appendChild(yay)
                        finished8=0   
                        started = 0
                        message.push(name)
                        message.push(time) 
                        let score = document.createElement('li')
                        score.classList.add('score-li')
                        score.textContent = (`${message[0]}  :  ${message[1]}s`) 
                        scoreList.appendChild(score)     
                        console.log(checkArr)  
                        }
                    }
                }
            } else if(checkArr[0] !== checkArr[1] || checkId[0] === checkId[1]) {
                console.log(checkArr)
                console.log('these cards dont match try again')
            }
            checkArr = []
            checkId = []
        })
    }
}   // console.log('Hello World')
})

// app.get('/api/matchtime', (req, res) => {
//     res.status(200).send(message.toString())
// })
// let clicked = false

// const getClicked = () => {
    //     if(clicked === false) {
        //         // tileArr[i].style.transform = 'rotatez(720deg)';
        //         // tileArr[i].style.backgroundColor = 'gray'
        //         console.log('click on')
        //         let click = true
        //     } else {
            //         // tileArr[i].style.transform = 'rotatez(720deg)';
//         // tileArr[i].style.backgroundColor = 'white'
//         console.log('click off')
//         let click = false
//     }
// }

// for(i=0; i<tileArr.length; i++) {
//     tileArr[i].addEventListener.on('click', getClicked)
// }

// app.listen(4012, () => console.log("Server running on 4012"));


