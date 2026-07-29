"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUpload({ onUpload }: Props) {
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.url) {
        onUpload(data.url);
      } else {
        alert("Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }

    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm text-zinc-300">
        Product Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-white"
      />

      {loading && (
        <p className="text-yellow-400">
          Uploading image...
        </p>
      )}

      {preview && (
        <Image
          src={preview}
          alt="Preview"
          width={220}
          height={220}
          className="rounded-xl border border-zinc-700 object-cover"
        />
      )}
    </div>
  );
}