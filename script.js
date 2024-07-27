

document.getElementById('submitBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() !== '') {
        const words = inputText.split(' ');
        displayWords(words);
        hideInputElements();
        showNextButton();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    nextWord();
});

let currentWordIndex = 0;
let words = [];

function displayWords(wordsArray) {
    words = wordsArray;
    currentWordIndex = 0;
    updateWordDisplay();
}

function updateWordDisplay() {
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';
    
    for (let i = currentWordIndex; i < words.length && i < currentWordIndex + 3; i++) {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'word';
        wordDiv.textContent = words[i];
        wordDiv.style.top = `${(i - currentWordIndex) * 40}px`;
        wordDiv.style.opacity = 1 - (i - currentWordIndex) * 0.5;
        wordContainer.appendChild(wordDiv);
    }
}

function hideInputElements() {
    document.getElementById('inputText').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
}

function showNextButton() {
    document.getElementById('nextBtn').style.display = 'block';
}

function nextWord() {
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        updateWordDisplay();
    }
}

document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        nextWord();
    }
});
