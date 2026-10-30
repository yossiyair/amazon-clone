import type { Product } from "../types/product";
import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import type { SelectedOption } from "../types/cart";
import "./ProductCard.css";
import cartIcon from "../assets/icons/cartIcon.png"

type ProductCardProps = {
  product: Product;
  onAddToCart: (productId: string, quantity: number, selectedOptions: SelectedOption[]) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const initialSelectedOptions = product.options.map((productOption) => {
    return (
      {
        name: productOption.name,
        value: productOption.values[0]
      }
    )
  });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>(initialSelectedOptions);

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
      <select
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.target.value));
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      {product.options.map((option) => {
        return (
          <div
            key={option.name}
          >
            <p>{option.name}</p>
            <select
              onChange={(event) => {
                setSelectedOptions((currentSelectedOptions) => {
                  const optionExists = currentSelectedOptions.some(
                    (selectedOption) => selectedOption.name === option.name
                  );

                  if (!optionExists) {
                    return [
                      ...currentSelectedOptions,
                      {
                        name: option.name,
                        value: event.target.value
                      }]
                  } else {
                    return currentSelectedOptions.map((selectedOption) => {
                      if (selectedOption.name === option.name) {
                        return {
                          name: option.name,
                          value: event.target.value
                        }
                      } return selectedOption;
                    });
                  }
                });
              }}
            >
              {option.values.map((value) => {
                return <option
                  key={value}
                >{value}</option>
              })}
            </select>
          </div>
        )
      })}

      <button className="add-to-cart-button"
        onClick={() => {
          onAddToCart(product.id, quantity, selectedOptions);
        }}
      >
        <img className="cart-icon"
          src={cartIcon}
        />
        Add to cart
      </button>
    </div>
  )
}
