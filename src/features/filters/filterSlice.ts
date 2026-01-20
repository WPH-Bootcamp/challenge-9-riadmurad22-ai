import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  searchQuery: string;
  category: string;
  sortBy: "price_asc" | "price_desc" | "rating";
}

const initialState: FilterState = {
  searchQuery: "",
  category: "All",
  sortBy: "rating",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<FilterState["sortBy"]>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSort } = filterSlice.actions;
export default filterSlice.reducer;
