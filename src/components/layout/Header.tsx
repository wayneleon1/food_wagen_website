import Image from "next/image";
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
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image
            src="/images/logo.svg"
            alt="FoodWagen Logo"
            width={24}
            height={24}
          />
          <span style={{ fontSize: "32px", fontWeight: "bold" }}>
            <span style={{ color: "#F17228" }}>Food</span>
            <span style={{ color: "#FFB30E" }}>Wagen</span>
          </span>
        </div>
        <button
          className="food-btn food-btn-primary"
          onClick={onAddClick}
          data-test-id="food-add-meal-btn"
          style={{
            padding: "12px 38px",
            borderRadius: "14px",
            fontWeight: 600,
            cursor: "pointer",
            border: "none",
            color: "white",
            transition: "all 150ms",
            background: "linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)",
            boxShadow: "0 2px 8px rgba(255, 165, 0, 0.3)",
            transform: "translateY(-1px)",
          }}
        >
          Add Meal
        </button>
      </div>
    </header>
  );
};

export default Header;
