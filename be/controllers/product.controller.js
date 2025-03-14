import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProductController = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetch products: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProductController = async (req, res) => {
  const product = req.body;
  if (
    !product.name ||
    !product.price ||
    !product.description ||
    !product.image ||
    !product.brand ||
    !product.category ||
    !product.rating ||
    !product.numReviews
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error in create product: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateProductController = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error in update product: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
