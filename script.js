const weddingDate = new Date("September 2, 2026 20:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        countdown.innerHTML = "🎉 تم موعد الزواج";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        `⏳ متبقي على موعد الزواج<br><br>
        ${days} يوم • ${hours} ساعة • ${minutes} دقيقة • ${seconds} ثانية`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
