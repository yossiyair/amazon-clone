import type { Product } from "../types/product"
import { ProductCard } from "./ProductCard"
import type { SelectedOption } from "../types/cart";
import "./ProductsGrid.css";

type ProductsGridProps = {
  products: Product[];
  onAddToCart: (productId: string, quantity: number, selectedOptions: SelectedOption[]) => void;
}

export function ProductsGrid({ products, onAddToCart }: ProductsGridProps) {
  return (
    <div className="product-card-container">
      {products.map((product) => {
        return (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ) 
      })}
    </div>
  )
}
