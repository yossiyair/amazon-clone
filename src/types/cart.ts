import type { DeliveryOption } from "./shipping";

export type CartItem = {
  productId: string;
  quantity: number;
  selectedOptions: SelectedOption[];
  deliveryOption: DeliveryOption;
};

export type SelectedOption = {
  name: string;
  value: string;
};
