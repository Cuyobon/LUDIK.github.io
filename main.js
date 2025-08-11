// Espera a que el documento esté cargado
window.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');

    // Oculta el contenido inicialmente
    heroText.style.opacity = '0';
    heroText.style.transition = 'opacity 1.5s ease';

    // Después de 5 segundos lo muestra con fade-in
    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 5000);

    // Carga partículas según modo actual
    const isDark = document.body.classList.contains("dark-mode");
    loadParticlesForTheme(isDark);
});

// 🎥 Video controls
const video = document.getElementById('hero-video');
const muteBtn = document.getElementById('mute-toggle');
const fullscreenBtn = document.getElementById('fullscreen-toggle');
const exitFullscreenBtn = document.getElementById('exit-fullscreen');
const volumeSlider = document.getElementById('volume-slider');

// Configura el volumen inicial
video.volume = 1;
volumeSlider.value = 1;

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
    if (!video.muted) {
        video.volume = volumeSlider.value;
    }
});

volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
    if (video.muted && volumeSlider.value > 0) {
        video.muted = false;
        muteBtn.textContent = '🔊';
    } else if (volumeSlider.value == 0) {
        video.muted = true;
        muteBtn.textContent = '🔇';
    }
});

fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();

    exitFullscreenBtn.style.display = 'block';
});

exitFullscreenBtn.addEventListener('click', () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();

    exitFullscreenBtn.style.display = 'none';
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        exitFullscreenBtn.style.display = 'none';
    }
});

// 🌙 Modo claro/oscuro y partículas
const toggleButton = document.getElementById('toggle-theme');
let isDarkMode = document.body.classList.contains('dark-mode');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode');
        loadParticlesForTheme(isDarkMode);
    });
}

// ⏳ Countdown
const eventDate = new Date("2025-08-12T12:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownEl.innerHTML = "¡Ya comenzó el evento!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

