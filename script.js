function updateTime() {
    const now = new Date();
    const saatDiv = document.querySelector('.saat');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    saatDiv.textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();


function updateDate() {
    const now = new Date();
    const tarihDiv = document.querySelector('.tarih');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('tr-TR', options);

    tarihDiv.textContent = dateString;
}

updateDate();