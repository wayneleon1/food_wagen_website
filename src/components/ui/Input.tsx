import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  errorId?: string;
  testId?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  errorId,
  testId,
  ...props
}) => {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "0.25rem",
          fontSize: "14px",
          color: "#666",
        }}
      >
        {label}
      </label>
      <input
        {...props}
        className="food-input"
        data-test-id={testId}
        aria-describedby={error ? errorId : undefined}
        style={{
          width: "100%",
          padding: "0.75rem",
          border: `1px solid ${error ? "#dc3545" : "#e0e0e0"}`,
          borderRadius: "6px",
          fontSize: "14px",
          background: "#f5f5f5",
          outline: "none",
          transition: "border-color 150ms",
        }}
      />
      {error && (
        <div
          id={errorId}
          className="food-error"
          style={{
            color: "#dc3545",
            fontSize: "12px",
            marginTop: "0.25rem",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
