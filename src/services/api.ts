import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";
import { Food } from "@/types";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const foodApi = {
  // Get all foods
  getFoods: async (): Promise<Food[]> => {
    const response = await api.get("/Food");
    return response.data;
  },

  // Search foods
  searchFoods: async (query: string): Promise<Food[]> => {
    const response = await api.get(`/Food?name=${query}`);
    return response.data;
  },

  // Create food
  createFood: async (data: Partial<Food>): Promise<Food> => {
    const response = await api.post("/Food", data);
    return response.data;
  },

  // Update food
  updateFood: async (id: string, data: Partial<Food>): Promise<Food> => {
    const response = await api.put(`/Food/${id}`, data);
    return response.data;
  },

  // Delete food
  deleteFood: async (id: string): Promise<void> => {
    await api.delete(`/Food/${id}`);
  },
};

export default api;
