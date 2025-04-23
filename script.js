
function updateCountdown() {
    const dataInicio = new Date('2023-04-29T00:00:00').getTime()
    const dataAtual = new Date();
    const diferenca = dataAtual - dataInicio;

    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;
    const segundosRestantes = segundos % 60;

    document.getElementById("countdown").textContent = `${dias}D ${horasRestantes}H ${minutosRestantes}M ${segundosRestantes}S`;


    setTimeout(updateCountdown, 1000);
}

updateCountdown();


document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoom');
    });
});

const thumbnails = document.querySelectorAll('.thumbnail');

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

const closeBtn = document.getElementById('close');


thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = thumbnail.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});