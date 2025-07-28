const lightParticlesConfig = {
    particles: {
        number: { value: 100 },
        color: { value: "#202e5f" }, // Azul para fondo claro
        size: { value: 3 },
        move: { enable: true, speed: 1 },
        links: {
            enable: true,
            color: "#202e5f",
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
};

const darkParticlesConfig = {
    particles: {
        number: { value: 100 },
        color: { value: "#ffffff" }, // Blanco para fondo oscuro
        size: { value: 3 },
        move: { enable: true, speed: 1 },
        links: {
            enable: true,
            color: "#ffffff",
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
};

// Carga inicial según si el modo actual es oscuro o claro
function loadParticlesForTheme(isDark) {
    const config = isDark ? darkParticlesConfig : lightParticlesConfig;
    tsParticles.load("tsparticles", config);
}
