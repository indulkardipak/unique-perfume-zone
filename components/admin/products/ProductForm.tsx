"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "./ImageUpload";

type ProductFormProps = {
  mode: "add" | "edit";
  productId?: string;
};

export default function ProductForm({
  mode,
  productId,
}: ProductFormProps) {
  const router = useRouter();

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
  const [pageLoading, setPageLoading] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (mode === "edit" && productId) {
      loadProduct();
    }
  }, []);

  async function loadProduct() {
    try {
      setPageLoading(true);

      const res = await fetch(`/api/products/${productId}`);

      const product = await res.json();

      setProductName(product.name || "");
      setBrand(product.brand || "");
      setCategory(product.category || "");
      setGender(product.gender || "Unisex");
      setSize(product.size || "100ml");
      setPrice(product.mrp?.toString() || "");
      setDiscountPrice(product.price?.toString() || "");
      setStock(product.stock?.toString() || "");
      setDescription(product.description || "");
      setImage(product.image || "");
      setFeatured(product.featured ?? false);
      setIsActive(product.isActive ?? true);
    } catch (err) {
      console.log(err);
      alert("Failed to load product");
    } finally {
      setPageLoading(false);
    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
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

      const url =
        mode === "add"
          ? "/api/products"
          : `/api/products/${productId}`;

      const method =
        mode === "add"
          ? "POST"
          : "PUT";

      const response = await fetch(url, {
        method,
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
          featured,
          isActive,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert(
        mode === "add"
          ? "Product Added Successfully"
          : "Product Updated Successfully"
      );

      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      console.log(err);
      alert("Failed");
    } finally {
      setLoading(false);
    }
  }

  if (pageLoading) {
    return (
      <div className="py-20 text-center text-white">
        Loading Product...
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
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
            MRP (₹)
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
            Selling Price (₹)
          </label>

          <input
            type="number"
            value={discountPrice}
            onChange={(e) =>
              setDiscountPrice(e.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>
      </div>

      <ImageUpload
        value={image}
        onUpload={(url) => setImage(url)}
      />

      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="h-5 w-5"
          />

          <span className="text-white font-medium">
            Featured Product
          </span>
        </label>
      </div>

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

      <p className="break-all text-green-400">
        {image}
      </p>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black hover:bg-yellow-400 disabled:opacity-50"
      >
        {loading
          ? mode === "add"
            ? "Saving..."
            : "Updating..."
          : mode === "add"
            ? "Save Product"
            : "Update Product"}
      </button>

    </form>
  );
}