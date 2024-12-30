// Ring Ürünleri
const ringProducts = [
    { id: 16, name: "Roman Ring", category: "ring", price: "$200", image: "urun16.jpg" },
    { id: 17, name: "Greek Ring", category: "ring", price: "$150", image: "urun17.jpg" },
   
];

const productGrid = document.querySelector('.product-grid');

// Ürünleri Sayfaya Eklemek
function displayRingProducts() {
    productGrid.innerHTML = '';
    ringProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Buy Now</button>
        `;
        productGrid.appendChild(productDiv);
    });
}

// Sepete Ürün Ekleme
function addToCart(productId) {
    const product = ringProducts.find(item => item.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
}

// Sayfa Yüklenince Ürünleri Göster
displayRingProducts();
