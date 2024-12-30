// script.js

// Dynamic Featured Products Loading
const featuredProducts = [
    { name: "Antique Vase", price: "$120", image: "vase.jpg" },
    { name: "Vintage Clock", price: "$80", image: "clock.jpg" },
    { name: "Collector's Coin", price: "$50", image: "coin.jpg" }
];

const productGrid = document.getElementById('featured-products');

featuredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
    `;
    productGrid.appendChild(productDiv);
});

// Add to Cart Functionality
function addToCart(name, price) {
    alert(`${name} has been added to your cart for ${price}.`);
}

// Smooth Page Transition Effects
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetUrl = event.target.href;
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500);
    });
});
// script.js

// Play/Pause Video Button (Optional)
const video = document.querySelector('.banner-video');
const bannerContent = document.querySelector('.banner-content');

if (video) {
    video.addEventListener('loadeddata', () => {
        console.log('Video is ready and playing.');
    });
}

// Example to toggle video mute/unmute
bannerContent.addEventListener('click', () => {
    video.muted = !video.muted;
});

document.addEventListener('DOMContentLoaded', () => {
    Scrollbar.init(document.body, {
        damping: 0.1 // Yumuşaklık seviyesi
    });
});