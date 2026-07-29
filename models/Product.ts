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

    /* ---------- Perfume Details ---------- */

    topNotes: {
      type: [String],
      default: [],
    },

    middleNotes: {
      type: [String],
      default: [],
    },

    baseNotes: {
      type: [String],
      default: [],
    },

    longevity: {
      type: String,
      default: "",
    },

    projection: {
      type: String,
      default: "",
    },

    concentration: {
      type: String,
      enum: ["EDT", "EDP", "Parfum", "Attar", ""],
      default: "",
    },

    /* ---------- Homepage ---------- */

    featured: {
      type: Boolean,
      default: false,
    },

    bestSeller: {
      type: Boolean,
      default: false,
    },

    newArrival: {
      type: Boolean,
      default: true,
    },

    /* ---------- Product Status ---------- */

    isActive: {
      type: Boolean,
      default: true,
    },

    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  models.Product || model("Product", ProductSchema);

export default Product;