import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  search: string;
}

const initialState: FilterState = {
  category: "All",
  search: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSearch } = filterSlice.actions;
export default filterSlice.reducer;