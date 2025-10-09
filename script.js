document.addEventListener('DOMContentLoaded', () => {

    // --- SITE DATA & TRANSLATIONS ---
    const siteData = {
        en: {
            pageTitle: "Mega Man Star Force Legacy Collection｜CAPCOM",
            headerLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_en.png",
            heroLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_en.png",
            trailerUrl: "https://www.youtube.com/embed/D4FkNAmZy6M?si=NUBtZHyVDl9Reuv5&amp;controls=0&mute=1",
            gameTitles: [
                { title: "MMSF: Leo", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title01_en.png" },
                { title: "MMSF: Dragon", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title02_en.png" },
                { title: "MMSF: Pegasus", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title03_en.png" },
                { title: "MMSF 2: Zerker × Ninja", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title04_en.png" },
                { title: "MMSF 2: Zerker × Saurian", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title05_en.png" },
                { title: "MMSF 3: Black Ace", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title06_en.png" },
                { title: "MMSF 3: Red Joker", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title07_en.png" }
            ],
            characters: [
                { name: "Geo Stelar & Omega-Xis", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character01.png" },
                { name: "Sonia Strumm", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character02.png" },
                { name: "Luna Platz", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character03.png" },
                { name: "Bud Bison", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character04.png" },
                { name: "Zack Temple", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character05.png" }
            ],
            translations: {
                nav_about: "ABOUT", nav_trailer: "TRAILER", nav_title_list: "TITLE LIST", nav_online: "ONLINE", nav_characters: "CHARACTERS", nav_details: "DETAILS",
                release_date: "Available 2026", about_title: "ABOUT THE SERIES", about_subtitle1: "What is Mega Man Star Force?",
                about_text1: "To celebrate Mega Man's 20th anniversary, the new titles Mega Man Star Force Pegasus, Leo, and Dragon were released simultaneously. They evolved the best features of the Battle Network series, adding a new 3D battle system and exciting gameplay mechanics.",
                about_subtitle2: "The World of Star Force", about_text2: "It is the year 220X. The world is connected by a network of EM Waves. Our protagonist, Geo Stelar, still mourning the disappearance of his astronaut father, has his life changed forever when he encounters a rogue FM-ian named Omega-Xis.",
                trailer_title: "EXTENDED ANNOUNCE TRAILER", title_list_title: "INCLUDED TITLES", online_title: "ENHANCED ONLINE FEATURES",
                online_text: "From battling rivals across the globe to trading BrotherBand cards, the powered-up online functions will let you experience the full power of the Mega Man Star Force network!",
                characters_title: "KEY CHARACTERS", details_title: "GAME DETAILS", detail_label_available: "Available", detail_label_players: "Players",
                detail_label_platforms: "Platforms", detail_label_rating: "Rating", detail_label_genre: "Genre", detail_label_note: "Note",
                detail_value_players: "1 player (up to 2 players online)", detail_value_rating: "Rating Pending", detail_value_note1: "The screen is still in development.", detail_value_note2: "Crossplay and cross-save between platforms is not supported."
            }
        },
        ja: {
            pageTitle: "流星のロックマン レガシーコレクション｜CAPCOM",
            headerLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_ja.png",
            heroLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_ja.png",
            trailerUrl: "https://www.youtube.com/embed/WRq8aelnIzQ?si=EMqlR1TOVjKqrpNd&amp;controls=0&mute=1",
            gameTitles: [
                { title: "流星のロックマン レオ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title01.png" },
                { title: "流星のロックマン ドラゴン", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title02.png" },
                { title: "流星のロックマン ペガサス", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title03.png" },
                { title: "流星のロックマン2 ベルセルク × シノビ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title04.png" },
                { title: "流星のロックマン2 ベルセルク × ダイナソー", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title05.png" },
                { title: "流星のロックマン3 ブラックエース", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title06.png" },
                { title: "流星のロックマン3 レッドジョーカー", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title07.png" }
            ],
            characters: [
                { name: "星河 スバル & ウォーロック", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character01.png" },
                { name: "白金 ルナ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character02.png" },
                { name: "響 ミソラ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character03.png" },
                { name: "牛島 ゴン太", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character04.png" },
                { name: "最小院 キザマロ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character05.png" }
            ],
            translations: {
                nav_about: "このシリーズについて", nav_trailer: "トレーラー", nav_title_list: "収録タイトル", nav_online: "オンライン", nav_characters: "キャラクター", nav_details: "詳細",
                release_date: "2026年発売予定", about_title: "シリーズについて", about_subtitle1: "流星のロックマンとは？",
                about_text1: "「ロックマン」20周年を記念して、新作『流星のロックマン ペガサス』、『レオ』、『ドラゴン』が同時発売されました。バトルネットワークシリーズの長所を進化させ、新しい3Dバトルシステムとエキサイティングなゲームプレイメカニクスを追加しました。",
                about_subtitle2: "流星の世界", about_text2: "西暦220X年。世界はEM波のネットワークで結ばれている。宇宙飛行士の父の失踪を悼む主人公、星河スバルは、はぐれFM星人ウォーロックと出会い、その人生を大きく変えることになる。",
                trailer_title: "拡張アナウンストレーラー", title_list_title: "収録タイトル", online_title: "強化されたオンライン機能",
                online_text: "世界中のライバルとの対戦からブラザーバンドカードの交換まで、パワーアップしたオンライン機能で『流星のロックマン』ネットワークのフルパワーを体験できます！",
                characters_title: "主な登場人物", details_title: "ゲーム詳細", detail_label_available: "発売日", detail_label_players: "プレイヤー数",
                detail_label_platforms: "プラットフォーム", detail_label_rating: "評価", detail_label_genre: "ジャンル", detail_label_note: "備考",
                detail_value_players: "1人（オンライン最大2人）", detail_value_rating: "評価保留中", detail_value_note1: "画面は開発中のものです。", detail_value_note2: "プラットフォーム間のクロスプレイおよびクロスセーブはサポートされていません。"
            }
        }
    };

    const gameDetails = [
        { label_key: "detail_label_available", value: "2026" },
        { label_key: "detail_label_players", value_key: "detail_value_players" },
        { label_key: "detail_label_platforms", value: "Nintendo Switch™ / PlayStation®5 / PlayStation®4 / Xbox Series X|S / Xbox One / PC(Steam)" },
        { label_key: "detail_label_rating", value_key: "detail_value_rating" },
        { label_key: "detail_label_genre", value: "Action RPG" },
        { label_key: "detail_label_note", value_key: "detail_value_note1" },
        { label_key: "detail_label_note", value_key: "detail_value_note2" },
    ];

    // --- LANGUAGE SWITCHER ---
    const languageSelectorScreen = document.getElementById('language-selector-screen');
    const mainContent = document.getElementById('main-content');
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
            languageSelectorScreen.style.display = 'none';
            mainContent.style.display = 'block';
        });
    });

    function setLanguage(lang) {
        const data = siteData[lang];
        document.documentElement.lang = lang;
        document.title = data.pageTitle;

        // Update images
        document.getElementById('header-logo-img').src = data.headerLogoUrl;
        document.querySelector('.hero-logo-img').src = data.heroLogoUrl;

        // Update trailer URL
        document.querySelector('#trailer iframe').src = data.trailerUrl;

        // Update static text
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (data.translations[key]) {
                element.textContent = data.translations[key];
            }
        });
        
        // Repopulate dynamic content
        populateTitleList(lang);
        populateCharacters(lang);
        populateGameDetails(lang);
    }
    
    // --- LIVE DATE & TIME ---
    function updateLiveDateTime() {
        const container = document.getElementById('live-datetime-container');
        if (!container) return;
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const date = now.toLocaleDateString('en-US', options);
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        container.textContent = `${date} | ${time}`;
    }

    // --- DYNAMIC CONTENT GENERATION ---
    function populateTitleList(lang) {
        const container = document.getElementById('title-grid-container');
        const titles = siteData[lang].gameTitles;
        if (!container || !titles) return;
        container.innerHTML = ''; // Clear previous content
        titles.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title}">
                <p>${game.title}</p>`;
            container.appendChild(card);
        });
    }

    function populateCharacters(lang) {
        const container = document.getElementById('character-grid-container');
        const characters = siteData[lang].characters;
        if (!container || !characters) return;
        container.innerHTML = ''; // Clear previous content
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
    
    function populateGameDetails(lang) {
        const container = document.getElementById('game-details-list');
        const translations = siteData[lang].translations;
        if (!container) return;
        container.innerHTML = ''; // Clear existing details
        gameDetails.forEach(detail => {
            const listItem = document.createElement('li');
            const label = translations[detail.label_key] || detail.label_key;
            const value = detail.value_key ? (translations[detail.value_key] || detail.value_key) : detail.value;
            listItem.innerHTML = `<strong>${label}:</strong> ${value}`;
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

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');
    if (menuToggle && navWrapper) {
        menuToggle.addEventListener('click', () => navWrapper.classList.toggle('active'));
        navWrapper.querySelectorAll('ul li a').forEach(link => {
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
            backgroundMusic.play().catch(() => {
                console.log("Autoplay blocked. User interaction required.");
                document.body.addEventListener('click', playAudio, { once: true });
            });
        }
    }

    // --- INITIALIZATION ---
    updateLiveDateTime();
    setInterval(updateLiveDateTime, 1000);
    playAudio();
});
