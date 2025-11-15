# Aiza Clothing Brand Website

This is a simple, static e-commerce website for a fictional clothing brand named "Aiza". The website is built with HTML, CSS, and vanilla JavaScript.

## Features

*   **Homepage:** Displays featured products and a hero banner.
*   **Shop Page:** Lists all available products with "View Details" and "Add to Cart" buttons.
*   **Product Detail Page:** Shows detailed information about a single product, including its name, description, price, and an "Add to Cart" button.
*   **Shopping Cart:**
    *   Displays items added to the cart.
    *   Allows users to increase or decrease the quantity of items.
    *   Allows users to remove items from the cart.
    *   Shows the subtotal, shipping cost, and total price.
    *   Uses `localStorage` to persist the cart contents across browser sessions.
*   **Checkout Page:** A simple form for users to enter their details to place an order (currently for "Cash on Delivery").
*   **About Us Page:** Provides information about the brand's story and mission.
*   **Contact Page:** Includes a contact form and links to social media.

## File Structure

```
.
├── about.html
├── cart.html
├── cart.js
├── checkout.css
├── checkout.html
├── contact.html
├── index.html
├── product_detail.html
├── script.js
├── styles.css
└── images/
    ├── banner_image.png
    ├── ... (product images)
```

*   **HTML Files:** `index.html`, `shop.html`, `product_detail.html`, `cart.html`, `checkout.html`, `about.html`, `contact.html` define the structure of the different pages.
*   **CSS Files:** `styles.css` and `checkout.css` contain the styling for the website.
*   **JavaScript Files:**
    *   `script.js`: Contains the product data and handles adding items to the cart from the shop and product detail pages.
    *   `cart.js`: Manages all shopping cart functionality, including adding, updating, and removing items, and updating the cart display.

## How to Use

1.  Clone or download the repository.
2.  Open any of the `.html` files in your web browser to view the website.
3.  The website is fully static and does not require a web server to run.

## Dependencies

There are no external libraries or frameworks used in this project. It is built purely with HTML, CSS, and JavaScript.
