
const products = [
    // --- ELF BAR RAYA D3 100 zł 5% ---
    { name: "Apple Peach", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/APPLE PEACH.png" },
    { name: "Blackberry Cranberry", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/BLACBERRYCRANBERRY.png" },
    { name: "Blackberry Pomegranate Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/BLACBERRY POMEGRANATE CHERRY.png" },
    { name: "Strawberry Raspberry Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/strawberru raspberry cherry.png" },
    { name: "Strawberry Watermelon", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/strawberry watermelon.png" },
    { name: "Blue Razz Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/BLUERAZE ICE.png" },
    { name: "Grape Mint", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/GRAPE MINT.png" },
    { name: "Lemon Lime Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/LEMON LIME ICE.png" },
    { name: "Pineapple Mango Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/pineapple mango ice.png" },
    { name: "Strawberry Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/strawberry ice.png" },
    { name: "Grape Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/GRAPE CHERRY.png" },
    { name: "Watermelon Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/strawberry watermelon.png" },
    { name: "Strawberry Grape", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/STRAWBERRY GRAPE.png" },
    { name: "Alpine Mint", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/ALPINE MINT.png" },
    { name: "Grape Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/GRAPE ICE.png" },
    { name: "Double Apple", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/DOUBLE APPLE.png" },
    { name: "Kiwi Pineapple ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/kiwi pineapple ice.png" },
    { name: "Peach Berry", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 11_18_15.png" },
    { name: "Blueberry Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/BLUEBERRY ICE.png" },
    { name: "Kiwi Passion Fruit Guava", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/KIWI PASSION FRUIT GUAVA.png" },
    { name: "Peach Mango Watermelon", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/mango peach watermelon.png" },
    { name: "Blueberry Raspberry", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/BLUEBERRY RASPBERRY.png" },
    { name: "Watermelon Lemon", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/watermelon lemon.png" },
    { name: "Peach Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/peach ice.png" },
    { name: "VIMTO", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/VMT.png" },
    { name: "Watermelon Bubble Gum", brand: "Elf Bar Raya D3", category: "disposable", price: "100 zł", count: "5%", img: "images/watermelom buble gum.png" },

    // --- ELF BAR TRIO 120 zł 5% NEW ---
    { name: "Cool Menthol", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 06_58_45.png" },
    { name: "La Grape", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_00_29.png" },
    { name: "Pomegranate Blast", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_01_50.png" },
    { name: "Sour Strawberry Dragonfruit", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_35_47.png" },
    { name: "Sakura Grape", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_00_29.png" },
    { name: "Peach Twist", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/09aa7d03-8e36-4039-bf39-8238ccaebd5f.png" },
    { name: "Sour Apple Ice", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/ff73da41-6d8c-43e6-ab27-fe0989bae0ce.png" },
    { name: "Raspberry Watermelon", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/d1620535-3809-4d95-b0db-5cac5a3eda01.png" },
    { name: "Pineapple Lime", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/833ce5ea-885a-47a5-baf4-c3bed0d78bd5.png" },
    { name: "Strawberry Orange Lime", brand: "Elf Bar Trio", category: "disposable", price: "120 zł", count: "5%", img: "images/1248e4ce-afa0-4bd9-9001-4bff0b1331da.png" },

    // --- ELFLIQ 30 ML (50MG) ---
    { name: "Watermelon Cherry", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000070bc7243a5c621a8002736b5.png" },
    { name: "Strawberry Cherry Lemon", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000000eac7243b0fe1f1173ef01ca.png" },
    { name: "Strawberry Banana", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000039f07243a6b2128cb0ba3bbb.png" },
    { name: "Pink Lemonade Soda", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000006f287243b29140d1b114ee99.png" },
    { name: "Green Grape Rose", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000022f47243904c348b025b1a4e.png" },
    { name: "Cherry Lemon Peach", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000007a347246bca76eb8bcdc9d2a.png" },
    { name: "Blueberry Raspberry Pomegranate", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000b23072438eb5dc06feca395e.png" },
    { name: "Blue Razz Ice", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000f7bc7246b6dd3b4eae832a74.png" },
    { name: "Pineapple Colada", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000348c7246b59b0684f714ed37.png" },
    { name: "Jasmine Raspberry", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000a9d87243b1e4a9635c455a8d.png" },
    { name: "Grape Cherry", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000f6587243bdff5116194e50ea.png" },
    { name: "Double Apple", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000408872438738fb1464da858f.png" },
    { name: "Cool Mint", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000ecfc720a804c80a40dc00cf3.png" },
    { name: "Blueberry Rose Mint", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000fab0724382a1b9fa969fcafc.png" },
    { name: "Apple Pear", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000005df4720ab17604e5bee73ccd.png" },
    { name: "Cherry Cola", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000009c0c720ab6942a924df3ff70.png" },
    { name: "Peach Ice", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000a5a0724682ab399552ddc846.png" },
    { name: "Strawberry Kiwi", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000035147246ba4615b0c4b1f082.png" },
    { name: "Blackcurrant Aniseed", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000007a14720aac0e112586f79740.png" },
    { name: "Pina Colada", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000008ab07246841ec68d4caefba6.png" },
    { name: "Rhubarb Snow", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000074e0720aa1aa1c1e21c82494.png" },
    { name: "Strawberry Raspberry Cherry Ice", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000a6047243b32ccf643eaad08c.png" },
    { name: "Blackberry Lemon", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000001e87246a3cb996075fe2783.png" },
    { name: "ELF Jack", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000063087246a213c891cba657ff.png" },
    { name: "Blue Razz Lemonade", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000d8b47246a181f0aca80d07f4.png" },
    { name: "Blueberry", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000008c07243b0104279ef258550.png" },
    { name: "Blueberry Sour Raspberry", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000003ae8720a95897345eb1547c8.png" },
    { name: "Cherry", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000422872468bd1391b1c3ba3ef.png" },
    { name: "Elfbull Ice", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000009fb87243b7e5722b9e992b55.png" },
    { name: "Grape", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000d8947246aac89926eca679ee.png" },
    { name: "Pink Lemonade", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000098d8724685af4eb58c37e53e.png" },
    { name: "Spearmint", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000002ec072438e3487582908a69b.png" },
    { name: "Watermelon", brand: "ELFLIQ", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000008c80720ab3efedf228401e62.png" },

    // --- VOZOL PRIME 30 ML (50MG) NEW ---
    { name: "Watermelon Ice", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000461c720a8297ac05719128ac.png" },
    { name: "Blue Razz Lemon", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000002e64720a8f970843ef6e439e.png" },
    { name: "Kiwi Passion Fruit Guava", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000eae0724392dcb5e16ce788b7.png" },
    { name: "Mint Ice", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000091387243a52bd40a7aa5d4d0.png" },
    { name: "Purple Candy", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000035d472438206eae6dbc08fa3.png" },
    { name: "Lavafire", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/IMG_20260412_223015_436.png" },
    { name: "Berry", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000f9d072468f5b0cdd7282629c.png" },
    { name: "Pineapple Passion Fruit Lime", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000725472439b9cc727c71fe32d.png" },
    { name: "Peach Ice", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000661c720abc1510def943bcd6.png" },
    { name: "Perfume Lemon", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000006594724390192094f95d22b9.png" },
    { name: "Blueberry Watermelon", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/a5e04c3e-ff33-4aba-afe9-ef051cd0964a.png" },
    { name: "Pomegranate Lemonade", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000096f8720a92268bdeaa9137c7.png" },
    { name: "Berry Peach", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_00000000ec7872469b3ad3613d1030d7.png" },
    { name: "Cherry Cola", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000007eec7243b07656ee684265b0.png" },
    { name: "Love 777", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_0000000060547243aaa3422e5d07e3c6.png" },
    { name: "Strawberry Watermelon", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000000c9472438ecde17493b1aae0.png" },
    { name: "Grape Ice", brand: "VOZOL PRIME", category: "liquid", price: "55 zł", count: "50mg", img: "images/file_000000003ff472439cf2a06d4f1341bd.png" }
];


function toggleMenu() {
    // Ищем элементы по тем ID, которые ты указал в HTML
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    
    // Переключаем класс active
    menu.classList.toggle('active');
    
    // Если overlay существует, тоже переключаем
    if (overlay) {
        overlay.classList.toggle('active');
    }

    // Запрещаем скролл страницы, когда меню открыто
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
// 1. НАХОДИМ ЭЛЕМЕНТЫ И ДОБАВЛЯЕМ СОБЫТИЯ (Вставь это в конец файла)
document.addEventListener('DOMContentLoaded', () => {
    const cartWrapper = document.querySelector('.cart-wrapper');
    if (cartWrapper) {
        // Когда мышка заходит в зону корзины
        cartWrapper.addEventListener('mouseenter', showCart);
        // Когда мышка уходит
        cartWrapper.addEventListener('mouseleave', hideCart);
    }
});

// 2. САМИ ФУНКЦИИ ПОКАЗА (Проверь, чтобы названия классов совпадали с CSS)
function showCart() {
    const popup = document.getElementById('cart-popup');
    if (popup) {
        popup.style.display = 'block'; // Принудительно показываем
        // Если у тебя в CSS анимация через класс, раскомментируй строку ниже:
        // popup.classList.add('visible'); 
        renderCartPopup(); // Твоя функция отрисовки товаров
    }
}

function hideCart() {
    const popup = document.getElementById('cart-popup');
    if (popup) {
        popup.style.display = 'none'; // Скрываем
        // popup.classList.remove('visible');
    }
}

// Обновленная функция счетчиков
function updateCounterDisplay() {
    const cart = JSON.parse(localStorage.getItem('kaif_cart')) || [];
    
    // 1. Счетчик на иконке (желтый круг)
    const badge = document.getElementById('cart-counter');
    if (badge) {
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
    
    // 2. Текст внутри выпадающего окна (например: "2 ТОВАРОВ")
    const popupText = document.getElementById('cart-items-count');
    if (popupText) {
        popupText.innerText = `${cart.length} ТОВАРОВ`;
    }
}

// Показать корзину
function showCart() {
    const popup = document.getElementById('cart-popup');
    if(popup) {
        popup.classList.add('visible');
        renderCartPopup(); // Сразу обновляем список товаров
    }
}

// Скрыть корзину
function hideCart() {
    const popup = document.getElementById('cart-popup');
    if(popup) popup.classList.remove('visible');
}

// ОЧИСТКА КОРЗИНЫ
function clearCart(event) {
    if (event) event.stopPropagation(); // Чтобы окно не закрылось сразу
    
    console.log("Нажата очистка");
    
    // 1. Очищаем массив в памяти
    cart = [];
    // 2. Очищаем в хранилище браузера
    localStorage.removeItem('kaif_cart');
    
    // 3. Обновляем всё на экране
    updateCounterDisplay(); 
    renderCartPopup();
}

// Обновление списка товаров внутри всплывающего окна
function renderCartPopup() {
    const list = document.getElementById('cart-items-list');
    const emptyMsg = document.getElementById('cart-empty-msg');
    const countText = document.getElementById('cart-items-count');
    
    const currentCart = JSON.parse(localStorage.getItem('kaif_cart')) || [];
    
    if (countText) countText.innerText = `${currentCart.length} ТОВАРОВ`;

    if (currentCart.length === 0) {
        if (list) list.innerHTML = '';
        if (emptyMsg) emptyMsg.style.display = 'block';
    } else {
        if (emptyMsg) emptyMsg.style.display = 'none';
        if (list) {
            list.innerHTML = currentCart.map(item => `
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px; border-bottom:1px solid #111; padding-bottom:10px;">
                    <img src="${item.img}" style="width:40px; height:40px; object-fit:contain;">
                    <div style="flex-grow:1;">
                        <div style="color:#fff; font-size:13px;">${item.name}</div>
                        <div style="color:#e6b130; font-size:12px;">${item.price} ₽</div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Не забудь вызвать это при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateCounterDisplay();
});
// --- 2. ОТРИСОВКА КАТАЛОГА (С ДОБАВЛЕНИЕМ КЛАССОВ) ---
function renderCatalog(items) {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<p id="no-products" style="grid-column: 1/5; text-align:center; padding:50px; color:#666;">Товары не найдены</p>`;
        return;
    }

    // ВАЖНО: Мы добавляем ${p.category} в class="card ..."
    grid.innerHTML = items.map(p => `
        <div class="card ${p.category}">
            <div class="card-img-container">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="card-info">
                <div class="card-title">${p.name}</div>
                <div class="card-price-row">
                    <div class="card-price">${p.price} ₽</div>
                    <button class="add-btn" onclick="addToCart('${p.name}', '${p.price}', '${p.img}')">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderHome() {
    const homeGrid = document.getElementById('home-products');
    if (!homeGrid) return;

    const popular = products.slice(0, 5);
    homeGrid.innerHTML = popular.map(p => `
        <div class="card">
            <div class="img-stub" style="height:150px; background:#111; border-radius:8px; margin-bottom:12px; display:flex; align-items:center; justify-content:center; color:#333;">TOP</div>
            <h3>${p.name}</h3>
            <p style="color: #e6b130;">${p.price} ₽</p>
        </div>
    `).join('');
}

// --- 3. ФУНКЦИЯ ФИЛЬТРА (ИСПРАВЛЕННАЯ) ---
function setFilter(categoryType) {
    console.log("Фильтр по:", categoryType);
    let filtered;

    if (categoryType === 'all') {
        filtered = products;
    } else {
        // Теперь p.category точно существует
        filtered = products.filter(p => p.category === categoryType);
    }

    renderCatalog(filtered);

    // Подсветка кнопок
    document.querySelectorAll('.filter-item').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick') === `setFilter('${categoryType}')`) {
            btn.classList.add('active');
        }
    });
}

// Функция фильтрации по брендам (Elf Bar, Vozol и т.д.)
function filterByBrand(brandName) {
    if (brandName === 'all') {
        renderCatalog(products);
    } else {
        const filtered = products.filter(p => p.brand === brandName);
        renderCatalog(filtered);
    }
    
    // Обновление активного класса для кнопок брендов
    const buttons = document.querySelectorAll('.brand-mini-btn');
    buttons.forEach(btn => {
        if(btn.getAttribute('onclick') === `filterByBrand('${brandName}')`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    scrollToTop();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalog-grid')) {
        renderCatalog(products);
    }
    
    if (document.getElementById('home-products')) {
        renderHome();
    }
});








// Используем ОДИНАКОВОЕ имя ключа для всех страниц
let cart = JSON.parse(localStorage.getItem('kaif_cart')) || [];

// Сразу при загрузке обновляем цифру на корзине
document.addEventListener('DOMContentLoaded', () => {
    updateCounterDisplay();
});
















function updateCounterDisplay() {
    // В твоем HTML ID именно 'cart-count'
    const counter = document.getElementById('cart-count');
    if (counter) {
        counter.innerText = cart.length;
        // Показываем, только если больше 0
        counter.style.display = cart.length > 0 ? 'inline-block' : 'none';
        console.log("Счетчик обновлен:", cart.length);
    } else {
        console.error("Элемент 'cart-count' не найден в HTML!");
    }
}

function showToast(message) {
    // Ищем или создаем блок уведомления
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    // Скрываем через 2 секунды
    setTimeout(() => {
        toast.style.visibility = "hidden";
        toast.style.opacity = "0";
    }, 2000);
}



// 1. ДАННЫЕ О ТОВАРАХ (МЕНЯЕМ ИХ ЗДЕСЬ)
// Важно: Пути к фото в img/ должны совпадать!
const productData = [
    {
        title: "CHASER For Pods",
        price: "55.00",
        description: "Premium Blueberry Mint Liquid (55 zł, 50mg nicotine). Сладкая черника с холодком.",
        image: "img/prod1.png" // Фото Blueberry
    },
    {
        title: "CHASER Mix",
        price: "25.00",
        description: "Sweet Strawberry Ice Liquid (10ml, 50mg nicotine). Клубничный микс.",
        image: "img/prod2.png" // Фото Strawberry
    },
    {
        title: "Baron 77mg",
        price: "30.00",
        description: "Classic Mint Nicotine Pouches. Крепкая мятная жидкость.",
        image: "img/prod3.png" // Фото Baron
    }
];

// Изначально выбран товар с индексом 0
let currentSelectedIndex = 0;

// 2. Функция для переключения вкусов
function selectVariant(index) {
    currentSelectedIndex = index;
    const data = productData[index];

    // Находим элементы на странице
    const mainImg = document.getElementById('main-product-img');
    const titleEl = document.getElementById('product-title');
    const priceEl = document.getElementById('product-price');
    const descEl = document.getElementById('product-description');
    
    // МЕНЯЕМ ДАННЫЕ
    mainImg.src = data.image; // Меняем фото
    titleEl.innerText = data.title; // Меняем название
    descEl.innerText = data.description; // Меняем описание
    priceEl.innerText = data.price + " zł"; // Меняем цену
    
    // ОБНОВЛЯЕМ АКТИВНЫЕ КНОПКИ (Убираем "active" у всех, добавляем нужной)
    const buttons = document.querySelectorAll('.flavor-btn');
    buttons.forEach((btn, i) => {
        if(i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function addCurrentToCart() {
    // Берем данные текущего выбранного товара из массива
    const data = productData[currentSelectedIndex];
    
    cart.push({
        name: data.title,
        price: parseFloat(data.price),
        img: data.image
    });

    localStorage.setItem('kaif_cart', JSON.stringify(cart));
    updateCounterDisplay();
    
    alert(`Товар ${data.title} добавлен в корзину!`);
}

function updateCounterDisplay() {
    const counter = document.getElementById('cart-counter');
    if(counter) counter.innerText = cart.length;
}

// Функция, которая делает саму фильтрацию
function applyUrlFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');

    if (cat) {
        console.log("URL фильтр запущен для:", cat);
        
        // Ждем появления карточек в DOM (максимум 2 секунды)
        let attempts = 0;
        const checkExist = setInterval(() => {
            const cards = document.querySelectorAll('.card');
            attempts++;

            if (cards.length > 0) {
                console.log("Карточки найдены, фильтруем...");
                clearInterval(checkExist);
                setFilter(cat); // Твоя функция фильтрации
            } 
            
            if (attempts > 20) { // Если за 2 сек товары не появились - отключаемся
                clearInterval(checkExist);
                console.log("Товары не подгрузились вовремя");
            }
        }, 100);
    }
}

function setFilter(category) {
    console.log("Запуск фильтра для мобилки:", category);
    
    // 1. Ищем ВСЕ карточки (и обычные, и те, что могут быть скрыты)
    const cards = document.querySelectorAll('.card');
    
    if (cards.length === 0) {
        console.error("Ошибка: Карточки товаров не найдены в DOM!");
        return;
    }

    cards.forEach(card => {
        // Проверяем: либо 'all', либо наличие класса категории
        // Мы используем classList.contains — это самый надежный метод
        if (category === 'all' || card.classList.contains(category)) {
            card.style.setProperty('display', 'flex', 'important');
        } else {
            card.style.setProperty('display', 'none', 'important');
        }
    });

    // 2. Меняем заголовок (только на мобилке, где есть dynamic-title)
    const dynamicTitle = document.getElementById('dynamic-title');
    if (dynamicTitle) {
        // Берем текст из кнопки, которая вызвала функцию
        // Ищем через [onclick*="..."], чтобы точно найти ту самую кнопку
        const clickedBtn = document.querySelector(`[onclick*="setFilter('${category}')"]`);
        if (clickedBtn) {
            let text = clickedBtn.innerText.replace(/[0-9]/g, '').replace('///', '').trim();
            dynamicTitle.innerText = text.toUpperCase();
        }
    }



}





// Запускаем проверку ссылки сразу при загрузке
window.addEventListener('DOMContentLoaded', applyUrlFilter);

function searchProducts() {
    let input = document.getElementById('catalog-search').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Ищем название внутри заголовка карточки
        let name = card.querySelector('.card-title').innerText.toLowerCase();
        
        if (name.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}








document.addEventListener('DOMContentLoaded', function() {
    // Функция для обновления заголовка
    function updateMobileTitle(text) {
        const titleElement = document.getElementById('dynamic-title');
        if (titleElement) {
            // Убираем лишние цифры и спецсимволы, оставляем только текст
            let cleanText = text.replace(/[0-9]/g, '').replace('///', '').trim();
            titleElement.innerText = cleanText.toUpperCase() || 'ВСЕ КАТЕГОРИИ';
        }
    }

    // Ловим клики по категориям (Все, Жидкости, Одноразки)
    const categoryButtons = document.querySelectorAll('.filter-item, .all-categories-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            updateMobileTitle(this.innerText);
        });
    });

    // Ловим клики по брендам
    const brandButtons = document.querySelectorAll('.brand-mini-btn');
    brandButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Если нажали на бренд "Все", лучше написать "БРЕНДЫ" или название категории
            if (this.innerText.trim().toUpperCase() === 'ВСЕ') {
                updateMobileTitle('ВСЕ БРЕНДЫ');
            } else {
                updateMobileTitle(this.innerText);
            }
        });
    });
});



function searchProducts() {
    // Получаем текст из поиска
    let input = document.getElementById('catalog-search').value.toLowerCase().trim();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Ищем название внутри карточки
        let name = card.querySelector('.card-title').innerText.toLowerCase();
        
        if (name.includes(input)) {
            // Показываем карточку
            card.style.setProperty('display', 'flex', 'important');
        } else {
            // Скрываем карточку
            card.style.setProperty('display', 'none', 'important');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('catalog-search');

    if (searchInput) {
        // Слушаем ввод текста (работает на всех устройствах)
        searchInput.addEventListener('input', function() {
            searchProducts(); 
        });

        // Для надежности на мобилках: срабатывает, когда нажимают "Enter" или "Go"
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
                this.blur(); // Скрывает клавиатуру после нажатия Enter
            }
        });
    }
});

// --- ИСПРАВЛЕННАЯ ОТРИСОВКА КАТАЛОГА ---
function renderCatalog(items) {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<p id="no-products" style="grid-column: 1/5; text-align:center; padding:50px; color:#666;">Товары не найдены</p>`;
        return;
    }

    // УБРАЛ СИМВОЛ "₽", так как валюта уже есть в p.price
    grid.innerHTML = items.map(p => `
        <div class="card ${p.category}">
            <div class="card-img-container">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="card-info">
                <div class="card-title">${p.name}</div>
                <div class="card-price-row">
                    <div class="card-price">${p.price}</div> 
                    <button class="add-btn" onclick="addToCart('${p.name}', '${p.price}', '${p.img}')">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

(function () {
  /* ──────────────────────────────────────────
     1. INJECT CSS
  ────────────────────────────────────────── */
  const css = `
    /* ── Cart link in navbar ── */
    .ks-cart-link {
      display: inline-flex !important;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: inherit;
      position: relative;
    }
    .ks-cart-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ks-cart-icon svg {
      fill: none;
      stroke: #f5c518;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
      width: 26px;
      height: 26px;
      transition: transform 0.3s ease;
    }
    .ks-cart-link:hover .ks-cart-icon svg {
      transform: scale(1.15);
    }
    .ks-cart-badge {
      position: absolute;
      top: -8px;
      left: 14px;
      background: #f5c518;
      color: #000;
      font-size: 10px;
      font-weight: 900;
      min-width: 18px;
      height: 18px;
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      line-height: 1;
      pointer-events: none;
      transition: transform 0.15s ease;
    }
    .ks-cart-badge.ks-pop {
      animation: ksBadgePop 0.4s cubic-bezier(0.36,0.07,0.19,0.97);
    }
    @keyframes ksBadgePop {
      0%   { transform: scale(1); }
      30%  { transform: scale(1.7); }
      60%  { transform: scale(0.85); }
      100% { transform: scale(1); }
    }
    .ks-cart-icon.ks-shake svg {
      animation: ksIconShake 0.5s ease;
    }
    @keyframes ksIconShake {
      0%   { transform: rotate(0deg) scale(1); }
      20%  { transform: rotate(-12deg) scale(1.2); }
      40%  { transform: rotate(10deg) scale(1.15); }
      60%  { transform: rotate(-6deg) scale(1.1); }
      80%  { transform: rotate(4deg) scale(1.05); }
      100% { transform: rotate(0deg) scale(1); }
    }

    /* ── Flying particle ── */
    .ks-fly-particle {
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(245,197,24,0.6);
      border: 2px solid #f5c518;
      transition: none;
      opacity: 1;
    }
    .ks-fly-particle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .ks-fly-particle.ks-no-img {
      background: #f5c518;
    }

    /* ── Add button flash ── */
    .ks-btn-flash {
      animation: ksBtnFlash 0.35s ease forwards !important;
    }
    @keyframes ksBtnFlash {
      0%   { background: #f5c518; transform: scale(1); }
      40%  { background: #5aff8a; transform: scale(0.85); }
      70%  { background: #5aff8a; transform: scale(1.1); }
      100% { background: #f5c518; transform: scale(1); }
    }

    /* ── Ripple on + button ── */
    .ks-ripple-wrap {
      position: relative;
      overflow: hidden;
    }
    .ks-ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      transform: scale(0);
      animation: ksRipple 0.55s linear;
      pointer-events: none;
    }
    @keyframes ksRipple {
      to { transform: scale(4); opacity: 0; }
    }

    /* ── Toast ── */
    .ks-toast {
      position: fixed;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%) translateY(80px);
      background: #111;
      border: 1px solid #f5c518;
      color: #fff;
      padding: 11px 22px;
      border-radius: 30px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.03em;
      white-space: nowrap;
      z-index: 99998;
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275),
                  opacity 0.35s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      pointer-events: none;
    }
    .ks-toast.ks-toast-show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    .ks-toast-icon {
      width: 18px; height: 18px;
      background: #f5c518;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .ks-toast-icon svg {
      width: 11px; height: 11px;
      stroke: #000; stroke-width: 2.5;
      fill: none; stroke-linecap: round; stroke-linejoin: round;
    }

    /* ── Sparkles ── */
    .ks-sparkle {
      position: fixed;
      pointer-events: none;
      z-index: 99999;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #f5c518;
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ──────────────────────────────────────────
     2. UPGRADE CART LINK
  ────────────────────────────────────────── */
  function upgradeCartLink() {
    // Find all cart links (href includes cart.html or корзина)
    const links = Array.from(document.querySelectorAll('a[href]')).filter(a =>
      a.href.includes('cart.html') || a.textContent.trim().toLowerCase().startsWith('корзина')
    );

    links.forEach(link => {
      link.classList.add('ks-cart-link');

      // Extract count from text
      const text = link.textContent.trim();
      const match = text.match(/\d+/);
      const count = match ? parseInt(match[0]) : 0;

      // Clear and rebuild
      link.innerHTML = `
        <span class="ks-cart-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </span>
        <span class="ks-cart-text" style="font-weight:600;font-size:14px;">Корзина</span>
        <span class="ks-cart-badge">${count}</span>
      `;

      link.dataset.ksCart = 'true';
    });
  }

  /* ──────────────────────────────────────────
     3. TOAST
  ────────────────────────────────────────── */
  let toastEl = null;
  let toastTimer = null;

  function showToast(name) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'ks-toast';
      toastEl.innerHTML = `
        <span class="ks-toast-icon">
          <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
        </span>
        <span class="ks-toast-msg"></span>
      `;
      document.body.appendChild(toastEl);
    }
    toastEl.querySelector('.ks-toast-msg').textContent =
      (name ? `«${name}» добавлен` : 'Товар добавлен') + ' в корзину';

    clearTimeout(toastTimer);
    toastEl.classList.add('ks-toast-show');
    toastTimer = setTimeout(() => toastEl.classList.remove('ks-toast-show'), 2400);
  }

  /* ──────────────────────────────────────────
     4. SPARKLES
  ────────────────────────────────────────── */
  function spawnSparkles(x, y) {
    const colors = ['#f5c518', '#ffe066', '#fff', '#ffaa00'];
    for (let i = 0; i < 8; i++) {
      const s = document.createElement('div');
      s.className = 'ks-sparkle';
      const size = 4 + Math.random() * 6;
      s.style.cssText = `
        left:${x}px; top:${y}px;
        width:${size}px; height:${size}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        transform:translate(-50%,-50%);
        transition: none;
      `;
      document.body.appendChild(s);

      const angle = (Math.random() * 360) * (Math.PI / 180);
      const dist = 30 + Math.random() * 50;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      requestAnimationFrame(() => {
        s.style.transition = `transform 0.55s ease-out, opacity 0.55s ease-out`;
        s.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`;
        s.style.opacity = '0';
      });

      setTimeout(() => s.remove(), 600);
    }
  }

  /* ──────────────────────────────────────────
     5. FLYING PARTICLE
  ────────────────────────────────────────── */
  function flyToCart(btn) {
    // Find cart icon
    const cartLink = document.querySelector('.ks-cart-link');
    if (!cartLink) return;

    const cartIconEl = cartLink.querySelector('.ks-cart-icon');
    const cartRect = (cartIconEl || cartLink).getBoundingClientRect();

    // Find product image
    const card = btn.closest('[class*="card"], [class*="product"], [class*="item"], li, article, .catalog-item') || btn.parentElement.parentElement;
    const img = card ? card.querySelector('img') : null;

    // Starting position (button center)
    const btnRect = btn.getBoundingClientRect();
    const startX = btnRect.left + btnRect.width / 2;
    const startY = btnRect.top + btnRect.height / 2;

    // Sparkles at start
    spawnSparkles(startX, startY);

    // Create particle
    const size = 48;
    const p = document.createElement('div');
    p.className = 'ks-fly-particle';
    if (img) {
      const clone = document.createElement('img');
      clone.src = img.src;
      p.appendChild(clone);
    } else {
      p.classList.add('ks-no-img');
    }

    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${startX - size/2}px;
      top:${startY - size/2}px;
    `;
    document.body.appendChild(p);

    // Animate along bezier curve manually using rAF
    const endX = cartRect.left + cartRect.width / 2 - size / 2;
    const endY = cartRect.top + cartRect.height / 2 - size / 2;
    const sx = startX - size / 2;
    const sy = startY - size / 2;

    // Control point for arc
    const cpx = (sx + endX) / 2 - 60;
    const cpy = Math.min(sy, endY) - 120;

    const duration = 680;
    let start = null;

    function ease(t) {
      return t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    }

    function step(ts) {
      if (!start) start = ts;
      const raw = (ts - start) / duration;
      const t = Math.min(raw, 1);
      const et = ease(t);

      // Quadratic bezier
      const x = (1-et)*(1-et)*sx + 2*(1-et)*et*cpx + et*et*endX;
      const y = (1-et)*(1-et)*sy + 2*(1-et)*et*cpy + et*et*endY;
      const scale = 1 - 0.55 * et;
      const opacity = t > 0.85 ? 1 - (t - 0.85) / 0.15 : 1;

      p.style.left = x + 'px';
      p.style.top  = y + 'px';
      p.style.transform = `scale(${scale})`;
      p.style.opacity = opacity;

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        p.remove();
        // Bounce cart badge
        const badge = document.querySelector('.ks-cart-badge');
        if (badge) {
          const cur = parseInt(badge.textContent) || 0;
          badge.textContent = cur + 1;
          badge.classList.remove('ks-pop');
          void badge.offsetWidth;
          badge.classList.add('ks-pop');
          setTimeout(() => badge.classList.remove('ks-pop'), 400);
        }
        // Shake cart icon
        const icon = document.querySelector('.ks-cart-icon');
        if (icon) {
          icon.classList.remove('ks-shake');
          void icon.offsetWidth;
          icon.classList.add('ks-shake');
          setTimeout(() => icon.classList.remove('ks-shake'), 500);
        }
        // Sparkles at cart
        spawnSparkles(cartRect.left + cartRect.width/2, cartRect.top + cartRect.height/2);
      }
    }

    requestAnimationFrame(step);
  }
/* ────────────────────────────────────────── 
6. INTERCEPT + BUTTONS (ФИНАЛЬНЫЙ ИСПРАВЛЕННЫЙ) 
────────────────────────────────────────── */ 
function addRipple(btn, e) { 
  btn.classList.add('ks-ripple-wrap'); 
  const r = document.createElement('span'); 
  r.className = 'ks-ripple'; 
  const rect = btn.getBoundingClientRect(); 
  const size = Math.max(rect.width, rect.height); 
  r.style.cssText = ` 
    width:${size}px; height:${size}px; 
    left:${e.clientX - rect.left - size/2}px; 
    top:${e.clientY - rect.top - size/2}px; 
  `; 
  btn.appendChild(r); 
  setTimeout(() => r.remove(), 600); 
} 

function interceptButtons() { 
  // Используем true для приоритетного перехвата
  document.addEventListener('click', function(e) { 
    // 1. Ищем кнопку, на которую нажали 
    const btn = e.target.closest('button, .btn, .plus, [class*="add"]'); 
    if (!btn) return; 

    // 2. ИСКЛЮЧАЕМ ЛЕВУЮ ПАНЕЛЬ (Фильтры и Бренды)
    // Если кнопка имеет классы твоих фильтров или находится внутри блока .filter — игнорируем
    const isFilter = btn.classList.contains('filter-item') || 
                     btn.classList.contains('all-categories-btn') || 
                     btn.closest('.filter') || 
                     btn.closest('aside');

    if (isFilter) {
      return; // Выходим, чтобы сработал твой стандартный фильтр setFilter()
    }

    // 3. Ищем контейнер товара (поднимаемся вверх до карточки) 
    let card = btn.parentElement; 
    while (card && !card.querySelector('img') && card !== document.body) { 
      card = card.parentElement; 
    } 
    
    // Если мы вышли за пределы карточки или не нашли картинку — это не товар
    if (!card || card === document.body) return; 

    // 4. СБОР ДАННЫХ (ищем внутри найденной карточки) 
    const nameEl = card.querySelector('h1, h2, h3, h4, .name, [class*="title"]'); 
    const priceEl = card.querySelector('[class*="price"]'); 
    const imgEl = card.querySelector('img'); 

    // Дополнительная проверка: если нет названия или цены — это не кнопка покупки
    if (!nameEl || !priceEl) return; 

    // Если это кнопка товара — останавливаем переход по ссылке
    e.preventDefault(); 
    e.stopPropagation();

    const name = nameEl.textContent.trim(); 
    const price = parseInt(priceEl.textContent.replace(/[^\d]/g, '')) || 0; 
    const img = imgEl ? imgEl.src : ''; 

    // 5. ЗАПИСЬ В LOCAL STORAGE (Тот же ключ kaif_cart для твоей корзины) 
    let cart = JSON.parse(localStorage.getItem('kaif_cart')) || []; 
    const existingItem = cart.find(item => item.name === name); 

    if (existingItem) { 
      existingItem.qty = (existingItem.qty || 1) + 1; 
    } else { 
      cart.push({ 
        name: name, 
        price: price, 
        img: img, 
        qty: 1 
      }); 
    } 
    localStorage.setItem('kaif_cart', JSON.stringify(cart)); 

    // 6. ЗАПУСК ЭФФЕКТОВ 
    btn.classList.remove('ks-btn-flash'); 
    void btn.offsetWidth; 
    btn.classList.add('ks-btn-flash'); 

    addRipple(btn, e); 
    
    // Запускаем полет в корзину 
    if (typeof flyToCart === 'function') { 
      flyToCart(btn); 
    } 

    // Показываем уведомление снизу 
    if (typeof showToast === 'function') { 
      setTimeout(() => showToast(name), 500); 
    }
  }, true); 
}
  /* ──────────────────────────────────────────
     7. INIT
  ────────────────────────────────────────── */
  function init() {
    upgradeCartLink();
    interceptButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();


function smoothMobileFilter() {
    const filter = document.querySelector('.filter');

    if (window.innerWidth <= 768 && filter) {
        let current = 0;
        let target = 0;

        filter.style.position = 'relative';

        window.addEventListener('scroll', () => {
            target = window.scrollY;
        });

        function animate() {
            // ПЛАВНОЕ ДОГОНЯНИЕ
            current += (target - current) * 0.07;

            filter.style.transform = `translateY(${current}px)`;

            requestAnimationFrame(animate);
        }

        animate();
    }
}

window.addEventListener('load', smoothMobileFilter);
window.addEventListener('resize', smoothMobileFilter);