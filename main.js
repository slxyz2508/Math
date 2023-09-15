import * as Test from './Test.js';

window.onload = function(){
    const bh = document.getElementById('blackhole')
    const video = document.getElementById('video-background')
    const contain = document.getElementById('contain')
    const containerpage = document.getElementById('containerpage')
    const startpage = document.getElementById('startpage')
    const result = document.getElementById('result')
    const progress = document.getElementById('progress')
    const back = document.getElementById('backtomain')
    const infoContainer = document.getElementsByClassName("info-container")[0]
    const startButton = document.getElementById("start")
    const test = document.getElementById("test")
    const testMain = document.getElementById("test-main")
    const testContainer = document.getElementsByClassName("test-container")[0]
    const pageText = document.getElementById("currentPage")
    // const amount = document.getElementById("amount")
    const timer = document.getElementById("timer")
    const time = document.getElementById("time")
    // const type = document.getElementById("type")
    // CHOICE
    const c1 = document.getElementsByClassName("c1")[0]
    const c2 = document.getElementsByClassName("c2")[0]
    const c3 = document.getElementsByClassName("c3")[0]
    const c4 = document.getElementsByClassName("c4")[0]
    const allChoice = [undefined,c1,c2,c3,c4]

    const nextBtn = document.getElementById("next")
    const prevBtn = document.getElementById("prev")
    const submitBtn = document.getElementById("submit1")

    let TestList = undefined
    let answer = []
    let currentPage = 1
    startpage.addEventListener('click',function(){
        video.style.display = ' none '
        contain.style.display = 'none'
        containerpage.style.display = 'flex'
        bh.style.display= 'flex'
    })
    startButton.addEventListener("click", function() {

        infoContainer.style.display = "none"
        testContainer.style.display = "block"
        progress.style.display = "none"
        result.style.display = 'none'
        

        TestList = Test.getTest(test.value)
        setupTimer(time.value, timer)
        newTest(1)
        setupChoiceButton()
    });

    back.addEventListener('click',function(){
        window.location.reload()
    })

    nextBtn.addEventListener("click", function() {
        if (currentPage < 10) {
            currentPage++
            newTest(currentPage)
        }
    })

    prevBtn.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--
            newTest(currentPage)
        }
    })

    submitBtn.addEventListener("click", function() {
        if (checkCompleteAnswer()) {
            const score = calculateScore(answer, TestList);
            alert("Congratulations! You scored " + score + "/10 !!!");
            
            // testContainer.style.display = "none"
            // infoContainer.style.display = "block"
            
            window.location.reload()
            
        } else {
            alert("You haven't completed all the questions yet!");
        }
    });

    function resetChoice(){
        if (answer[currentPage] === undefined){
            return
        }
        allChoice[answer[currentPage]].style.border = "2px solid black"
    }
    
    function checkAnswer(){
        let score = 0
        for (let index = 1; index < TestList.length; index++) {
            let testAnswer = TestList[index].ans
            if (testAnswer == answer[index]){
                score++
            }
        }
        return score
    }

    function checkCompleteAnswer(){
        for (let index = 1; index < 11; index++) {      
            if (answer[index] == undefined){
                return false
            }      
        }
        return true
    }

    function showsubmitButton(){
        if (currentPage >= 10 && checkCompleteAnswer() === true){
            submitBtn.style.display = "block"
        }
    }

    function setupChoiceButton(){

        c1.addEventListener("click", function(){
            resetChoice()
            c1.style.border = "5px solid green"
            answer[currentPage] = 1
            showsubmitButton()
        })
        c2.addEventListener("click", function(){
            resetChoice()
            c2.style.border = "5px solid green"
            answer[currentPage] = 2
            showsubmitButton()
        })
        c3.addEventListener("click", function(){
            resetChoice()
            c3.style.border = "5px solid green"
            answer[currentPage] = 3
            showsubmitButton()
        })
        c4.addEventListener("click", function(){
            resetChoice()
            c4.style.border = "5px solid green"
            answer[currentPage] = 4
            showsubmitButton()
        })
    }

    function setupTimer(duration, display) {
        var start = Date.now(),
            diff,
            minutes,
            seconds;
        function timer() {
            // get the number of seconds that have elapsed since 
            // startTimer() was called
            diff = duration - (((Date.now() - start) / 1000) | 0);
    
            // does the same job as parseInt truncates the float
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds; 
    
            if (diff <= 0) {
                // add one second so that the count down starts at the full duration
                // example 05:00 not 04:59
                start = Date.now() + 1000;
                
                alert("ยินดีด้วยคุณได้ " + score + "/10 !!!")
                window.location.reload()
                // window.location.href = 'https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript'
            }
        };
        // we don't want to wait a full second before the timer starts
        timer();
        setInterval(timer, 1000);
    }

    function newTest(page){

        let curTest = TestList[page]
        testMain.innerText = currentPage+") "+curTest.id
        pageText.innerHTML = currentPage+"/10"

        console.log(curTest)
        c1.innerHTML = curTest.choice[1]
        c2.innerHTML = curTest.choice[2]
        c3.innerHTML = curTest.choice[3]
        c4.innerHTML = curTest.choice[4]

        for (let index = 1; index < allChoice.length; index++) {
            allChoice[index].style.border = "2px solid black"
        }

        if (answer[currentPage]){
            allChoice[answer[currentPage]].style.border = "5px solid green"
        }

        submitBtn.style.display = "block"
        showsubmitButton()

    }
    function calculateScore(answers, testList) {
        let score = 0;
    
        for (let key in answers) {
            if (answers[key] !== undefined && testList[key] !== undefined) {
                if (answers[key] === testList[key].ans) {
                    score++;
                }
            }
        }
    
        return score;
    }

   
    
    
}


