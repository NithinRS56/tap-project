# TAP E-Commerce Project 🛒

## 🔧 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- HTML, CSS, JS (Vanilla)
- JWT Authentication

---

## ✅ Features Implemented

### 🧑‍💼 Authentication
- Login / Register (with JWT)
- Two roles: `admin` and `customer`

### 🛍️ Products
- Admin can add products (from frontend)
- Customers can view & search products
- Pagination implemented

### 🛒 Cart
- Add to cart
- View cart items
- Remove items from cart

### 📦 Orders
- Place order from cart
- View "Cart is empty" after ordering

---

## 🌐 Frontend Pages

| Page         | Path                   | Description                     |
|--------------|------------------------|----------------------------------|
| Register     | `/register.html`       | User sign-up                    |
| Login        | `/login.html`          | Login as customer/admin         |
| Products     | `/index.html`          | Product listing + pagination    |
| Cart + Order | `/order.html`          | Place order from cart           |
| Admin Add    | `/admin.html`          | Admin: Add products via form    |

---

## 🔍 Search + Pagination

- Search by product name or category
- Page-based listing (5 per page)

---

## 🚀 Running Locally

```bash
npm install
npm run dev
