
const products = [];
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
        grid.innerHTML = `<p style="grid-column: 1/6; text-align: center; padding: 50px; color: #666;">Товары не найдены</p>`;
        return;
    }

    grid.innerHTML = items.map(p => `
        <div class="card">
            <div class="img-stub" style="height:150px; background:#111; border-radius:8px; margin-bottom:12px; display:flex; align-items:center; justify-content:center; color:#333; font-weight:bold;">IMG</div>
            <h3 style="font-size:14px; margin-bottom:8px;">${p.name}</h3>
            <p style="color: #e6b130; font-weight: 700;">${p.price} ₽</p>
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

function setFilter(type) {
    if (type === 'all') {
        renderCatalog(products);
    } else {
        const filtered = products.filter(p => p.type === type);
        renderCatalog(filtered);
    }
    scrollToTop();
}

function filterByBrand(brandName) {
    const filtered = products.filter(p => p.brand === brandName);
    renderCatalog(filtered);
    scrollToTop();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalog-grid')) {
        renderCatalog(products);
    }
    
    if (document.getElementById('home-products')) {
        renderHome();
    }
});








// Загружаем корзину из памяти браузера
let cart = JSON.parse(localStorage.getItem('kaif_cart')) || [];
updateCounterDisplay();

function addToCart(name, price, img) {
    // Добавляем товар в список
    cart.push({ name, price, img });
    
    // Сохраняем
    localStorage.setItem('kaif_cart', JSON.stringify(cart));
    
    // Обновляем цифру на корзине
    updateCounterDisplay();
    
    // Показываем надпись "Добавлено"
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function updateCounterDisplay() {
    const counter = document.getElementById('cart-counter');
    if (counter) {
        counter.innerText = cart.length;
        // Скрываем кружок, если в корзине 0
        counter.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

function toggleMenu() {
    // Код для бургера
}