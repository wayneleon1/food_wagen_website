import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { FormData, FormErrors } from "@/types";
import { validateFoodForm } from "@/utils/validation";
import { RESTAURANT_STATUS } from "@/utils/constants";

interface AddFoodModalProps {
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
}

const AddFoodModal: React.FC<AddFoodModalProps> = ({ onClose, onSubmit }) => {
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

  const handleSubmit = async () => {
    const errors = validateFoodForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        setSubmitLoading(true);
        await onSubmit(formData);
        // Reset form after successful submission
        setFormData({
          name: "",
          rating: "",
          avatar: "",
          restaurantName: "",
          logo: "",
          status: RESTAURANT_STATUS.OPEN,
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setSubmitLoading(false);
      }
    }
  };

  return (
    <div
      className="food-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1rem",
      }}
    >
      <div
        className="food-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "500px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
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
            Add a meal
          </h2>
          <button
            onClick={onClose}
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Food Name */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Food name
            </label>
            <input
              type="text"
              name="food_name"
              placeholder="Enter food name"
              className="food-input"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              data-test-id="food-name-input"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                fontSize: "14px",
                background: "#f5f5f5",
              }}
            />
            {formErrors.name && (
              <div
                id="food-name-error"
                className="food-error"
                style={{
                  color: "#dc3545",
                  fontSize: "12px",
                  marginTop: "0.25rem",
                }}
              >
                {formErrors.name}
              </div>
            )}
          </div>

          {/* Food Rating */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Food rating
            </label>
            <input
              type="number"
              name="food_rating"
              placeholder="Enter rating (1-5)"
              className="food-input"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
              data-test-id="food-rating-input"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                fontSize: "14px",
                background: "#f5f5f5",
              }}
            />
            {formErrors.rating && (
              <div
                id="food-rating-error"
                className="food-error"
                style={{
                  color: "#dc3545",
                  fontSize: "12px",
                  marginTop: "0.25rem",
                }}
              >
                {formErrors.rating}
              </div>
            )}
          </div>

          {/* Food Image */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Food image (link)
            </label>
            <input
              type="text"
              name="food_image"
              placeholder="Enter food image URL"
              className="food-input"
              value={formData.avatar}
              onChange={(e) =>
                setFormData({ ...formData, avatar: e.target.value })
              }
              data-test-id="food-image-input"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                fontSize: "14px",
                background: "#f5f5f5",
              }}
            />
            {formErrors.avatar && (
              <div
                id="food-image-error"
                className="food-error"
                style={{
                  color: "#dc3545",
                  fontSize: "12px",
                  marginTop: "0.25rem",
                }}
              >
                {formErrors.avatar}
              </div>
            )}
          </div>

          {/* Restaurant Name */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Restaurant name
            </label>
            <input
              type="text"
              name="restaurant_name"
              placeholder="Enter restaurant name"
              className="food-input"
              value={formData.restaurantName}
              onChange={(e) =>
                setFormData({ ...formData, restaurantName: e.target.value })
              }
              data-test-id="food-restaurant-name-input"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                fontSize: "14px",
                background: "#f5f5f5",
              }}
            />
            {formErrors.restaurantName && (
              <div
                id="restaurant-name-error"
                className="food-error"
                style={{
                  color: "#dc3545",
                  fontSize: "12px",
                  marginTop: "0.25rem",
                }}
              >
                {formErrors.restaurantName}
              </div>
            )}
          </div>

          {/* Restaurant Logo */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Restaurant logo (link)
            </label>
            <input
              type="text"
              name="restaurant_logo"
              placeholder="Enter restaurant logo URL"
              className="food-input"
              value={formData.logo}
              onChange={(e) =>
                setFormData({ ...formData, logo: e.target.value })
              }
              data-test-id="food-restaurant-logo-input"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                fontSize: "14px",
                background: "#f5f5f5",
              }}
            />
            {formErrors.logo && (
              <div
                id="restaurant-logo-error"
                className="food-error"
                style={{
                  color: "#dc3545",
                  fontSize: "12px",
                  marginTop: "0.25rem",
                }}
              >
                {formErrors.logo}
              </div>
            )}
          </div>

          {/* Restaurant Status */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Restaurant status (open/close)
            </label>
            <select
              name="restaurant_status"
              className="food-select"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              data-test-id="food-restaurant-status-select"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                fontSize: "14px",
                background: "#f5f5f5",
              }}
            >
              <option value={RESTAURANT_STATUS.OPEN}>Open Now</option>
              <option value={RESTAURANT_STATUS.CLOSED}>Closed</option>
            </select>
            {formErrors.status && (
              <div
                id="restaurant-status-error"
                className="food-error"
                style={{
                  color: "#dc3545",
                  fontSize: "12px",
                  marginTop: "0.25rem",
                }}
              >
                {formErrors.status}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <button
              className="food-btn food-btn-primary"
              onClick={handleSubmit}
              disabled={submitLoading}
              style={{
                flex: 1,
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                background: "#ffa500",
                color: "white",
              }}
              data-test-id="food-add-submit-btn"
            >
              {submitLoading ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                    style={{ display: "inline-block", marginRight: "0.5rem" }}
                  />
                  Adding Food...
                </>
              ) : (
                "Add"
              )}
            </button>
            <button
              className="food-btn food-btn-secondary"
              onClick={onClose}
              disabled={submitLoading}
              style={{
                flex: 1,
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: "pointer",
                background: "white",
                color: "#333",
                border: "1px solid #e0e0e0",
              }}
              data-test-id="food-add-cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodModal;
