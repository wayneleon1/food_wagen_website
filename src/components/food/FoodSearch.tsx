"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface FoodSearchProps {
  onSearch: (query: string) => void;
}

const FoodSearch: React.FC<FoodSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="food-search-container">
      <div
        style={{
          position: "relative",
          background: "#F5F5F5",
          borderRadius: "6px",
          flex: 1,
        }}
      >
        <Search
          size={20}
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ffa500",
          }}
        />
        <input
          type="text"
          placeholder="What do you like to eat today?"
          className="food-search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          data-test-id="food-search-input"
          style={{
            width: "100%",
            padding: "20px 16px 20px 40px",
            fontSize: "14px",
            outline: "none",
            background: "transparent",
            border: "none",
          }}
        />
      </div>
      <button
        className="food-btn"
        style={{
          color: "white",
          padding: "20px 43px",
          borderRadius: "8px",
          fontWeight: 600,
          background: "linear-gradient(90deg, #FF7A7A 0%, #F65900 100%)",
        }}
        onClick={() => onSearch(searchQuery)}
        data-test-id="food-search-btn"
      >
        <Search
          size={16}
          style={{
            color: "#ffffff",
          }}
        />
        Find Meal
      </button>
    </div>
  );
};

export default FoodSearch;
