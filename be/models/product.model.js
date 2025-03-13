import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
    brand: {
      type: String,
      required: [true, "Product brand is required"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    rating: {
      type: Number,
      required: [true, "Product rating is required"],
      default: 0,
    },
    numReviews: {
      type: Number,
      required: [true, "Product number of reviews is required"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
