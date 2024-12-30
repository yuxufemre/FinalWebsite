// Product Data
const products = [
    { id: 1, name: "Antique Vase", category: "vase", price: "$120", image: "urun1.jpg" },
    { id: 2, name: "Vintage Clock", category: "clock", price: "$80", image: "urun2.jpg" },
    { id: 3, name: "Collector's Coin", category: "coin", price: "$50", image: "urun3.jpg" },
    { id: 4, name: "Ceramic Vase", category: "vase", price: "$90", image: "urun4.jpg" },
    { id: 5, name: "Wall Clock", category: "clock", price: "$70", image: "urun5.jpg" },
    { id: 6, name: "Roman Coin", category: "coin", price: "$200", image: "urun6.jpg" },
    { id: 7, name: "Porcelain Vase", category: "vase", price: "$150", image: "urun7.jpg" },
    { id: 8, name: "Desk Clock", category: "clock", price: "$95", image: "urun8.jpg" },
    { id: 9, name: "Gold Coin", category: "coin", price: "$300", image: "urun9.jpg" },
    { id: 10, name: "Modern Vase", category: "vase", price: "$110", image: "urun10.jpg" },
    { id: 11, name: "Antique Dress", category: "dress", price: "$170", image: "urun11.jpg" },
    { id: 12, name: "Anatolian Vase", category: "vase", price: "$120", image: "urun12.jpg" },
    { id: 13, name: "Turkish Coin", category: "coin", price: "$50", image: "urun13.jpg" },
    { id: 14, name: "Roman Vase", category: "vase", price: "$90", image: "urun14.jpg" },
    { id: 15, name: "Greek Clock", category: "clock", price: "$70", image: "urun15.jpg" },
    { id: 16, name: "Roman Ring", category: "ring", price: "$200", image: "urun16.jpg" },
    { id: 17, name: "Greek Ring", category: "ring", price: "$150", image: "urun17.jpg" },
    { id: 18, name: "Anatolian Dress", category: "dress", price: "$95", image: "urun18.jpg" },
    { id: 19, name: "Turkish Gold Coin", category: "coin", price: "$300", image: "urun19.jpg" },
    { id: 20, name: "Vintage Vase", category: "vase", price: "$110", image: "urun20.jpg" },
    { id: 21, name: "Vintage Clock", category: "clock", price: "$80", image: "urun21.jpg" },
    
];



// Cart Data (Saved in localStorage)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display Products in Shop Page
const productGrid = document.getElementById('product-grid');

function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <div class="rating">
                ${[5, 4, 3, 2, 1].map(
                    (star) => `
                    <input type="radio" id="star-${star}-${product.id}" name="rating-${product.id}" value="${star}">
                    <label for="star-${star}-${product.id}">&#9733;</label>
                `).join('')}
            </div>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Buy Now</button>
        `;

        // Add event listeners for rating
        productDiv.querySelectorAll(`input[name="rating-${product.id}"]`).forEach(radio => {
            radio.addEventListener('change', (event) => {
                const rating = parseInt(event.target.value);
                product.rating = rating;
                alert(`${product.name} has been rated ${rating} stars!`);
            });
        });

        productGrid.appendChild(productDiv);
    });
}

// Add Product to Cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1; // Quantity artır
    } else {
        cart.push({ ...product, quantity: 1 }); // Yeni ürün ekle
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Sepeti güncelle ve kaydet
    alert(`${product.name} has been added to your cart.`);
}

// Filter and Search Functionality
function filterProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Initial Load
displayProducts(products);
