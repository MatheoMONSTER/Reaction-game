const square = document.getElementById('square');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

let startTime, endTime, squareClicked;

function getRandomColor() { 
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){ 
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showSquare() { 
    squareClicked = false;
    square.style.backgroundColor = getRandomColor();
    square.style.display = 'block';
    startTime = new Date().getTime();
}

function hideSquare() { 
    square.style.display = 'none';
}

function showResult() { 
    const reactionTime = (endTime - startTime) / 1000;
    result.innerHTML = `Your reaction time: ${reactionTime.toFixed(2)} seconds`;
    resetButton.style.display = 'block'
}

function startGame() { 
    startButton.style.display = 'none';
    resetButton.style.display = 'none';
    setTimeout(function() { 
        showSquare();
    }, Math.random() * 2000 + 1000);
}

function resetGame() {
    result.innerHTML = '';
    resetButton.style.display = 'none';
    startGame();
}

square.addEventListener('click', function() { 
    if(!squareClicked) {
        endTime = new Date().getTime();
        hideSquare();
        showResult();
        squareClicked = true;
    }
});

startButton.addEventListener('click', function() { 
    startGame();
});

resetButton.addEventListener('click', function() { 
    resetGame();
});