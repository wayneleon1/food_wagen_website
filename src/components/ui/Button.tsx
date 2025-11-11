import React, { ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  testId?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
  loadingText,
  testId,
  fullWidth = false,
  type = "button",
}) => {
  const baseStyles: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    fontWeight: 600,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    border: "none",
    fontSize: "14px",
    transition: "all 150ms",
    opacity: disabled || loading ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  const variantStyles: React.CSSProperties =
    variant === "primary"
      ? {
          background: "#ffa500",
          color: "white",
        }
      : {
          background: "white",
          color: "#333",
          border: "1px solid #e0e0e0",
        };

  return (
    <button
      type={type}
      className={`food-btn food-btn-${variant}`}
      onClick={onClick}
      disabled={disabled || loading}
      data-test-id={testId}
      style={{ ...baseStyles, ...variantStyles }}
    >
      {loading && <LoadingSpinner size={16} />}
      {loading && loadingText ? loadingText : children}
    </button>
  );
};

export default Button;
