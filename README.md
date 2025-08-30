# 🍕 Pizzería Mamma Mía

Proyecto desarrollado en **React** como parte del Hito 8 del bootcamp Desafío Latam. 
Incluye integración con **backend en Express** utilizando **JWT (JSON Web Tokens)** para autenticación real.

---

## 🚀 Tecnologías utilizadas
- **Frontend**: React + Vite + React Router + Context API
- **Backend**: Node.js + Express
- **Autenticación**: JWT
- **Estilos**: Bootstrap 5

---

## 📂 Estructura del proyecto

```
frontend/
  ├── src/
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── context/
  │   │   ├── UserContext.jsx
  │   │   ├── CartContext.jsx
  │   │   └── PizzasContext.jsx
  │   ├── pages/
  │   │   ├── Home.jsx
  │   │   ├── Login.jsx
  │   │   ├── Register.jsx
  │   │   ├── Profile.jsx
  │   │   └── Cart.jsx
  │   ├── components/
  │   │   ├── Navbar.jsx
  │   │   └── ProtectedRoute.jsx
backend-pizza/
  ├── index.js
  ├── routes/
  │   ├── auth.route.js
  │   └── checkouts.route.js (opcional)
  └── data/
      └── pizzas.json
```

---

## 🔑 Funcionalidades principales
- **Registro y Login** con conexión al backend (`/api/auth/register` y `/api/auth/login`).
- Manejo de sesión con **JWT** guardado en `localStorage`.
- **Perfil de usuario** (`/api/auth/me`) muestra el email autenticado y permite cerrar sesión.
- **Carrito de compras** conectado al backend (`/api/checkouts`), simulando una compra.
- **Protección de rutas** con `ProtectedRoute` para `/profile`.
- Persistencia de sesión en `localStorage`.

---

## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone <repo-url>
cd (nombre de carpeta donde tendras los archivos)
```

### 2. Backend (Express)
```bash
cd backend-pizza
npm install
npm run dev
```
Esto levanta el backend en `http://localhost:5000`.

### 3. Frontend (React)
En otra terminal:
```bash
cd frontend
npm install
npm run dev
```
Esto levanta el frontend en `http://localhost:5173`.

---

## 🔗 Endpoints disponibles

### Auth
- `POST /api/auth/register` → Registro de usuario
- `POST /api/auth/login` → Inicio de sesión (retorna JWT)
- `GET /api/auth/me` → Devuelve datos del usuario autenticado (requiere `Authorization: Bearer <token>`)

### Pizzas
- `GET /api/pizzas` → Lista de pizzas disponibles
- `GET /api/pizzas/:id` → Detalle de pizza por ID

### Checkout
- `POST /api/checkouts` → Simulación de compra (requiere JWT)

---

## ✅ Requisitos del Hito 8 cumplidos
1. Métodos `login`, `register`, `logout` y `getProfile` en `UserContext`.
2. Login y Register conectados al backend.
3. Profile muestra email autenticado y permite logout.
4. Navbar cambia según estado de sesión.
5. Cart envía el pedido al backend con token JWT.
6. Mensaje de éxito en la compra.

---

## 👨‍💻 Autor
Proyecto desarrollado por **Williams Arias - Desafío Latam**.
