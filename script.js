let currentPage = 1;
const totalPages = 6; // karena kamu punya 6 halaman

function nextPage() {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).classList.add('hidden');
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.remove('hidden');
    }
}

// Game Klik Bayi
let score = 0;
let timeLeft = 10;
let gameInterval;

function clickBaby() {
    score++;
    document.getElementById("score").innerText = score;
}

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = `Waktu: ${timeLeft}`;
    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Waktu: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert(`Waktu habis! Skor akhir kamu: ${score}`);
        }
    }, 1000);
}

// Game Tebak Nama
function checkAnswer(button) {
    const correct = "Moza";
    const result = document.getElementById("quizResult");

    if (button.innerText === correct) {
        result.innerText = "🎉 Benar! Nama Moza cocok banget!";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Wah, coba lagi. Nama itu terlalu unik!";
        result.style.color = "red";
    }
}
