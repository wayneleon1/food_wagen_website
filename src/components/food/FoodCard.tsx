import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { Food } from "@/types";

interface FoodCardProps {
  food: Food;
  onEdit: (food: Food) => void;
  onDelete: (food: Food) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, onEdit, onDelete }) => {
  const restaurant = {
    name: food.restaurant?.name || food.restaurantName || "Unknown",
    logo: food.restaurant?.logo || food.logo || "",
    status:
      food.restaurant?.status ||
      food.status ||
      (food.open ? "Open Now" : "Closed"),
  };

  const foodImage = food.avatar || food.image || "";

  return (
    <div
      className="food-card"
      data-test-id={`food-card-${food.id}`}
      style={{
        background: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Food Image */}
      <div
        style={{
          position: "relative",
          paddingTop: "66.67%",
          background: "#f0f0f0",
        }}
      >
        {foodImage && (
          <img
            src={foodImage}
            alt={food.name}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "#ff6b6b",
            color: "white",
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <span className="food-price">
            ${food.food_price || food.Price || "0.00"}
          </span>
        </div>
      </div>

      {/* Food Details */}
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          {restaurant.logo && (
            <img
              src={restaurant.logo}
              alt={restaurant.name}
              className="restaurant-logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              className="food-name"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "0.25rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {food.name}
            </h3>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span
                className="food-rating"
                style={{ color: "#ffa500", fontSize: "14px" }}
              >
                ⭐ {food.rating}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            <button
              onClick={() => onEdit(food)}
              data-test-id="food-edit-btn"
              style={{
                padding: "0.5rem",
                border: "none",
                background: "#f0f0f0",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => onDelete(food)}
              data-test-id="food-delete-btn"
              style={{
                padding: "0.5rem",
                border: "none",
                background: "#f0f0f0",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className="restaurant-name"
            style={{ fontSize: "14px", color: "#666" }}
          >
            {restaurant.name}
          </span>
          <span
            className="restaurant-status"
            style={{
              fontSize: "12px",
              padding: "0.25rem 0.75rem",
              borderRadius: "12px",
              background:
                restaurant.status === "Open Now" ? "#d4edda" : "#f8d7da",
              color: restaurant.status === "Open Now" ? "#155724" : "#721c24",
              fontWeight: 600,
            }}
          >
            {restaurant.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
