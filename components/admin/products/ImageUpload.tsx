"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  onUpload: (url: string) => void;
  value?: string;
};

export default function ImageUpload({
  onUpload,
  value,
}: Props) {
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value) {
      setPreview(value);
    }
  }, [value]);

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
        setPreview(data.url);
        onUpload(data.url);
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
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