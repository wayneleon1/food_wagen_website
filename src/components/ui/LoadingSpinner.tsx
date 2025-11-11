import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24,
  color = "currentColor",
}) => {
  return (
    <Loader2
      size={size}
      color={color}
      style={{
        animation: "spin 1s linear infinite",
      }}
    />
  );
};

export default LoadingSpinner;
