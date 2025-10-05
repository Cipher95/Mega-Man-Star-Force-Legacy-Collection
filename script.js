document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const gameTitles = [
        { title: "MMSF: Leo", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title01_en.png" },
        { title: "MMSF: Dragon", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title02_en.png" },
        { title: "MMSF: Pegasus", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title03_en.png" },
        { title: "MMSF 2: Zerker × Ninja", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title04_en.png" },
        { title: "MMSF 2: Zerker × Saurian", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title05_en.png" },
        { title: "MMSF 3: Black Ace", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title06_en.png" },
        { title: "MMSF 3: Red Joker", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title07_en.png" }
    ];

    const characters = [
        { name: "Geo Stelar & Omega-Xis", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character01.png" },
        { name: "Sonia Strumm", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character02.png" },
        { name: "Luna Platz", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character03.png" },
        { name: "Bud Bison", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character04.png" },
        { name: "Zack Temple", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character05.png" }
    ];

    const gameDetails = [
        { label: "Available", value: "2026" },
        { label: "Players", value: "1 player (up to 2 players online)" },
        { label: "Platforms", value: "PlayStation 5, Xbox Series X|S, PC (Steam)" },
        { label: "Rating", value: "Rating Pending" },
        { label: "Genre", value: "Action RPG" },
        { label: "Note", value: "The screen is still in development." },
	{ label: "Note", value: "Crossplay and cross-save between platforms is not supported." },
    ];

    // --- LIVE DATE & TIME ---
    function updateLiveDateTime() {
        const container = document.getElementById('live-datetime-container');
        if (!container) return;

        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        const date = now.toLocaleDateString('en-US', options);
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        container.textContent = `${date} | ${time}`;
    }

    // --- DYNAMIC CONTENT GENERATION ---
    function populateTitleList() {
        const container = document.getElementById('title-grid-container');
        if (!container) return;
        gameTitles.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${game.imageUrl}" alt="${game.title}">
                </div>
                <div class="card-content">
                    <h3>${game.title}</h3>
                </div>`;
            container.appendChild(card);
        });
    }

    function populateCharacters() {
        const container = document.getElementById('character-grid-container');
        if (!container) return;
        characters.forEach(char => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${char.imageUrl}" alt="${char.name}">
                </div>
                <div class="card-content">
                    <p>${char.name}</p>
                </div>`;
            container.appendChild(card);
        });
    }

    function populateGameDetails() {
        const container = document.getElementById('game-details-list');
        if (!container) return;
        gameDetails.forEach(detail => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
            container.appendChild(listItem);
        });
    }

    // --- INTERACTIVITY & ANIMATIONS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');

    if (menuToggle && navWrapper) {
        menuToggle.addEventListener('click', () => {
            navWrapper.classList.toggle('active');
        });
        
        // Add this section to handle closing the menu on link click
        const navLinks = navWrapper.querySelectorAll('ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navWrapper.classList.contains('active')) {
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    // --- BACKGROUND MUSIC HANDLER ---
    const backgroundMusic = document.getElementById('bg-music');
    
    function playAudio() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                // Autoplay was prevented.
                console.log("Autoplay was blocked by the browser. A user interaction is required to play audio.");
                // Add a fallback to play on the first click.
                document.body.addEventListener('click', playAudio, { once: true });
            });
        }
    }

    // --- INITIALIZATION ---
    populateTitleList();
    populateCharacters();
    populateGameDetails();
    updateLiveDateTime(); // Initial call to display time immediately
    setInterval(updateLiveDateTime, 1000); // Update the time every second
    playAudio(); // Attempt to play audio on load
});