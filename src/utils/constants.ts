export const API_BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io";

export const RESTAURANT_STATUS = {
  OPEN: "Open Now",
  CLOSED: "Closed",
} as const;

export const ERROR_MESSAGES = {
  FOOD_NAME_REQUIRED: "Food Name is required",
  FOOD_RATING_NUMBER: "Food Rating must be a number",
  FOOD_RATING_RANGE: "Rating must be between 1 and 5",
  FOOD_IMAGE_REQUIRED: "Food Image URL is required",
  RESTAURANT_NAME_REQUIRED: "Restaurant Name is required",
  RESTAURANT_LOGO_REQUIRED: "Restaurant Logo URL is required",
  RESTAURANT_STATUS_INVALID: "Restaurant Status must be 'Open Now' or 'Closed'",
} as const;

export const ANIMATION_DURATION = {
  SLIDE_UP: 300,
  HOVER: 150,
} as const;
