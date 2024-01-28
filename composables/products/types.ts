export interface ProductFeaturesEntity {
  desc: string;
  quantity: string;
}

export interface ProductEntity {
  id: number;
  category: string;
  name: string;
  description: string;
  feature_desc: string;
  features: ProductFeaturesEntity[];
  image: string;
  images: string[];
  price: number;
  isNew: boolean;
}

export interface CartedProductEntity extends ProductEntity {
  quantity: number;
  user_id: string;
}

export interface PaymentOptions {
  id: number;
  placeholder: string;
  isSelected: boolean;
}
