"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchFoods,
  searchFoods,
  createFood,
  updateFood,
  deleteFood,
} from "@/store/slices/foodSlice/thunks";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import FoodGrid from "@/components/food/FoodGrid";
import Footer from "@/components/layout/Footer";
import AddFoodModal from "@/components/modals/AddFoodModal";
import EditFoodModal from "@/components/modals/EditFoodModal";
import DeleteFoodModal from "@/components/modals/DeleteFoodModal";
import { Food, FormData } from "@/types";

export default function Home() {
  const dispatch = useAppDispatch();
  const { filteredFoods, loading, searchQuery } = useAppSelector(
    (state) => state.food
  );

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  const handleSearch = (query: string) => {
    // if (query.trim()) {
    //   dispatch(searchFoods(query));
    // } else {
    //   dispatch(fetchFoods());
    // }
  };

  const handleAddFood = async (formData: FormData) => {
    await dispatch(
      createFood({
        name: formData.name,
        rating: parseFloat(formData.rating),
        avatar: formData.avatar,
        logo: formData.logo,
        open: formData.status === "Open Now",
        createdAt: new Date().toISOString(),
        restaurant: {
          name: formData.restaurantName,
          logo: formData.logo,
          status: formData.status,
        },
      })
    );
    setShowAddModal(false);
  };

  const handleEditFood = async (formData: FormData) => {
    if (!selectedFood) return;

    await dispatch(
      updateFood({
        id: selectedFood.id,
        data: {
          name: formData.name,
          rating: parseFloat(formData.rating),
          avatar: formData.avatar,
          logo: formData.logo,
          open: formData.status === "Open Now",
          restaurant: {
            name: formData.restaurantName,
            logo: formData.logo,
            status: formData.status,
          },
        },
      })
    );
    setShowEditModal(false);
    setSelectedFood(null);
  };

  const handleDeleteFood = async () => {
    if (!selectedFood) return;

    await dispatch(deleteFood(selectedFood.id));
    setShowDeleteModal(false);
    setSelectedFood(null);
  };

  const openEditModal = (food: Food) => {
    setSelectedFood(food);
    setShowEditModal(true);
  };

  const openDeleteModal = (food: Food) => {
    setSelectedFood(food);
    setShowDeleteModal(true);
  };

  return (
    <div className="food-app">
      <Header onAddClick={() => setShowAddModal(true)} />
      <HeroSection onSearch={handleSearch} />
      <FoodGrid
        foods={filteredFoods}
        loading={loading}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
      />
      <Footer />

      {showAddModal && (
        <AddFoodModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddFood}
        />
      )}

      {showEditModal && selectedFood && (
        <EditFoodModal
          food={selectedFood}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditFood}
        />
      )}

      {showDeleteModal && selectedFood && (
        <DeleteFoodModal
          food={selectedFood}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDeleteFood}
        />
      )}
    </div>
  );
}
