"use client";

import { useState } from "react";

interface ProductTabsProps {
  product: {
    description: string;
    topNotes: string[];
    middleNotes: string[];
    baseNotes: string[];
  };
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "top", label: "Top Notes" },
    { id: "middle", label: "Middle Notes" },
    { id: "base", label: "Base Notes" },
  ];

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-2 border-b border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-t-lg px-5 py-3 font-medium transition ${
              activeTab === tab.id
                ? "bg-red-600 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-b-lg border border-t-0 border-zinc-800 bg-zinc-900 p-6 text-zinc-300">
        {activeTab === "description" && (
          <p>{product.description || "No description available."}</p>
        )}

        {activeTab === "top" && (
          <ul className="list-disc pl-5">
            {product.topNotes.length > 0 ? (
              product.topNotes.map((note) => (
                <li key={note}>{note}</li>
              ))
            ) : (
              <li>No top notes available.</li>
            )}
          </ul>
        )}

        {activeTab === "middle" && (
          <ul className="list-disc pl-5">
            {product.middleNotes.length > 0 ? (
              product.middleNotes.map((note) => (
                <li key={note}>{note}</li>
              ))
            ) : (
              <li>No middle notes available.</li>
            )}
          </ul>
        )}

        {activeTab === "base" && (
          <ul className="list-disc pl-5">
            {product.baseNotes.length > 0 ? (
              product.baseNotes.map((note) => (
                <li key={note}>{note}</li>
              ))
            ) : (
              <li>No base notes available.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}