import { foodApi } from "@/services/api";
import { Food } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFoods = createAsyncThunk(
  "food/fetchFoods",
  async (_, { rejectWithValue }) => {
    try {
      const data = await foodApi.getFoods();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchFoods = createAsyncThunk(
  "food/searchFoods",
  async (query: string, { rejectWithValue }) => {
    try {
      const data = await foodApi.searchFoods(query);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createFood = createAsyncThunk(
  "food/createFood",
  async (foodData: Partial<Food>, { rejectWithValue }) => {
    try {
      const data = await foodApi.createFood(foodData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateFood = createAsyncThunk(
  "food/updateFood",
  async (
    { id, data }: { id: string; data: Partial<Food> },
    { rejectWithValue }
  ) => {
    try {
      const result = await foodApi.updateFood(id, data);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFood = createAsyncThunk(
  "food/deleteFood",
  async (id: string, { rejectWithValue }) => {
    try {
      await foodApi.deleteFood(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
