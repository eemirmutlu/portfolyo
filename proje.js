const secilenProje = JSON.parse(localStorage.getItem("secilenProje"));

console.log(secilenProje);

const navBaslik = document.querySelector('nav h1');
navBaslik.classList.add('fw-bold', 'text-light')
navBaslik.textContent = secilenProje.ad;

document.title = secilenProje.ad;

const main = document.querySelector('main');

const imgDiv = document.createElement('div');
imgDiv.classList.add('projenin-gorseli', 'd-flex', 'justify-content-center', 'container');

imgDiv.style.width = '400px';
imgDiv.style.height = '400px';
imgDiv.style.backgroundImage = `url('${secilenProje.img}')`;
imgDiv.style.backgroundSize = 'cover';
imgDiv.style.backgroundPosition = 'center';

main.appendChild(imgDiv);


const aciklamaDiv = document.createElement('div');
aciklamaDiv.classList.add('projenin-aciklamasi', 'text-light');
aciklamaDiv.textContent = secilenProje.projeAciklama;
main.appendChild(aciklamaDiv);

const fotoDiv = document.createElement('div');
fotoDiv.classList.add('projenin-gorseli', 'd-flex', 'justify-content-center', 'container');

fotoDiv.style.width = '100%';
fotoDiv.style.height = '100%';
fotoDiv.style.backgroundImage = `url('${secilenProje.ornekFoto}')`;
fotoDiv.style.backgroundSize = 'cover';
fotoDiv.style.backgroundPosition = 'center';

main.appendChild(fotoDiv);

const linkDiv = document.createElement('div');
linkDiv.classList.add('projenin-linki');
linkDiv.innerHTML = `<a style="color: red; text-decoration: none;" href="${secilenProje.projeLink}">Projeye buradan ulaşabilirsiniz.</a>`;
main.appendChild(linkDiv);