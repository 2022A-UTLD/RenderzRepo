// Lista de imágenes de fondo
const images = [
    'url("../img/6T6GUURJPNC3SMGADRQZ7S6ZZE.png")',
    'url("../img/mezquita-yassin-gaza.webp")',
    'url("../img/militares-kd7H-U60277339106wz-1200x840@diario_abc.webp")',
    'url("../img/ucrania.jpeg")'
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero');

// Función para cambiar la imagen de fondo
function changeBackgroundImage() {
    heroSection.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambiar la imagen cada minuto (60000 ms)
setInterval(changeBackgroundImage, 60000);

// Iniciar con la primera imagen
changeBackgroundImage();
