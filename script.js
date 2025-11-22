const products = [
    {
        id: 1,
        name: "Scenic Nature Landscape",
        description: "A serene natural landscape bringing calm and beauty to any space.",
        price: 4999, // Convert 49.99 to 4999
        image: "images/P1.jpg"
    },
    {
        id: 2,
        name: "Handmade Painting wall art",
        description: "Beautifully crafted handmade painting wall art that adds a unique and artistic touch to your living space.",
        price: 5999, // Convert 59.99 to 5999
        image: "images/P2.jpg"
    },
    {
        id: 3,
        name: "Pillar Stand Mirror Base",
        description: "A sturdy and elegant pillar stand mirror base that enhances the aesthetic of any room while providing functional support for your mirror.",
        price: 6999, // Convert 69.99 to 6999
        image: "images/P3.jpg"
    },
    {
        id: 4,
        name: "Customized Acrylic Name Plate",
        description: "A sleek and modern customized acrylic name plate that adds a personal and stylish touch to any space.",
        price: 7999, // Convert 79.99 to 7999
        image: "images/P4.jpg"
    },
    {
        id: 5,
        name: "Wall Mount Photo Frame",
        description: "A stylish and functional wall mount photo frame that beautifully displays your cherished memories while enhancing your home decor.",
        price: 8999, // Convert 89.99 to 8999
        image: "images/P5.jpg"
    },
    {
        id: 6,
        name: "Panda Baby Wall Decor",
        description: "Charming panda baby wall decor that adds a playful and adorable touch to any nursery or child's room.",
        price: 9999, // Convert 99.99 to 9999
        image: "images/P6.jpg"
    },
    {
        id: 7,
        name: "Wall Floating Shelf",
        description: "A stylish and functional wall floating shelf that adds both storage and decorative appeal to any room.",
        price: 10999, // Convert 109.99 to 10999
        image: "images/P7.jpg"
    },
    {
        id: 8,
        name: "Transparent Acrylic Wall Clock",
        description: "A sleek and modern wall clock crafted from clear acrylic, adding a minimalist and elegant touch to any room while keeping time with style.",
        price: 11999, // Convert 119.99 to 11999
        image: "images/P8.jpg"
    },
    {
        id: 9,
        name: "Artistic Flair Design Wall Art",
        description: "An artistic flair design wall art piece that brings creativity and vibrancy to your living space, making it a focal point of any room.",
        price: 12999, // Convert 129.99 to 12999
        image: "images/P9.jpg"
    },
    {
        id: 10,
        name: "Ayat Al Kursi Calligraphy",
        description: "A beautifully crafted calligraphy piece featuring Ayat Al Kursi, perfect for adding a spiritual and artistic touch to your home or office.",
        price: 13999, // Convert 139.99 to 13999
        image: "images/P10.jpg"
    },
    {
        id: 11,
        name: "Acrylic Vase with Tube Inlay",
        description: "A chic and modern acrylic vase with tube inlay, perfect for adding a contemporary touch to your home decor.",
        price: 14999, // Convert 149.99 to 14999
        image: "images/P11.jpg"
    },
    {
        id: 12,
        name: "Lake River Gloss Wall Decor",
        description: "Embrace timeless elegance with this beautiful lake river gloss wall decor. Perfect for adding a sophisticated touch to any room or office.",
        price: 15999, // Convert 159.99 to 15999
        image: "images/P12.jpg"
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