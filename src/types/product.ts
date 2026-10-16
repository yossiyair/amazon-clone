export type Product = {
  id: string;
  image: string;
  title: string;
  rating: number;
  priceCents: number;
  category: string;
  description: string;
  options: Option[];
};

type Option = {
  name: string;
  values: string[];
};



