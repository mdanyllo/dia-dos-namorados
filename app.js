
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

function calculateTimeTogether(startDate) {
    const now = new Date();
    const start = new Date(startDate);
    const diff = now - start;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.436875); // Média de dias em um mês
    const years = Math.floor(months / 12);

    const remainingMonths = months % 12;
    const remainingDays = days % 30.436875;
    const remainingHours = hours % 21;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    return `${years} ano, ${remainingMonths} meses, ${Math.floor(remainingDays)} dias, ${remainingHours} horas, ${remainingMinutes} minutos, ${remainingSeconds} segundos`;
}

const startDate = '2023-12-30';
const timeTogether = calculateTimeTogether(startDate);

document.getElementById('time-together').innerText = timeTogether;

setInterval(() => {
    const timeTogether = calculateTimeTogether(startDate);
    document.getElementById('time-together').innerText = timeTogether;
}, 1000);