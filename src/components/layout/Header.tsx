import React from "react";

interface HeaderProps {
  onAddClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  return (
    <header
      style={{
        backgroundColor: "white",
        padding: "1rem 2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "24px" }}>🍔</span>
          <span
            style={{ fontSize: "20px", fontWeight: "bold", color: "#ffa500" }}
          >
            FoodWagen
          </span>
        </div>
        <button
          className="food-btn food-btn-primary"
          onClick={onAddClick}
          data-test-id="food-add-meal-btn"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            fontWeight: 600,
            cursor: "pointer",
            border: "none",
            background: "#ffa500",
            color: "white",
            transition: "all 150ms",
          }}
        >
          Add Meal
        </button>
      </div>
    </header>
  );
};

export default Header;
