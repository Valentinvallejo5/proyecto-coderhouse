import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import products from "./products";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCUlxQ-zXR_aSJMtQEPX4vmZBS_GVXr3Po",
  authDomain: "mi-proyecto-de-coder.firebaseapp.com",
  projectId: "mi-proyecto-de-coder",
  storageBucket: "mi-proyecto-de-coder.firebasestorage.app",
  messagingSenderId: "735010370043",
  appId: "1:735010370043:web:7eb753a27fe3a3b24f5b5e",
};

// Inicialización
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Traer todos los productos
export async function getProducts() {
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);
  const dataDocs = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataDocs;
}

// Traer un producto por ID
export async function getProductById(idParam) {
  const docRef = doc(db, "products", idParam);
  const documentSnapshot = await getDoc(docRef);

  if (!documentSnapshot.exists()) {
    throw new Error("❌ Producto no encontrado");
  }

  return { id: documentSnapshot.id, ...documentSnapshot.data() };
}
export async function getProductsByCategory(categParam) {
  const productsRef = collection(db, "products");

  const q = query(productsRef, where("category", "==", categParam));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
export async function CreateOrder(orderData) {
  const ordersRef = collection(db, "orders");
  const newDocs= await addDoc(ordersRef, orderData)
  return newDocs


}
export async function SubirProductosAFirestore() {
    for (let items of products){
      delete items.id
      const newDoc = await addDoc(collection(db, "products"), items)
    }
}


export default app;
