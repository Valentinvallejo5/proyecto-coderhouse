import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer.jsx';
import './App.css';
import { CartProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer.jsx';

function App() {
  return (
    <main>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer mensaje="Bienvenidos a la mejor chocolatería de Argentina 🍫" />}
            />
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
            <Route path="/category/:categParam" element={<ItemListContainer />} />
            <Route path="*" element={<li>404 — Página no encontrada</li>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </main>
  );
}

export default App;
