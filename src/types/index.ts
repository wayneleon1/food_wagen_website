export interface Restaurant {
  name: string;
  logo: string;
  status: string;
}

export interface Food {
  id: string;
  name: string;
  avatar?: string;
  image?: string;
  rating: number;
  open?: boolean;
  logo?: string;
  Price?: string;
  food_price?: string;
  food_rating?: string;
  status?: string;
  restaurantName?: string;
  restaurant?: Restaurant;
  createdAt?: string;
}

export interface FormData {
  name: string;
  rating: string;
  avatar: string;
  restaurantName: string;
  logo: string;
  status: string;
}

export interface FormErrors {
  name?: string;
  rating?: string;
  avatar?: string;
  restaurantName?: string;
  logo?: string;
  status?: string;
}
