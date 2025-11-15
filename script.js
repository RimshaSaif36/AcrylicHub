const products = [
    {
        id: 1,
        name: "Elegant A-Line Dress",
        description: "This elegant A-Line dress is perfect for any occasion. Made with high-quality fabric, it offers a comfortable fit and a sophisticated look. Available in various sizes and colors.",
        price: Math.round(49.99 * 100), // Convert 49.99 to 4999
        image: "images/product_1.jpg"
    },
    {
        id: 2,
        name: "Chiffon Maxi Dress",
        description: "Flowy and fashionable, this chiffon maxi dress is ideal for summer days or evening events. Lightweight and breathable fabric ensures maximum comfort.",
        price: Math.round(59.99 * 100), // Convert 59.99 to 5999
        image: "images/product_2.jpg"
    },
    {
        id: 3,
        name: "Floral Print Sundress",
        description: "Brighten up your wardrobe with this beautiful floral print sundress. Perfect for casual outings and beach vacations. Soft and comfortable material.",
        price: Math.round(69.99 * 100), // Convert 69.99 to 6999
        image: "images/product_3.jpg"
    },
    {
        id: 4,
        name: "Classic Little Black Dress",
        description: "A timeless classic, the little black dress is a must-have for every wardrobe. Versatile and chic, suitable for formal gatherings or a night out.",
        price: Math.round(79.99 * 100), // Convert 79.99 to 7999
        image: "images/product_4.jpg"
    },
    {
        id: 5,
        name: "Bohemian Rhapsody Dress",
        description: "Embrace your free spirit with this bohemian rhapsody dress. Featuring intricate patterns and a relaxed fit, it's perfect for festivals and casual wear.",
        price: Math.round(89.99 * 100), // Convert 89.99 to 8999
        image: "images/product_5.jpg"
    },
    {
        id: 6,
        name: "Vintage Swing Dress",
        description: "Step back in time with this charming vintage swing dress. Its flattering silhouette and retro design make it a unique addition to your collection.",
        price: Math.round(99.99 * 100), // Convert 99.99 to 9999
        image: "images/product_6.jpg"
    },
    {
        id: 7,
        name: "Comfortable T-Shirt Dress",
        description: "Effortlessly stylish and incredibly comfortable, this t-shirt dress is perfect for everyday wear. Pair it with sneakers for a casual look or dress it up with accessories.",
        price: Math.round(109.99 * 100), // Convert 109.99 to 10999
        image: "images/product_7.jpg"
    },
    {
        id: 8,
        name: "Sophisticated Sheath Dress",
        description: "Exude confidence and sophistication with this elegant sheath dress. Its sleek design and tailored fit are ideal for professional settings or upscale events.",
        price: Math.round(119.99 * 100), // Convert 119.99 to 11999
        image: "images/product_8.jpg"
    },
    {
        id: 9,
        name: "Casual Denim Dress",
        description: "A versatile and trendy denim dress for a relaxed yet stylish look. Perfect for any casual occasion, offering both comfort and durability.",
        price: Math.round(129.99 * 100), // Convert 129.99 to 12999
        image: "images/product_9.jpg"
    },
    {
        id: 10,
        name: "Party Wear Sequin Dress",
        description: "Shine bright at any party with this dazzling sequin dress. Designed to make a statement, it's perfect for special celebrations and glamorous nights.",
        price: Math.round(139.99 * 100), // Convert 139.99 to 13999
        image: "images/product_10.jpg"
    },
    {
        id: 11,
        name: "Striped Shirt Dress",
        description: "A chic and modern striped shirt dress, combining comfort with a smart-casual aesthetic. Ideal for office wear or a stylish day out.",
        price: Math.round(149.99 * 100), // Convert 149.99 to 14999
        image: "images/product_11.jpg"
    },
    {
        id: 12,
        name: "Elegant Lace Dress",
        description: "Embrace timeless elegance with this beautiful lace dress. Perfect for weddings, formal events, or any occasion where you want to look exquisite.",
        price: Math.round(159.99 * 100), // Convert 159.99 to 15999
        image: "images/product_12.jpg"
    }
];

// Expose products globally
window.products = products;

document.addEventListener('DOMContentLoaded', () => {
    // Event listener for "Add to Cart" buttons on shop.html
    document.querySelectorAll('.shop-products .add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            // A more robust way to get product ID, assuming data-id attribute is present
            const productId = parseInt(productItem.dataset.productId || productItem.querySelector('.view-details').onclick.toString().match(/id=(\d+)/)[1]);
            const product = products.find(p => p.id === productId);
            if (product && window.addToCart) { // Check if addToCart is available from cart.js
                window.addToCart(product);
            }
        });
    });

    // Event listener for "Add to Cart" button on product_detail.html
    const addToCartDetailButton = document.querySelector('.add-to-cart-detail');
    if (addToCartDetailButton) {
        addToCartDetailButton.addEventListener('click', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));
            const product = products.find(p => p.id === productId);
            if (product && window.addToCart) { // Check if addToCart is available from cart.js
                window.addToCart(product);
            }
        });
    }

    // Initial cart count update (if cart.js is loaded)
    if (window.updateCartCount) {
        window.updateCartCount();
    }
});