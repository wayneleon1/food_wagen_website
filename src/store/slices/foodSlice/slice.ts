import { Food } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createFood,
  deleteFood,
  fetchFoods,
  searchFoods,
  updateFood,
} from "./thunks";

interface FoodState {
  foods: Food[];
  filteredFoods: Food[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: FoodState = {
  foods: [],
  filteredFoods: [],
  loading: false,
  error: null,
  searchQuery: "",
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Foods
    builder.addCase(fetchFoods.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.filteredFoods = action.payload;
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Search Foods
    builder.addCase(searchFoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.filteredFoods = action.payload;
    });
    builder.addCase(searchFoods.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Create Food
    builder.addCase(createFood.fulfilled, (state, action) => {
      state.foods.push(action.payload);
      state.filteredFoods.push(action.payload);
    });

    // Update Food
    builder.addCase(updateFood.fulfilled, (state, action) => {
      const index = state.foods.findIndex((f) => f.id === action.payload.id);
      if (index !== -1) {
        state.foods[index] = action.payload;
      }
      const filteredIndex = state.filteredFoods.findIndex(
        (f) => f.id === action.payload.id
      );
      if (filteredIndex !== -1) {
        state.filteredFoods[filteredIndex] = action.payload;
      }
    });

    // Delete Food
    builder.addCase(deleteFood.fulfilled, (state, action) => {
      state.foods = state.foods.filter((f) => f.id !== action.payload);
      state.filteredFoods = state.filteredFoods.filter(
        (f) => f.id !== action.payload
      );
    });
  },
});

export const { setSearchQuery, clearError } = foodSlice.actions;
export default foodSlice.reducer;
