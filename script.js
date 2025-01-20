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
        const offsetX = (Math.random() - 0.5) * 200; // Sposta fino a ±100px
        const offsetY = (Math.random() - 0.5) * 200; // Sposta fino a ±100px
        const rect = button.getBoundingClientRect();
        const maxWidth = window.innerWidth - rect.width;
        const maxHeight = window.innerHeight - rect.height;

        let newX = rect.x + offsetX;
        let newY = rect.y + offsetY;

        // Assicura che rimanga dentro la finestra
        newX = Math.max(0, Math.min(newX, maxWidth));
        newY = Math.max(0, Math.min(newY, maxHeight));

        button.style.transform = `translate(${newX - rect.x}px, ${newY - rect.y}px)`;
    }

    // Da PC: si muove con il mouse over
    button.addEventListener('mouseover', moveButton);

    // Da telefono: si muove con il click
    button.addEventListener('click', moveButton);
}

function showResponse(response) {
    const email = "mazurekmarco06@gmail.com"; // Sostituisci con il tuo indirizzo email
    const url = `https://formsubmit.co/${email}`;
    if (response === 'yes') {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ response: 'yes' }),
        })
            .then(() => alert("I love you so so much"))
            .catch(() => alert("Oops! Something went wrong."));
    }
}

createHearts();
moveNoButton();
