import { FormData, FormErrors } from "@/types";
import { ERROR_MESSAGES, RESTAURANT_STATUS } from "./constants";

export const validateFoodForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = ERROR_MESSAGES.FOOD_NAME_REQUIRED;
  }

  const rating = parseFloat(formData.rating);
  if (!formData.rating || isNaN(rating)) {
    errors.rating = ERROR_MESSAGES.FOOD_RATING_NUMBER;
  } else if (rating < 1 || rating > 5) {
    errors.rating = ERROR_MESSAGES.FOOD_RATING_RANGE;
  }

  if (!formData.avatar.trim()) {
    errors.avatar = ERROR_MESSAGES.FOOD_IMAGE_REQUIRED;
  }

  if (!formData.restaurantName.trim()) {
    errors.restaurantName = ERROR_MESSAGES.RESTAURANT_NAME_REQUIRED;
  }

  if (!formData.logo.trim()) {
    errors.logo = ERROR_MESSAGES.RESTAURANT_LOGO_REQUIRED;
  }

  if (
    formData.status !== RESTAURANT_STATUS.OPEN &&
    formData.status !== RESTAURANT_STATUS.CLOSED
  ) {
    errors.status = ERROR_MESSAGES.RESTAURANT_STATUS_INVALID;
  }

  return errors;
};
