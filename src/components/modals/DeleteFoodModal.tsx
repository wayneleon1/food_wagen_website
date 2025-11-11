import React, { useState } from "react";
import { X } from "lucide-react";
import { Food } from "@/types";
import Modal from "./Modal";
import Button from "../ui/Button";

interface DeleteFoodModalProps {
  food: Food;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

const DeleteFoodModal: React.FC<DeleteFoodModalProps> = ({
  food,
  onClose,
  onConfirm,
}) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setSubmitLoading(true);
      await onConfirm();
    } catch (error) {
      console.error("Error deleting food:", error);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h2
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffa500" }}
        >
          Delete Meal
        </h2>
        <button
          onClick={onClose}
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <X size={24} />
        </button>
      </div>

      <p style={{ marginBottom: "1.5rem", color: "#666", fontSize: "14px" }}>
        Are you sure you want to delete <strong>{food.name}</strong>? Actions
        cannot be reversed.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Button
          variant="primary"
          onClick={handleConfirm}
          disabled={submitLoading}
          loading={submitLoading}
          loadingText="Deleting..."
          testId="food-delete-confirm-btn"
          fullWidth
        >
          Yes
        </Button>
        <Button
          variant="secondary"
          onClick={onClose}
          disabled={submitLoading}
          testId="food-delete-cancel-btn"
          fullWidth
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteFoodModal;
