function revealMessage() {
    const button = document.querySelector('.reveal-button');
    const message = document.getElementById('message');
    button.style.display = 'none';
    message.classList.remove('hidden');
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${5 + Math.random() * 5}s`;
        heartsContainer.appendChild(heart);
    }
}

function moveNoButton() {
    const button = document.getElementById('no-button');

    function moveButton() {
        const offsetX = (Math.random() - 0.5) * 200;
        const offsetY = (Math.random() - 0.5) * 200;
        const rect = button.getBoundingClientRect();
        const maxWidth = window.innerWidth - rect.width;
        const maxHeight = window.innerHeight - rect.height;

        let newX = rect.x + offsetX;
        let newY = rect.y + offsetY;

        newX = Math.max(0, Math.min(newX, maxWidth));
        newY = Math.max(0, Math.min(newY, maxHeight));

        button.style.transform = `translate(${newX - rect.x}px, ${newY - rect.y}px)`;
    }

    button.addEventListener('mouseover', moveButton);
    button.addEventListener('click', moveButton);
}

// Riproduzione audio automatica e pulsante toggle
function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Assicura che l’audio parta di default
window.addEventListener('load', () => {
    const music = document.getElementById('bg-music');
    music.volume = 0.2; // Volume basso
    music.play().catch(() => {
        console.log("Audio playback blocked by browser.");
    });
});

// Gestione del click su "Yes" e invio email
function handleYesClick() {
    const email = "mazurekmarco06@gmail.com"; // Email destinatario
    const formData = new FormData();
    formData.append("response", "yes");

    // Invio email usando FormSubmit
    fetch(`https://formsubmit.co/${email}`, {
        method: "POST",
        body: formData,
    })
        .then(() => alert("I love you so so much! 💖"))
        .catch(() => alert("Oops! Something went wrong."));
}


function showResponse(response) {
    if (response === 'yes') {
        alert("I love you so so much! 💖");
    }
}

createHearts();
moveNoButton();
