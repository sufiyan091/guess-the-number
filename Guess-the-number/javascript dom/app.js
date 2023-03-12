var userinput=document.querySelector('.UserInput')
var checkbutton=document.querySelector('.checkbutton')
var score=document.querySelector('.score')
var highscore=document.querySelector('.high-score')
var rulebtn=document.querySelector('.rule-btn')
var againbtn=document.querySelector('.again-btn')

checkbutton.addEventListener('click', () => {

    if (score.textContent > 0) {



        var myNumber = Math.round(Math.random() * 20)
        console.log(myNumber)
        console.log(userinput.value)
        console.log(score.textContent)

        if (userinput.value == myNumber) {
            alert("You win")
            score.textContent = +score.textContent + 1
            if (highscore.textContent < score.textContent) {
                highscore.textContent = score.textContent
            }

        } else {
            console.log("You loose")
            score.textContent = +score.textContent - 1
        }
    } else {
        console.log("sorry aap game nai khel saktey, please try again")
    }
})




