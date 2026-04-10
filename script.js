
const products = [
    // --- ELF BAR RAYA D3 25000 5% ---
    { name: "Apple Peach", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/APPLE PEACH.png" },
    { name: "Blackberry Cranberry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/BLACBERRYCRANBERRY.png" },
    { name: "Blackberry Pomegranate Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/BLACBERRY POMEGRANATE CHERRY.png" },
    { name: "Strawberry Raspberry Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/strawberru raspberry cherry.png" },
    { name: "Strawberry Watermelon", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/strawberry watermelon.png" },
    { name: "Blue Razz Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/BLUERAZE ICE.png" },
    { name: "Grape Mint", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/GRAPE MINT.png" },
    { name: "Lemon Lime Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/LEMON LIME ICE.png" },
    { name: "Pineapple Mango Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/pineapple mango ice.png" },
    { name: "Strawberry Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/strawberry ice.png" },
    { name: "Grape Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/GRAPE CHERRY.png" },
    { name: "Watermelon Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/strawberry watermelon.png" },
    { name: "Strawberry Grape", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/STRAWBERRY GRAPE.png" },
    { name: "Alpine Mint", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/ALPINE MINT.png" },
    { name: "Grape Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/GRAPE ICE.png" },
    { name: "Double Apple", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/DOUBLE APPLE.png" },
    { name: "Kiwi Pineapple ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/kiwi pineapple ice.png" },
    { name: "Peach Berry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 11_18_15.png" },
    { name: "Blueberry Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/BLUEBERRY ICE.png" },
    { name: "Kiwi Passion Fruit Guava", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/KIWI PASSION FRUIT GUAVA.png" },
    { name: "Peach Mango Watermelon", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/mango peach watermelon.png" },
    { name: "Blueberry Raspberry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/BLUEBERRY RASPBERRY.png" },
    { name: "Watermelon Lemon", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/watermelon lemon.png" },
    { name: "Peach Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/peach ice.png" },
    { name: "VIMTO", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/VMT.png" },
    { name: "Watermelon Bubble Gum", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/watermelom buble gum.png" },

    // --- ELF BAR TRIO 40000 5% NEW ---
    { name: "Cool Menthol", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 06_58_45.png" },
    { name: "La Grape", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_00_29.png" },
    { name: "Pomegranate Blast", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_01_50.png" },
    { name: "Sour Strawberry Dragonfruit", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_35_47.png" },
    { name: "Sakura Grape", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/ChatGPT Image 10 апр. 2026 г., 07_00_29.png" },
    { name: "Peach Twist", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/09aa7d03-8e36-4039-bf39-8238ccaebd5f.png" },
    { name: "Sour Apple Ice", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/ff73da41-6d8c-43e6-ab27-fe0989bae0ce.png" },
    { name: "Raspberry Watermelon", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/d1620535-3809-4d95-b0db-5cac5a3eda01.png" },
    { name: "Pineapple Lime", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/833ce5ea-885a-47a5-baf4-c3bed0d78bd5.png" },
    { name: "Strawberry Orange Lime", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/1248e4ce-afa0-4bd9-9001-4bff0b1331da.png" },

    // --- ELFLIQ 30 ML (50MG) ---
    { name: "Watermelon Cherry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Strawberry Cherry Lemon", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Strawberry Banana", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Pink Lemonade Soda", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Green Grape Rose", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Cherry Lemon Peach", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blueberry Raspberry Pomegranate", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blue Razz Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Pineapple Colada", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Jasmine Raspberry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Grape Cherry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Double Apple", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Cool Mint", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blueberry Rose Mint", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Apple Pear", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Cherry Cola", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Peach Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Strawberry Kiwi", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blackcurrant Aniseed", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Pina Colada", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Rhubarb Snow", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Strawberry Raspberry Cherry Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blackberry Lemon", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "ELF Jack", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blue Razz Lemonade", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blueberry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Blueberry Sour Raspberry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Cherry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Elfbull Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Grape", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Pink Lemonade", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Spearmint", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },
    { name: "Watermelon", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/2bcaee88-a8f1-4aa3-9bc0-b70d931b2388.png" },

    // --- VOZOL PRIME 30 ML (50MG) NEW ---
    { name: "Watermelon Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Blue Razz Lemon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Kiwi Passion Fruit Guava", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Mint Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Purple Candy", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Lavafire", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Berry", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Pineapple Passion Fruit Lime", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Peach Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Perfume Lemon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Blueberry Watermelon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Pomegranate Lemonade", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Berry Peach", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Cherry Cola", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Love 777", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Strawberry Watermelon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" },
    { name: "Grape Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/3e01adae-617e-499b-b434-0931733e6488.png" }
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

function addToCart(name, price, img) {
    console.log("Добавляю в корзину:", name, price); // Для проверки в консоли

    // 1. Очищаем цену (делаем из "1500 ₽" просто 1500)
    const cleanPrice = parseInt(price.toString().replace(/[^\d]/g, '')) || 0;

    // 2. Добавляем в массив
    cart.push({
        name: name,
        price: cleanPrice,
        img: img
    });

    // 3. Сохраняем в память браузера
    localStorage.setItem('kaif_cart', JSON.stringify(cart));

    // 4. Обновляем цифру на кнопке корзины
    updateCounterDisplay();

    // 5. Показываем уведомление
    showToast(`Товар "${name}" добавлен!`);
}

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
        description: "Premium Blueberry Mint Liquid (30ml, 50mg nicotine). Сладкая черника с холодком.",
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

// Твоя функция setFilter (обновленная)
function setFilter(category) {
    const cards = document.querySelectorAll('.card');
    let hasItems = false;

    cards.forEach(card => {
        // Проверяем: есть ли у карточки класс (liquid/disposable) 
        // ИЛИ смотрим на data-атрибут, если ты его используешь
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
            hasItems = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Убираем/показываем сообщение "Нет товаров"
    const grid = document.getElementById('catalog-grid');
    let msg = document.getElementById('no-products');

    if (!hasItems) {
        if (!msg) {
            grid.insertAdjacentHTML('beforeend', '<div id="no-products" style="grid-column: 1/-1; text-align:center; padding:50px; color:#555;">В данной категории товаров пока нет</div>');
        }
    } else if (msg) {
        msg.remove();
    }
    
    // Подсвечиваем активную кнопку в меню
    document.querySelectorAll('.filter-item').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-category') === category) btn.classList.add('active');
    });
}

// Запускаем проверку ссылки сразу при загрузке
window.addEventListener('DOMContentLoaded', applyUrlFilter);