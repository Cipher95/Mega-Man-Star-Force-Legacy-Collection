document.addEventListener('DOMContentLoaded', () => {
let currentLang = 'en'; // Default language
    // --- SITE DATA & TRANSLATIONS ---
    const siteData = {
        en: {
            pageTitle: "Mega Man Star Force Legacy Collection｜CAPCOM",
            headerLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_en.png",
            heroLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_en.png",
            trailerUrl: "trailer_en.mp4",
            specialArt: {
                imageUrl: "mv.webp",
                title: "Special Illustration",
                details: "This special piece for the Mega Man Star Force Legacy Collection was created by the original series character designer Yuji Ishihara and illustrator Shinsuke Komaki."
            },
            gameTitles: [
                { title: "MMSF: Leo", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title01_en.png", details: "One of the three original versions of Mega Man Star Force, focusing on the fiery power of the Fire Leo." },
                { title: "MMSF: Dragon", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title02_en.png", details: "One of the three original versions of Mega Man Star Force, featuring the wood-based power of the Green Dragon." },
                { title: "MMSF: Pegasus", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title03_en.png", details: "One of the three original versions of Mega Man Star Force, harnessing the icy abilities of the Ice Pegasus." },
                { title: "MMSF 2: Zerker × Ninja", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title04_en.png", details: "The sequel introduces Tribe-On transformations. This version allows merging the powers of the electrifying Zerker and the swift Ninja." },
                { title: "MMSF 2: Zerker × Saurian", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title05_en.png", details: "The sequel introduces Tribe-On transformations. This version allows merging the powers of the electrifying Zerker and the fiery Saurian." },
                { title: "MMSF 3: Black Ace", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title06_en.png", details: "The final chapter in the trilogy. This version offers the Noise Change ability focusing on the power of the Black Ace." },
                { title: "MMSF 3: Red Joker", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title07_en.png", details: "The final chapter in the trilogy. This version offers the Noise Change ability focusing on the might of the Red Joker." }
            ],
            characters: [
                { name: "Geo Stelar & Omega-Xis", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character01.png", details: "The protagonist of the series. Geo is a lonely boy who lost his father, but finds a new purpose after merging with the boisterous FM-ian, Omega-Xis, to become Mega Man." },
                { name: "Sonia Strumm", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character02.png", details: "A famous pop idol who struggles with the pressures of fame. She can Wave Change with the FM-ian Lyra to become Harp Note, a skilled and agile fighter." },
                { name: "Luna Platz", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character03.png", details: "The assertive and often bossy class president of Geo's class. She eventually becomes a key ally and a strong leader among her friends." },
                { name: "Bud Bison", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character04.png", details: "A large and boisterous boy with a big appetite. He can merge with the FM-ian Taurus to become the powerful Taurus Fire." },
                { name: "Zack Temple", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character05.png", details: "A highly intelligent and somewhat nerdy classmate of Geo. He is a skilled hacker and provides valuable intel to the group." }
            ],
            onlineFeatures: [
                { imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_online_ss01_en.jpg", altTextKey: "alt_network", titleKey: "online_img_network" },
                { imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_online_ss02_en.jpg", altTextKey: "alt_preferences", titleKey: "online_img_preferences" },
                { imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_online_ss03_en.jpg", altTextKey: "alt_rankings", titleKey: "online_img_rankings" }
            ],
            translations: {
                nav_about: "ABOUT", nav_trailer: "TRAILER", nav_title_list: "TITLE LIST", nav_online: "ONLINE", nav_characters: "CHARACTERS", nav_special_art: "SPECIAL ART", nav_details: "DETAILS",
                release_date: "March 27, 2026", about_title: "ABOUT THE SERIES", about_subtitle1: "What is Mega Man Star Force?",
                about_text1: "To celebrate Mega Man's 20th anniversary, the new titles Mega Man Star Force Pegasus, Leo, and Dragon were released simultaneously. They evolved the best features of the Battle Network series, adding a new 3D battle system and exciting gameplay mechanics.",
                about_subtitle2: "The World of Star Force", about_text2: "It is the year 220X. The world is connected by a network of EM Waves. Our protagonist, Geo Stelar, still mourning the disappearance of his astronaut father, has his life changed forever when he encounters a rogue FM-ian named Omega-Xis.",
                trailer_title: "EXTENDED ANNOUNCE TRAILER", title_list_title: "INCLUDED TITLES", online_title: "ENHANCED ONLINE FEATURES",
                online_text: "From battling rivals across the globe to trading BrotherBand cards, the powered-up online functions will let you experience the full power of the Mega Man Star Force network!",
                online_img_network: "Network",
                online_img_preferences: "Preferences",
                online_img_rankings: "Rankings",
                alt_network: "Online Network Battle",
                alt_preferences: "Online Preferences",
                alt_rankings: "Online Rankings",
                characters_title: "KEY CHARACTERS", special_art_title: "SPECIAL ART", details_title: "GAME DETAILS", detail_label_available: "Available", detail_label_players: "Players",
                detail_label_platforms: "Platforms", detail_label_rating: "Rating", detail_label_genre: "Genre", detail_label_note: "Note",
                detail_value_players: "1 player (up to 2 players online)", detail_value_rating: "ESRB E10+", detail_value_note1: "The screen is still in development.", detail_value_note2: "Crossplay and cross-save between platforms is not supported."
            }
        },
        ja: {
            pageTitle: "流星のロックマン レガシーコレクション｜CAPCOM",
            headerLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_ja.png",
            heroLogoUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title_ja.png",
            trailerUrl: "trailer_jp.mp4",
            specialArt: {
                imageUrl: "mv.webp",
                title: "特別イラスト",
                details: "「流星のロックマン レガシーコレクション」のこの特別な一枚は、原作シリーズのキャラクターデザイナーである石原雄二氏とイラストレーターの小牧信介氏によって制作されました。"
            },
            gameTitles: [
                { title: "流星のロックマン レオ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title01.png", details: "『流星のロックマン』の初代3バージョンの1つで、炎のレオの力を中心に展開します。" },
                { title: "流星のロックマン ドラゴン", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title02.png", details: "『流星のロックマン』の初代3バージョンの1つで、緑のドラゴンの木の力を特徴とします。" },
                { title: "流星のロックマン ペガサス", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title03.png", details: "『流星のロックマン』の初代3バージョンの1つで、氷のペガサスの能力を駆使します。" },
                { title: "流星のロックマン2 ベルセルク × シノビ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title04.png", details: "続編ではトライブオン変身が導入されます。このバージョンでは、電撃のベルセルクと素早いシノビの力を融合させることができます。" },
                { title: "流星のロックマン2 ベルセルク × ダイナソー", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title05.png", details: "続編ではトライブオン変身が導入されます。このバージョンでは、電撃のベルセルクと炎のダイナソーの力を融合させることができます。" },
                { title: "流星のロックマン3 ブラックエース", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title06.png", details: "三部作の最終章。このバージョンでは、ブラックエースの力を中心としたノイズチェンジ能力が提供されます。" },
                { title: "流星のロックマン3 レッドジョーカー", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/common/logo/logo_title07.png", details: "三部作の最終章。このバージョンでは、レッドジョーカーの力を中心としたノイズチェンジ能力が提供されます。" }
            ],
            characters: [
                { name: "星河 スバル & ウォーロック", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character01.png", details: "シリーズの主人公。父を失い孤独だったスバルは、騒々しいFM星人ウォーロックと融合してロックマンとなり、新たな目的を見つけます。" },
                { name: "響 ミソラ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character02.png", details: "名声のプレッシャーに苦しむ人気ポップアイドル。FM星人リブラとウェーブチェンジすることで、熟練した俊敏な戦士ハープ・ノートになります。" },
                { name: "白金 ルナ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character03.png", details: "スバルのクラスの積極的でしばしば威張りん坊な委員長。やがて重要な仲間となり、友人たちの間で強力なリーダーとなります。" },
                { name: "牛島 ゴン太", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character04.png", details: "食欲旺盛で大柄で騒々しい少年。FM星人タウルスと融合して強力なタウルス・ファイアになることができます。" },
                { name: "最小院 キザマロ", imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_character05.png", details: "スバルの非常に知的でややオタクなクラスメート。彼は熟練したハッカーであり、グループに貴重な情報を提供します。" }
            ],
            onlineFeatures: [
                { imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_online_ss01_ja-jp.jpg", altTextKey: "alt_network", titleKey: "online_img_network" },
                { imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_online_ss02_ja-jp.jpg", altTextKey: "alt_preferences", titleKey: "online_img_preferences" },
                { imageUrl: "https://www.capcom-games.com/megaman/starforce/assets/images/index/pic_online_ss03_ja-jp.jpg", altTextKey: "alt_rankings", titleKey: "online_img_rankings" }
            ],
            translations: {
                nav_about: "このシリーズについて", nav_trailer: "トレーラー", nav_title_list: "収録タイトル", nav_online: "オンライン", nav_characters: "キャラクター", nav_special_art: "スペシャルアート", nav_details: "詳細",
                release_date: "2026年3月27日発売予定", about_title: "シリーズについて", about_subtitle1: "流星のロックマンとは？",
                about_text1: "「ロックマン」20周年を記念して、新作『流星のロックマン ペガサス』、『レオ』、『ドラゴン』が同時発売されました。バトルネットワークシリーズの長所を進化させ、新しい3Dバトルシステムとエキサイティングなゲームプレイメカニクスを追加しました。",
                about_subtitle2: "流星の世界", about_text2: "西暦220X年。世界はEM波のネットワークで結ばれている。宇宙飛行士の父の失踪を悼む主人公、星河スバルは、はぐれFM星人ウォーロックと出会い、その人生を大きく変えることになる。",
                trailer_title: "拡張アナウンストレーラー", title_list_title: "収録タイトル", online_title: "強化されたオンライン機能",
                online_text: "世界中のライバルとの対戦からブラザーバンドカードの交換まで、パワーアップしたオンライン機能で『流星のロックマン』ネットワークのフルパワーを体験できます！",
                online_img_network: "ネットワーク",
                online_img_preferences: "各種設定",
                online_img_rankings: "ランキング",
                alt_network: "オンラインネットワークバトル",
                alt_preferences: "オンライン各種設定",
                alt_rankings: "オンラインランキング",
                characters_title: "主な登場人物", special_art_title: "スペシャルアート", details_title: "ゲーム詳細", detail_label_available: "発売日", detail_label_players: "プレイヤー数",
                detail_label_platforms: "プラットフォーム", detail_label_rating: "CERO", detail_label_genre: "ジャンル", detail_label_note: "備考",
                detail_value_players: "1人（オンライン最大2人）", detail_value_rating: "B（12歳以上対象）", detail_value_note1: "画面は開発中のものです。", detail_value_note2: "プラットフォーム間のクロスプレイおよびクロスセーブはサポートされていません。"
            }
        }
    };

    const gameDetails = [
        { label_key: "detail_label_available", value: "March 27, 2026" },
        { label_key: "detail_label_players", value_key: "detail_value_players" },
        { label_key: "detail_label_platforms", value: "Nintendo Switch™ / PlayStation®5 / PlayStation®4 / Xbox Series X|S / Xbox One / PC(Steam)" },
        { label_key: "detail_label_rating", value_key: "detail_value_rating" },
        { label_key: "detail_label_genre", value: "Action RPG" },
        { label_key: "detail_label_note", value_key: "detail_value_note1" },
        { label_key: "detail_label_note", value_key: "detail_value_note2" },
    ];

    // --- DOM ELEMENT REFERENCES ---
    const languageSelectorScreen = document.getElementById('language-selector-screen');
    const introVideoContainer = document.getElementById('intro-video-container');
    const introVideo = document.getElementById('capcom-intro');
    const mainContent = document.getElementById('main-content');
    const langButtons = document.querySelectorAll('.lang-btn');
    const specialArtContainer = document.getElementById('special-art-clickable-container');
    // Modal elements
    const modalOverlay = document.getElementById('details-modal-overlay');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalCloseBtn = document.getElementById('modal-close-btn');


    // --- LANGUAGE & INTRO SEQUENCE ---
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
            
            languageSelectorScreen.style.display = 'none';
            introVideoContainer.classList.add('is-visible');
            
            introVideo.play().catch(error => {
                console.error("Intro video autoplay failed:", error);
                showMainContent();
            });
        });
    });

    introVideo.addEventListener('ended', () => {
        showMainContent();
    });

    function showMainContent() {
        introVideoContainer.classList.remove('is-visible');
        mainContent.style.display = 'block';
        playAudio();
    }

    function setLanguage(lang) {
        currentLang = lang;
        const data = siteData[lang];
        document.documentElement.lang = lang;
        document.title = data.pageTitle;

        document.getElementById('header-logo-img').src = data.headerLogoUrl;
        document.querySelector('.hero-logo-img').src = data.heroLogoUrl;
        document.getElementById('special-art-img').src = data.specialArt.imageUrl;

        const trailerVideo = document.getElementById('announce-trailer');
        const trailerSource = document.getElementById('trailer-source');
        if (trailerVideo && trailerSource) {
            trailerSource.src = data.trailerUrl;
            trailerVideo.load();
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (data.translations[key]) {
                element.textContent = data.translations[key];
            }
        });
        
        populateTitleList(lang);
        populateCharacters(lang);
        populateGameDetails(lang);
        populateOnlineFeatures(lang); // ADDED: Call the new function here
    }
    
    // --- LIVE DATE & TIME ---
    function updateLiveDateTime() {
         const container = document.getElementById('live-datetime-container');
        if (!container) return;
        const now = new Date();
        let date, time;

        if (currentLang === 'ja') {
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            date = now.toLocaleDateString('ja-JP', dateOptions);
            time = now.toLocaleTimeString('ja-JP');
        } else {
            const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            date = now.toLocaleDateString('en-US', dateOptions);
            time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }

        container.textContent = `${date} | ${time}`;
    }

    // --- DYNAMIC CONTENT GENERATION ---
    function populateTitleList(lang) {
        const container = document.getElementById('title-grid-container');
        const titles = siteData[lang].gameTitles;
        if (!container || !titles) return;
        container.innerHTML = '';
        titles.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title}">
                <p>${game.title}</p>`;
            card.addEventListener('click', () => openModal(game.imageUrl, game.title, game.details));
            container.appendChild(card);
        });
    }

    function populateCharacters(lang) {
        const container = document.getElementById('character-grid-container');
        const characters = siteData[lang].characters;
        if (!container || !characters) return;
        container.innerHTML = '';
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
            card.addEventListener('click', () => openModal(char.imageUrl, char.name, char.details));
            container.appendChild(card);
        });
    }
    
    function populateOnlineFeatures(lang) {
        const container = document.querySelector('.online-images-grid');
        const features = siteData[lang].onlineFeatures;
        const translations = siteData[lang].translations;
        if (!container || !features) return;

        container.innerHTML = ''; // Clear existing content
        features.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'online-image-card';
            
            const altText = translations[feature.altTextKey] || '';

            card.innerHTML = `
                <img src="${feature.imageUrl}" alt="${altText}">
                <h4 data-key="${feature.titleKey}">${translations[feature.titleKey]}</h4>
            `;
            container.appendChild(card);
        });
    }
    
    function populateGameDetails(lang) {
        const container = document.getElementById('game-details-list');
        const translations = siteData[lang].translations;
        if (!container) return;
        container.innerHTML = '';
        gameDetails.forEach(detail => {
            const listItem = document.createElement('li');
            const label = translations[detail.label_key] || detail.label_key;
            const value = detail.value_key ? (translations[detail.value_key] || detail.value_key) : detail.value;
            listItem.innerHTML = `<strong>${label}:</strong> ${value}`;
            container.appendChild(listItem);
        });
    }
    
    // --- MODAL FUNCTIONS ---
    function openModal(image, title, details) {
        modalImage.src = image;
        modalImage.alt = title; 
        modalTitle.textContent = title;
        modalDetails.textContent = details;
        modalOverlay.classList.remove('modal-hidden');
    }

    function closeModal() {
        modalOverlay.classList.add('modal-hidden');
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // --- SPECIAL ART CLICK LISTENER ---
    specialArtContainer.addEventListener('click', () => {
        const artData = siteData[currentLang].specialArt;
        openModal(artData.imageUrl, artData.title, artData.details);
    });


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
});
