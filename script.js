var clutter = "";
var score = 0;
var hitrn = 0;

function makeBubbles(){
    for(var i = 1; i<=189; i++){
        hitrn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${hitrn}</div>`
    }
    document.querySelector(".pbottom").innerHTML = clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent =hitrn;
}


function runTimer(){
    var timer = 60;
     let timeInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timevalue").textContent = timer;
        }
        else{
            clearInterval(timeInterval);
            document.querySelector(".pbottom").innerHTML = `<h1 id="center">" Game Over "</h1>`;
        }
    },1000);
}

function getScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

function gameOver(){
    document.querySelector(".pbottom").addEventListener("click", function(dets){
        const clickedNumer = Number(dets.target.textContent);
        if(clickedNumer === hitrn){
            getScore();
            makeBubbles();
            getNewHit();
        }
    })
}

makeBubbles();
getNewHit();
runTimer();
gameOver();