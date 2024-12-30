// Vase Ürünleri
const vaseProducts = [
    { id: 1, name: "Antique Vase", category: "vase", price: "$120", image: "urun1.jpg" },
    { id: 4, name: "Ceramic Vase", category: "vase", price: "$90", image: "urun4.jpg" },
    { id: 7, name: "Porcelain Vase", category: "vase", price: "$150", image: "urun7.jpg" },
    { id: 12, name: "Anatolian Vase", category: "vase", price: "$120", image: "urun12.jpg" },
];

const productGrid = document.querySelector('.product-grid');

// Ürünleri Sayfaya Eklemek
function displayVaseProducts() {
    productGrid.innerHTML = '';
    vaseProducts.forEach(product => {
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
    const product = vaseProducts.find(item => item.id === productId);
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
displayVaseProducts();
