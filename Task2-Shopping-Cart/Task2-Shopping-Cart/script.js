const products = [
    { id: 1, name: "Mechanical Keyboard", price: 25000 },
    { id: 2, name: "Wireless Mouse", price: 12000 },
    { id: 3, name: "1080p HD Webcam", price: 18000 },
    { id: 4, name: "Noise Cancelling Headphones", price: 45000 },
    { id: 5, name: "RGB Desk Mat", price: 7500 }
];

let cart = [];

const productListContainer = document.getElementById("product-list");
const cartListContainer = document.getElementById("cart-list");
const cartTotalElement = document.getElementById("cart-total");

function displayProducts() {
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.innerHTML = `
            <div><strong>${product.name}</strong><br>₦${product.price.toLocaleString()}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListContainer.appendChild(productItem);
    });
}

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

function updateCartUI() {
    cartListContainer.innerHTML = "";
    if (cart.length === 0) {
        cartListContainer.innerHTML = '<p id="empty-message">Your cart is empty.</p>';
        cartTotalElement.innerText = "0";
        return;
    }
    let runningTotal = 0;
    cart.forEach(item => {
        runningTotal += item.price * item.quantity;
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <div><strong>${item.name}</strong><br>₦${item.price.toLocaleString()} x ${item.quantity}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartListContainer.appendChild(cartItem);
    });
    cartTotalElement.innerText = runningTotal.toLocaleString();
}

displayProducts();
