// تاريخ الزواج
const weddingDate = new Date("2026-09-02T20:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

if(distance <= 0){

countdown.innerHTML = "🎉 تم موعد الزواج";

return;

}

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/60000);

const seconds = Math.floor((distance%(60000))/1000);

countdown.innerHTML =
`
⏳ متبقي على الزواج

<br><br>

${days} يوم

${hours} ساعة

${minutes} دقيقة

${seconds} ثانية
`;

}

setInterval(updateCountdown,1000);

updateCountdown();
