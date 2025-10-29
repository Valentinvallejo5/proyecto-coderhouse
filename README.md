Chocolatería React App
E-commerce para un proyecto de coder house . Navegá productos, mirá el detalle, elegí cantidad, agregá al carrito y generá una orden en Firebase.
Tecnologías


React (hooks y Context)


React Router DOM (rutas)


Firebase (Firestore)


Vite (dev server y build)


Cómo correr el proyecto
# 1) instalar dependencias
npm install

# 2) levantar en modo desarrollo
npm run dev

Abrí el link que te muestre la consola.
Configurar Firebase (rápido)


Creá un proyecto en Firebase y activá Firestore.



En src/data/firebase.js inicializá Firebase y exportá:


getProductById(id)


CreateOrder({ cartItems, total, buyer, date })





Tip: la colección products debería tener campos como title, img, description, category, price, stock.
La colección orders guarda items, total, buyer, date.

Estructura (simplificada)
src/
├─ components/
│  ├─ Navbar/
│  ├─ ItemListContainer/
│  ├─ ItemDetailContainer.jsx/
│  │  ├─ ItemDetailContainer.jsx
│  │  └─ ItemCount.jsx
│  └─ CartContainer/
│     ├─ CartContainer.jsx
│     └─ FormCheckout.jsx
├─ context/
│  └─ cartContext.js
├─ data/
│  └─ firebase.js
├─ App.css
└─ App.jsx

Rutas principales


/ lista de productos


/detalle/:idParam detalle de un producto


/category/:categParam listado por categoría


/carrito carrito


* 404


Carrito (Context)
cartContext.js expone:


cartItems (array de productos con quantity)


addItem(product, quantity) (suma cantidad)


removeItem(id) (elimina producto)


clearCart() (vacía carrito)


totalPrice() (suma total)


cartCountItems() (cantidad total de unidades)


Ejemplo desde el detalle:
function handleAddToCart(count) {
  addItem(product, count);
}

Scripts útiles


npm run dev desarrollo


npm run build build de producción


npm run preview previsualizar el build


Notas


El formulario de checkout arma un comprador simple (buyer) y crea la orden en Firestore.


Asegurate de tener datos en products para que se liste el catálogo.



Si querés, después te hago una versión “con imágenes” (capturas de pantalla y GIF corto) y una sección de troubleshooting con 4 o 5 casos típicos.