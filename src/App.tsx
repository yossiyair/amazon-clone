import { useState, useEffect } from "react";
import { getProducts } from "./services/productService"
import type { Product } from "./types/product";
import { ProductsGrid } from "./components/ProductsGrid";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const loadProducts = async () => {
      const productData = await getProducts();
      setProducts(productData);
      console.log(productData);
    }
    
    loadProducts();
  }, []);

  return (
    <>
      <ProductsGrid 
        products={products}
      />
    </>
  )
}

export default App
