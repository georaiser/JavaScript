# JavaScript Fullstack — Project Portfolio

A monorepo of fullstack JavaScript projects built throughout a Fullstack JavaScript BootCamp,
covering frontend, backend, databases and APIs.

---

## 📂 Projects

### 🏦 [AlkeWallet](./AlkeWallet/)

> **Digital Wallet — Frontend**

A responsive digital wallet application with a clean, modern UI. Covers authentication, dashboard overview, transaction history, deposits and money transfers.

| Detail | Value |
|--------|-------|
| **Stack** | HTML5, CSS3, Bootstrap 5, Vanilla JS |
| **Focus** | Frontend, UI/UX, Client-side logic |
| **Entry point** | `AlkeWallet/index.html` |

**Key features:**
- Secure login interface with user avatars
- Balance overview & quick actions
- Transaction history
- Deposit & Send Money flows

---

### 📋 [TaskFlow](./TaskFlow/)

> **Kanban Task Manager — Frontend + API**

A Kanban-style task manager where tasks move across **To Do → In Progress → Done** columns via drag and drop.

| Detail | Value |
|--------|-------|
| **Stack** | HTML5, CSS3, Bootstrap 5, ES6 Modules |
| **API** | JSONPlaceholder (no signup required) |
| **Focus** | OOP, async/await, DOM manipulation, drag & drop |
| **Run** | `npx serve .` inside `TaskFlow/` |

**Key features:**
- Drag & drop task management
- Async task seeding from REST API
- Local state management with `localStorage`

---

### 🛒 [ecommerce](./ecommerce/)

> **E-Commerce Platform API — Backend**

A RESTful backend platform covering **User Administration**, **E-Commerce** and **Inventory Management**, built with a clean MVC architecture.

| Detail | Value |
|--------|-------|
| **Stack** | Node.js, Express, PostgreSQL, Sequelize, Handlebars |
| **Auth** | JWT-based authentication (planned) |
| **Focus** | REST API, MVC, ORM, server-rendered views |
| **Run** | `npm install && npm start` inside `ecommerce/` |

**API surface:**

| Domain | Endpoints |
|--------|-----------|
| Auth | `POST /auth/register`, `POST /auth/login` |
| Users | `GET /users`, `GET|PATCH|DELETE /users/:id` |
| Products | `GET|POST /products`, `PATCH|DELETE /products/:id` |
| Orders | `GET|POST /orders`, `GET /orders/:id` |
| Inventory | `GET|PATCH /inventory`, `GET /inventory/low-stock` |

---

### 📚 Modules

| Folder | Content |
|--------|---------|
| [`modulo3/`](./modulo3/) | JavaScript fundamentals exercises (HTML/JS) |
| [`modulo5/`](./modulo5/) | Relational database design — SQL schema & queries |

---

## 🛠 Tech Stack Overview

| Layer | Technologies |
|-------|-------------|
| **Frontend** | HTML5, CSS3, Bootstrap 5, Vanilla JS, ES6 Modules |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL, Sequelize ORM |
| **Auth** | JWT, bcryptjs |
| **Views** | Handlebars (HBS) |
| **Dev tools** | nodemon, dotenv |

---

## 🚀 Getting Started

Clone the repository and navigate to any project:

```bash
git clone https://github.com/georaiser/JavaScript.git
cd JavaScript

# Frontend projects — just open in browser
open AlkeWallet/index.html

# TaskFlow — requires a local server (ES modules)
cd TaskFlow && npx serve .

# ecommerce API
cd ecommerce && npm install && npm start
```

---

## 📄 License

[MIT](./LICENSE)
