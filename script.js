const body = document.body
const wordOne= document.querySelector("#word-one")
const wordTwo = document.querySelector("#word-two")
const wordThree = document.querySelector("#word-three")
const wordFour = document.querySelector("#word-four")
const wordFive = document.querySelector("#word-five")
const wordSix = document.querySelector("#word-six")
const wordSeven = document.querySelector("#word-seven")
const resetButton = document.querySelector("#reset")
let words = document.querySelectorAll(".word")
let gCount = 0

body.addEventListener('mousedown', e=>{
   
    if (e.target.classList.contains("black-key")|| e.target.classList.contains("key")){
        e.target.classList.add("active")
    }if (e.target.classList.contains("keynote")||e.target.classList.contains("black-keynote")){
        e.target.parentNode.classList.add("active")
        

            
    }if (e.target.id =="start"){
        wordOne.classList.add("active-lyric")
        resetButton.classList.remove("active-button")
    } if (e.target.id =="reset"){
        
        resetButton.classList.remove("active-button")
        words.forEach(word=>{
            word.classList.remove("active-lyric")
        })
   
    }if (e.target.classList.contains("g")&&wordOne.classList=="word active-lyric"){
        wordOne.classList.remove("active-lyric")
        wordTwo.classList.add("active-lyric")
        
    }else if (e.target.classList.contains("g")&&wordTwo.classList=="word active-lyric"){
        wordTwo.classList.remove("active-lyric")
        wordThree.classList.add("active-lyric")
    }else if (e.target.classList.contains("a")&&wordThree.classList=="word active-lyric"){
        wordThree.classList.remove("active-lyric")
        wordFour.classList.add("active-lyric")
    }else if (e.target.classList.contains("g")&&wordFour.classList=="word active-lyric"){
        wordFour.classList.remove("active-lyric")
        wordFive.classList.add("active-lyric")
    }else if (e.target.classList.contains("high-c")&&wordFive.classList=="word active-lyric"){
        wordFive.classList.remove("active-lyric")
        wordSix.classList.add("active-lyric")
    }else if (e.target.classList.contains("b")&&wordSix.classList=="word active-lyric"){
        wordSix.classList.remove("active-lyric")
        resetButton.classList.add("active-button")
    }


})

body.addEventListener('mouseup', e=>{
    if (e.target.classList.contains("black-key")|| e.target.classList.contains("key")){
        e.target.classList.remove("active")
        
    }
    if (e.target.classList.contains("keynote")||e.target.classList.contains("black-keynote")){
        e.target.parentNode.classList.remove("active")
    }
})

body.addEventListener('mouseout', e=>{
    if (e.target.classList.contains("keynote")||e.target.classList.contains("black-keynote")){
        e.target.classList.remove("active")
    }
    if (e.target.classList.contains("keynote")||e.target.classList.contains("black-keynote")){
        e.target.parentNode.classList.remove("active")
    }
})

