import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Men", "Women", "Unisex"],
      default: "Unisex",
    },

    size: {
      type: String,
      default: "100ml",
    },

    mrp: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;