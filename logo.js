let cart = [];
let favorites = [];

function searchProducts() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");
    products.forEach(function(product) {
        let name = product.querySelector("h3").textContent.toLowerCase();
        if (name.includes(keyword)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function addFavorite(name, price) {
    favorites.push({
        name: name,
        price: price
    });
    alert("Đã thêm " + name + " vào danh sách yêu thích!");
    showFavorites();
}

function showFavorites() {
    let favoritesPanel = document.getElementById("favorites");
    if (favoritesPanel === null) {
        return;
    }
    favoritesPanel.innerHTML = "<h2>Sản phẩm yêu thích</h2>";
    if (favorites.length === 0) {
        favoritesPanel.innerHTML += "<p>Chưa có sản phẩm yêu thích.</p>";
        return;
    }
    favorites.forEach(function(item) {
        favoritesPanel.innerHTML += `
            <p>${item.name} - ${item.price} $</p>
        `;
    });
}

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });
    updateCart();
    alert("Đã thêm " + name + " vào giỏ hàng!");
}

function updateCart() {
    let total = 0;
    cart.forEach(function(item) {
        total += item.price;
    });
    document.getElementById("cartTotal").textContent =
        total.toFixed(2) + " $";
    showCart();
}

function showCart() {
    let cartPanel = document.getElementById("cartPanel");
    if (cartPanel === null) {
        return;
    }
    cartPanel.innerHTML = "<h2>Giỏ hàng của tôi</h2>";
    if (cart.length === 0) {
        cartPanel.innerHTML += "<p>Giỏ hàng đang trống.</p>";
        return;
    }
    cart.forEach(function(item) {
        cartPanel.innerHTML += `
            <p>${item.name} - ${item.price} $</p>
        `;
    });
}