import React from "react";
import { Loader2 } from "lucide-react";
import FoodCard from "./FoodCard";
import { Food } from "@/types";

interface FoodGridProps {
  foods: Food[];
  loading: boolean;
  onEdit: (food: Food) => void;
  onDelete: (food: Food) => void;
}

const FoodGrid: React.FC<FoodGridProps> = ({
  foods,
  loading,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <section style={{ padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "3rem",
            }}
          >
            <Loader2 className="animate-spin" size={48} color="#ffa500" />
          </div>
        </div>
      </section>
    );
  }

  if (foods.length === 0) {
    return (
      <section style={{ padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            className="empty-state-message"
            style={{ textAlign: "center", padding: "3rem", color: "#666" }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              No meals found
            </h3>
            <p>Try adjusting your search or add a new meal</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          Featured Meals
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button
            className="food-btn food-btn-primary"
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              background: "#ffa500",
              color: "white",
            }}
          >
            Load more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodGrid;
