import express from "express";
import dotnev from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";
dotnev.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
