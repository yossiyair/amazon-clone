import { useState, useEffect } from "react";
import { getProducts } from "./services/productService"
import type { Product } from "./types/product";
import type { CartItem, SelectedOption } from "./types/cart";
import { Navbar } from "./components/Navbar";
import { ProductsGrid } from "./components/ProductsGrid";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  function handleAddToCart(productId: string, quantity: number, selectedOptions: SelectedOption[]) {

    setCart((currentCart) => {
      const productExistInCart = currentCart.find((cartItem) => {
        const matchesProduct = cartItem.productId === productId;

        if (selectedOptions.length === cartItem.selectedOptions.length && matchesProduct) {
          const matchesSelectedOptions = selectedOptions.every((selectedOption) => {
            return cartItem.selectedOptions.some((cartOption) => {
              return selectedOption.name === cartOption.name &&
                selectedOption.value === cartOption.value;
            });
          });

          return matchesSelectedOptions;
        } else return false;
      });

      if (productExistInCart) {
        return currentCart.map((cartItem) => {
          if (cartItem === productExistInCart) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity
            }
          } else return cartItem;
        });
      } else {
        return [...currentCart,
        {
          productId,
          quantity,
          selectedOptions,
          deliveryOption: {
            estimatedDeliveryDays: 7,
            priceCents: 0
          }
        }]
      }
    })
  }

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await getProducts();
      setProducts(productData);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Navbar 
        cart={cart}
      />
      <ProductsGrid
        products={products}
        onAddToCart={handleAddToCart}
      />
    </>
  )
}

export default App
