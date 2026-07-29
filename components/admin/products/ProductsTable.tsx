"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteProductModal from "./DeleteProductModal";
type Product = {
    _id: string;
    name: string;
    brand: string;
    category: string;
    image: string;
    price: number;
    stock: number;
};

export default function ProductsTable() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [search, setSearch] = useState("");
    const [brandFilter, setBrandFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        try {
            const res = await fetch("/api/products");
            const data = await res.json();

            setProducts(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <p className="text-zinc-400">
                Loading products...
            </p>
        );
    }

    async function deleteProduct() {
        if (!selectedProduct) return;

        try {
            setDeleteLoading(true);

            const res = await fetch(`/api/products/${selectedProduct._id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            setSelectedProduct(null);
            fetchProducts();
        } catch (error) {
            console.error(error);
            alert("Delete failed");
        } finally {
            setDeleteLoading(false);
        }
    }

    const brands = [
        "All",
        ...new Set(products.map((p) => p.brand)),
    ];

    const categories = [
        "All",
        ...new Set(products.map((p) => p.category)),
    ];

    const filteredProducts = products.filter((product) => {
        const value = search.toLowerCase();

        const matchesSearch =
            product.name.toLowerCase().includes(value) ||
            product.brand.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value);

        const matchesBrand =
            brandFilter === "All" ||
            product.brand === brandFilter;

        const matchesCategory =
            categoryFilter === "All" ||
            product.category === categoryFilter;

        return (
            matchesSearch &&
            matchesBrand &&
            matchesCategory
        );
    });

    return (
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="🔍 Search by product, brand or category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-500"
                />
            </div>

            <div className="mb-4 flex gap-4">
                <select
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                    className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
                >
                    {brands.map((brand) => (
                        <option key={brand}>{brand}</option>
                    ))}
                </select>

                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
                >
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </div>

            <table className="min-w-full text-left">
                <thead className="bg-zinc-900">
                    <tr>

                        <th className="p-4">Image</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">Brand</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Stock</th>
                        <th className="p-4">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProducts.map((product) => (
                        <tr
                            key={product._id}
                            className="border-t border-zinc-800"
                        >
                            <td className="p-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-16 w-16 rounded-lg object-cover"
                                />
                            </td>

                            <td className="p-4">{product.name}</td>

                            <td className="p-4">{product.brand}</td>

                            <td className="p-4">{product.category}</td>

                            <td className="p-4">₹{product.price}</td>

                            <td className="p-4">{product.stock}</td>
                            <td className="p-4 flex gap-3">
                                <Link
                                    href={`/admin/products/edit/${product._id}`}
                                    className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-500"
                                >
                                    Edit
                                </Link>

                                {/* <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-500"
                                >
                                    Delete
                                </button> */}
                                <button
                                    onClick={() => {
                                        console.log("Delete clicked");
                                        setSelectedProduct(product);
                                    }}
                                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-500"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <DeleteProductModal
                open={!!selectedProduct}
                productName={selectedProduct?.name ?? ""}
                loading={deleteLoading}
                onClose={() => setSelectedProduct(null)}
                onConfirm={deleteProduct}
            />
        </div>
    );
}