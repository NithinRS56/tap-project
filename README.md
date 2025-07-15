# TAP E-Commerce Project

## Overview

This project is a basic e-commerce web application built using Node.js, Express, and MongoDB for backend, and HTML, CSS, and JavaScript for the frontend. It includes user authentication, product management, cart, and order features.

## Features

- User registration and login using JWT
- Role-based access:
  - Admin: Can add, update, and delete products
  - Customer: Can view products, add to cart, and place orders
- Product listing with pagination and search by name or category
- Cart management: add, update, delete items
- Order creation from cart
- Basic frontend with HTML and JS

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- HTML, CSS, JavaScript (Vanilla)

## Folder Structure

TAP_PROJECT/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── public/
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── admin.html
│ ├── order.html
│ └── style.css
├── server.js
├── .env (excluded from GitHub)
├── .gitignore
└── package.json
