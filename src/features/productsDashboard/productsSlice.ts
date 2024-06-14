import { createSlice } from "@reduxjs/toolkit";
import data from "../../stackline_frontend_assessment_data_2021.json";

export type Product = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    score: number;
  }[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }[];
};

// Define a type for the slice state
interface ProductsState {
  products: Product[];
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      console.log("Fetcing projects");
      state.products = data as Product[];
    },
  },
});

export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
