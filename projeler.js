const projeler = [
    {
        "ad": "Netflix Klon (Backend)",
        "projeLink": "https://github.com/eemirmutlu/netflix_backend",
        "aciklama": "Django ile yapılmış bir Netflix Klon projesidir.",
        "img": "netflix.png",
        "link": "proje.html",
        "projeAciklama": "Django (Python web framework'ü) kullanılarak yapıan bu projede hesap açma kaydolma gibi sayfalar oluşturulmadan hepsini tek bir panel üzerinden yöneterek bir django projesi üzerinde çalıştım ve bir hesap oluşturup admin sayfasına bağlayarak Backendini oluşturdum. Proje henüz hazırlık aşamasında ve güncellendikçe proje sayfasındaki bilgi kısmına eklemeler yapılacaktır.",
        "ornekFoto": ""
    },
    {
        "ad": "Katana Web Sitesi",
        "projeLink": "https://eemirmutlu.github.io/jsProje/",
        "aciklama": "HTML, CSS ve JavaScript kullanarak yapılmış bir web sitesi projesidir.",
        "img": "katana.png",
        "link": "proje.html",
        "projeAciklama": "",
        "ornekFoto": ""
    },
    {
        "ad": "Exxen Klon (Frontend)",
        "projeLink": "https://eemirmutlu.github.io/exxen-clone/",
        "aciklama": "Bootstrap kullanılarak yapılmış bir Exxen Klonudur.",
        "img": "exxen.png",
        "link": "proje.html",
        "projeAciklama": "",
        "ornekFoto": ""
    },
    {
        "ad": "Banka Uygulaması Projesi",
        "projeLink": "https://eemirmutlu.github.io/test/",
        "aciklama": "JavaScript ile yapılan bir banka sayfasıdır.",
        "img": "atm.png",
        "link": "proje.html",
        "projeAciklama": "",
        "ornekFoto": ""
    },
    {
        "ad": "Pygame Oyunu",
        "projeLink": "https://github.com/eemirmutlu/game_test",
        "aciklama": "Pygame ile yapılan bir Taş, Kağıt, Makas oyunudur.",
        "img": "pygame.png",
        "link": "proje.html",
        "projeAciklama": "",
        "ornekFoto": ""
    },
];

const projelerRow = document.getElementById("projelerRow");

projeler.forEach(proje => {
    const kart = document.createElement("a");
    kart.style.textDecoration = "none"
    kart.target = "_blank"
    kart.classList.add("col-lg-3", "col-md-6", "col-12", "g-4");
    kart.href = proje.link;

    kart.addEventListener("click", () => {
        localStorage.setItem("secilenProje", JSON.stringify(proje));
    });

    const kartIcerik = document.createElement("div");
    kartIcerik.classList.add("card", "bg-dark", "rounded-white");

    kartIcerik.innerHTML = `
        <div class="card-image fw-bold bg-dark" style="background-image: url('${proje.img}')"></div>
        <div class="category fw-bold">${proje.ad}</div>
        <div class="heading fw-bold text-light">${proje.aciklama}</div>
    `;

    kart.appendChild(kartIcerik);
    projelerRow.appendChild(kart);
});

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

