import type { Product } from "../types/product"
import { ProductCard } from "./ProductCard"
import "./ProductsGrid.css";

type ProductsGridProps = {
  products: Product[];
}

export function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="product-card-container">
      {products.map((product) => {
        return (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ) 
      })}
    </div>
  )
}