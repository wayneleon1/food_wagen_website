import React, { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { Food, FormData, FormErrors } from "@/types";
import { validateFoodForm } from "@/utils/validation";
import { RESTAURANT_STATUS } from "@/utils/constants";
import Modal from "./Modal";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

interface EditFoodModalProps {
  food: Food;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
}

const EditFoodModal: React.FC<EditFoodModalProps> = ({
  food,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    rating: "",
    avatar: "",
    restaurantName: "",
    logo: "",
    status: RESTAURANT_STATUS.OPEN,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    // Populate form with food data
    setFormData({
      name: food.name,
      rating: food.rating.toString(),
      avatar: food.avatar || food.image || "",
      restaurantName: food.restaurant?.name || food.restaurantName || "",
      logo: food.restaurant?.logo || food.logo || "",
      status: food.restaurant?.status || food.status || "Open Now",
    });
  }, [food]);

  const handleSubmit = async () => {
    const errors = validateFoodForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        setSubmitLoading(true);
        await onSubmit(formData);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setSubmitLoading(false);
      }
    }
  };

  return (
    <Modal onClose={onClose}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h2
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffa500" }}
        >
          Edit Meal
        </h2>
        <button
          onClick={onClose}
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <X size={24} />
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input
          label="Food name"
          name="food_name"
          placeholder="Enter food name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={formErrors.name}
          errorId="food-name-error"
          testId="food-edit-name-input"
        />

        <Input
          label="Food rating"
          name="food_rating"
          type="number"
          min="1"
          max="5"
          step="0.1"
          placeholder="Enter rating (1-5)"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          error={formErrors.rating}
          errorId="food-rating-error"
          testId="food-edit-rating-input"
        />

        <Input
          label="Food image (link)"
          name="food_image"
          placeholder="Enter food image URL"
          value={formData.avatar}
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
          error={formErrors.avatar}
          errorId="food-image-error"
          testId="food-edit-image-input"
        />

        <Input
          label="Restaurant name"
          name="restaurant_name"
          placeholder="Enter restaurant name"
          value={formData.restaurantName}
          onChange={(e) =>
            setFormData({ ...formData, restaurantName: e.target.value })
          }
          error={formErrors.restaurantName}
          errorId="restaurant-name-error"
          testId="food-edit-restaurant-name-input"
        />

        <Input
          label="Restaurant logo (link)"
          name="restaurant_logo"
          placeholder="Enter restaurant logo URL"
          value={formData.logo}
          onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
          error={formErrors.logo}
          errorId="restaurant-logo-error"
          testId="food-edit-restaurant-logo-input"
        />

        <Select
          label="Restaurant status (open/close)"
          name="restaurant_status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          error={formErrors.status}
          errorId="restaurant-status-error"
          testId="food-edit-restaurant-status-select"
          options={[
            { value: RESTAURANT_STATUS.OPEN, label: "Open Now" },
            { value: RESTAURANT_STATUS.CLOSED, label: "Closed" },
          ]}
        />

        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={submitLoading}
            loading={submitLoading}
            loadingText="Updating Food..."
            testId="food-edit-submit-btn"
            fullWidth
          >
            Save
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
            disabled={submitLoading}
            testId="food-edit-cancel-btn"
            fullWidth
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditFoodModal;
