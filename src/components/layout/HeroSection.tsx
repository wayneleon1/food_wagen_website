import React, { useState } from "react";
import FoodSearch from "../food/FoodSearch";
import Image from "next/image";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [deliveryMode, setDeliveryMode] = useState<"delivery" | "pickup">(
    "delivery"
  );

  return (
    <section
      style={{
        background: "#FFB30E",
        padding: "140px 20px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "bold",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            Are you starving?
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "2rem",
              opacity: 0.9,
            }}
          >
            Within a few clicks, find meals that are accessible near you
          </p>

          {/* Delivery/Pickup Toggle & Search */}
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <button
                onClick={() => setDeliveryMode("delivery")}
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  background:
                    deliveryMode === "delivery" ? "#F172281A" : "transparent",
                  color: deliveryMode === "delivery" ? "#F17228" : "#757575",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                  transition: "all 150ms",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Image
                  src="/images/bike.svg"
                  alt="Delivery Icon"
                  width={24}
                  height={24}
                  style={{ display: "inline-flex" }}
                />
                <span>Delivery</span>
              </button>
              <button
                onClick={() => setDeliveryMode("pickup")}
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  background:
                    deliveryMode === "pickup" ? "#F172281A" : "transparent",
                  color: deliveryMode === "pickup" ? "#F17228" : "#757575",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                  transition: "all 150ms",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Image
                  src="/images/cart.svg"
                  alt="Cart Icon"
                  width={24}
                  height={24}
                  style={{ display: "inline-flex" }}
                />
                <span>Pickup</span>
              </button>
            </div>

            <FoodSearch onSearch={onSearch} />
          </div>
        </div>
      </div>

      <Image
        src="/images/ImageBase.svg"
        alt="Decorative Food Image"
        className="food-hero-image"
        width={497}
        height={497}
        style={{
          position: "absolute",
          right: "100px",
          top: "20%",
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default HeroSection;
