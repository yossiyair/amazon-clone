import type { Product } from "../types/product";
import { supabase } from "./supabaseClient";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
  .from("products")
  .select("*");

  if (error) {
    throw error;
  }

  const products = data.map((product) => {
    return {
      id: product.id,
      image: product.image,
      title: product.title,
      rating: product.rating,
      priceCents: product.price_cents,
      category: product.category,
      description: product.description,
      options: product.options
    }
  });

  return products;
}

