import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (product) => {
    if (
      !product.name ||
      !product.description ||
      !product.image ||
      !product.price ||
      !product.brand ||
      !product.category ||
      !product.rating ||
      !product.numReviews
    ) {
      return {
        message: "All fields are required, please fill in",
        success: false,
      };
    }
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (response.ok) {
        set((prevState) => ({ products: [...prevState.products, data.data] }));
        return {
          message: "Product created successfully",
          success: true,
        };
      } else {
        return {
          message: data.message || "Failed to create product",
          success: false,
        };
      }
    } catch (error) {
      return {
        message: error.message || "An error occurred",
        success: false,
      };
    }
  },

  getProducts: async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    set({ products: data.data });
  },
}));
