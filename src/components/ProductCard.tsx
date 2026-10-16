import type { Product } from "../types/product";
import { formatCurrency } from "../utils/formatCurrency";

type ProductCardProps = {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
      <div>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <p>{product.rating}</p>
        <p>{product.title}</p>
        <p>{formatCurrency(product.priceCents)}</p>
        <button>Add to cart</button>
      </div>
    )
}