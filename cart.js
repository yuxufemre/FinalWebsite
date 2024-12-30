// Sepet Verilerini Yükle
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Sepeti Göster
function renderCartItems() {
    cartItemsContainer.innerHTML = ""; // Sepeti temizle
    let totalPrice = 0; // Toplam fiyatı sıfırla

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity; // Ürün toplam fiyatı
        totalPrice += itemTotal; // Toplam fiyata ekle

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td>
                <button class="remove-button" data-id="${item.id}">Remove</button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Miktar Değişikliklerini Yönet
cartItemsContainer.addEventListener("input", (event) => {
    if (event.target.classList.contains("quantity-input")) {
        const itemId = parseInt(event.target.getAttribute("data-id"));
        const newQuantity = parseInt(event.target.value);

        const item = cart.find(item => item.id === itemId);
        if (item && newQuantity > 0) {
            item.quantity = newQuantity; // Yeni miktarı ayarla
            localStorage.setItem("cart", JSON.stringify(cart)); // Sepeti güncelle
            renderCartItems(); // Sepeti yeniden göster
        }
    }
});

// Ürünleri Kaldırma
cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const itemId = parseInt(event.target.getAttribute("data-id"));
        cart = cart.filter(item => item.id !== itemId); // Ürünü sepetten kaldır
        localStorage.setItem("cart", JSON.stringify(cart)); // Sepeti güncelle
        renderCartItems(); // Sepeti yeniden göster
    }
});

// Sayfa Yüklenince Sepeti Göster
document.addEventListener("DOMContentLoaded", renderCartItems);
