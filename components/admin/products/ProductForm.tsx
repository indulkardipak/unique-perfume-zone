"use client";

import { useState } from "react";
import ImageUpload from "./ImageUpload";

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("Unisex");
  const [size, setSize] = useState("100ml");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!productName || !brand || !category) {
      alert("Please fill all required fields");
      return;
    }

    if (!image) {
      alert("Please upload product image");
      return;
    }

    try {
      setLoading(true);

      const slug = productName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: productName,
          slug,
          brand,
          category,
          gender,
          size,
          mrp: Number(price),
          price: Number(discountPrice || price),
          stock: Number(stock),
          description,
          image,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("✅ Product Added Successfully");

      setProductName("");
      setBrand("");
      setCategory("");
      setGender("Unisex");
      setSize("100ml");
      setPrice("");
      setDiscountPrice("");
      setStock("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.error(error);
      alert("Failed to save product");
    } finally {
      setLoading(false);
    }
  }

  return (
  
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Product Name
          </label>

          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
            placeholder="Ajmal Kuro"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Brand
          </label>

          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
            placeholder="Ajmal"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
          >
            <option value="">Select Category</option>
            <option>Perfume</option>
            <option>Attar</option>
            <option>Body Spray</option>
            <option>Gift Set</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Gender
          </label>

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
          >
            <option>Men</option>
            <option>Women</option>
            <option>Unisex</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Size
          </label>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
          >
            <option>30ml</option>
            <option>50ml</option>
            <option>100ml</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Stock
          </label>

          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Price (₹)
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Discount Price (₹)
          </label>

          <input
            type="number"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>
      </div>

      <ImageUpload
  onUpload={(url) => {
    setImage(url);
  }}
/>

      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
        />
      </div>

      <p className="text-green-400 break-all">
  {image}
</p>

      <button
  type="submit"
  disabled={loading}
  className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black hover:bg-yellow-400 disabled:opacity-50"
>
  {loading ? "Saving..." : "Save Product"}
</button>
    </form>
  );
}