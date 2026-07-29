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

    return (
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
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
                    {products.map((product) => (
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