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

    // --- INITIALIZATION ---
    populateTitleList();
    populateCharacters();
    updateLiveDateTime(); // Initial call to display time immediately
    setInterval(updateLiveDateTime, 1000); // Update the time every second
    // --- NEW: Mobile Navigation Toggle ---
const navToggle = document.querySelector('.nav-toggle');
const body = document.body;

navToggle.addEventListener('click', () => {
body.classList.toggle('nav-open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
link.addEventListener('click', () => {
body.classList.remove('nav-open');
});
});
});
