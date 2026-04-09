
const products = [
    // --- ELF BAR RAYA D3 25000 5% ---
    { name: "Apple Peach", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "images/image" },
    { name: "Blackberry Cranberry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Blackberry Pomegranate Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Strawberry Raspberry Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Strawberry Watermelon", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Blue Razz Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Grape Mint", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Lemon Lime Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Pineapple Mango Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Strawberry Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Grape Cherry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Watermelon Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Strawberry Grape", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Alpine Mint", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Grape Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Double Apple", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Kiwi Pineapple ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Peach Berry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Blueberry Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Kiwi Passion Fruit Guava", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Peach Mango Watermelon", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Blueberry Raspberry", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Watermelon Lemon", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Peach Ice", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "VIMTO", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },
    { name: "Watermelon Bubble Gum", brand: "Elf Bar Raya D3", category: "disposable", price: "25000", count: "5%", img: "img/raya_d3.jpg" },

    // --- ELF BAR TRIO 40000 5% NEW ---
    { name: "Cool Menthol", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "images/image" },
    { name: "La Grape", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Pomegranate Blast", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Sour Strawberry Dragonfruit", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Sakura Grape", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Peach Twist", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Sour Apple Ice", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Raspberry Watermelon", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Pineapple Lime", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },
    { name: "Strawberry Orange Lime", brand: "Elf Bar Trio", category: "disposable", price: "40000", count: "5%", img: "img/trio.jpg" },

    // --- ELFLIQ 30 ML (50MG) ---
    { name: "Watermelon Cherry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "images/image" },
    { name: "Strawberry Cherry Lemon", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Strawberry Banana", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Pink Lemonade Soda", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Green Grape Rose", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Cherry Lemon Peach", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blueberry Raspberry Pomegranate", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blue Razz Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Pineapple Colada", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Jasmine Raspberry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Grape Cherry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Double Apple", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Cool Mint", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blueberry Rose Mint", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Apple Pear", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Cherry Cola", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Peach Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Strawberry Kiwi", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blackcurrant Aniseed", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Pina Colada", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Rhubarb Snow", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Strawberry Raspberry Cherry Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blackberry Lemon", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "ELF Jack", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blue Razz Lemonade", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blueberry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Blueberry Sour Raspberry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Cherry", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Elfbull Ice", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Grape", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Pink Lemonade", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Spearmint", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },
    { name: "Watermelon", brand: "ELFLIQ", category: "liquid", price: "30ml", count: "50mg", img: "img/elfliq.jpg" },

    // --- VOZOL PRIME 30 ML (50MG) NEW ---
    { name: "Watermelon Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "images/image" },
    { name: "Blue Razz Lemon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Kiwi Passion Fruit Guava", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Mint Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Purple Candy", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Lavafire", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Berry", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Pineapple Passion Fruit Lime", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Peach Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Perfume Lemon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Blueberry Watermelon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Pomegranate Lemonade", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Berry Peach", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Cherry Cola", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Love 777", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Strawberry Watermelon", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" },
    { name: "Grape Ice", brand: "VOZOL PRIME", category: "liquid", price: "30ml", count: "50mg", img: "img/vozol.jpg" }
];;
const brands = ['Elf Bar', 'Lost Mary', 'HQD', 'Vaporesso'];

for (let i = 1; i <= 50; i++) {
    let type = i <= 20 ? 'liquid' : (i <= 40 ? 'disposable' : 'soon');
    let brand = brands[Math.floor(Math.random() * brands.length)]; 
    
    products.push({
        id: i,
        brand: brand,
        name: type === 'liquid' ? `${brand} Жижа #${i}` : (type === 'disposable' ? `${brand} Одноразка #${i}` : `Скоро в продаже`),
        price: 1500 + (i * 10),
        type: type
    });
}

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
function renderCatalog(items) {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `
            <p style="grid-column: 1/5; text-align:center; padding:50px; color:#666;">
                Товары не найдены
            </p>`;
        return;
    }

    grid.innerHTML = items.map(p => `
        <div class="card">
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

function setFilter(categoryType) {
    let filtered;

    if (categoryType === 'all') {
        filtered = products;
    } else {
        filtered = products.filter(p => p.category === categoryType);
    }

    renderCatalog(filtered);

    document.querySelectorAll('.filter-item').forEach(btn => {
        btn.classList.remove('active');
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

function toggleMenu() {
    // Код для бургера
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