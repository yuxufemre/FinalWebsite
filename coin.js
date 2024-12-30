// Coin Ürünleri
const coinProducts = [
    { id: 3, name: "Collector's Coin", category: "coin", price: "$50", image: "urun3.jpg" },
    { id: 6, name: "Roman Coin", category: "coin", price: "$200", image: "urun6.jpg" },
    { id: 9, name: "Gold Coin", category: "coin", price: "$300", image: "urun9.jpg" },
    { id: 13, name: "Turkish Coin", category: "coin", price: "$50", image: "urun13.jpg" },
    { id: 19, name: "Turkish Gold Coin", category: "coin", price: "$300", image: "urun19.jpg" },
];

const productGrid = document.querySelector('.product-grid');

// Ürünleri Sayfaya Eklemek
function displayCoinProducts() {
    productGrid.innerHTML = '';
    coinProducts.forEach(product => {
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
    const product = coinProducts.find(item => item.id === productId);
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
displayCoinProducts();
