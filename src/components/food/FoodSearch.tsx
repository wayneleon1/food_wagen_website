import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface FoodSearchProps {
  onSearch: (query: string) => void;
}

const FoodSearch: React.FC<FoodSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  return (
    <div style={{ position: "relative" }}>
      <Search
        size={20}
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#999",
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
          padding: "0.75rem 1rem 0.75rem 2.5rem",
          border: "1px solid #e0e0e0",
          borderRadius: "6px",
          fontSize: "14px",
          outline: "none",
        }}
      />
    </div>
  );
};

export default FoodSearch;
