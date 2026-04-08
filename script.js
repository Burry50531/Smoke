
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

let cart = JSON.parse(localStorage.getItem('kaif_cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('kaif_cart', JSON.stringify(cart));
        updateCartCount();
        alert(`Товар ${product.name} добавлен в корзину!`);
    }
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = cart.length;
}

function renderCatalog(items) {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    grid.innerHTML = items.map(p => `
        <div class="card">
            <div class="img-stub">IMG</div>
            <h3>${p.name}</h3>
            <button class="buy-btn" onclick="addToCart(${p.id})">
                <span class="price-tag">${p.price} ₽</span>
                <span class="add-label">В КОРЗИНУ</span>
            </button>
        </div>
    `).join('');
    
    grid.innerHTML += `
        <div class="pagination">
            <button class="pagination-item" onclick="setFilter('liquid')">Жижи</button>
            <button class="pagination-item" onclick="setFilter('disposable')">Одноразки</button>
            <button class="pagination-item" onclick="setFilter('soon')">Скоро</button>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

function filterByBrand(brandName) {
    if (brandName === 'all') {
        renderCatalog(products);
    } else {
        const filtered = products.filter(p => p.brand === brandName);
        renderCatalog(filtered);
    }

    document.querySelectorAll('.brand-mini-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}