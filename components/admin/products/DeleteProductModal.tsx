"use client";

type DeleteProductModalProps = {
  open: boolean;
  productName: string;
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteProductModal({
  open,
  productName,
  loading,
  onClose,
  onConfirm,
}: DeleteProductModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white">
          Delete Product
        </h2>

        <p className="mt-4 text-zinc-300">
          Are you sure you want to delete
          <span className="font-semibold text-white">
            {" "}
            {productName}
          </span>
          ?
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-zinc-700 px-5 py-2 text-white hover:bg-zinc-800"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-500 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}