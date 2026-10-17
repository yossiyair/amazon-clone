import type { Product } from "../types/product";
import { formatCurrency } from "../utils/formatCurrency";
import "./ProductCard.css";
import cartIcon from "../assets/icons/cartIcon.png"

type ProductCardProps = {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
      <div className="product-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-information-container">
          <p className="product-rating">
          {product.rating}</p>
          <p className="product-title">
            {product.title}</p>
          <p className="product-price">
            {formatCurrency(product.priceCents)}
          </p>
        </div>
        <button className="add-to-cart-button">
          <img className="cart-icon" 
          src={cartIcon} 
          />
            Add to cart
        </button>
      </div>
    )
}