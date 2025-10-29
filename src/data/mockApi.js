import products from "./products"


export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1500)
  })
}

export function getProductById(idParams) {
  return new Promise((resolve) => {
    const productRequested = products.find(item => item.id == Number(idParams))
    setTimeout(() => resolve(productRequested), 1000)
  })
}
export function getProductsByCategory(categParams) {
  return new Promise((resolve) => {
    const productsRequested = products.filter(item => item.category === categParams);
    setTimeout(() => resolve(productsRequested), 1000);
  });
}
