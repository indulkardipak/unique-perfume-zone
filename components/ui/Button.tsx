import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-yellow-400 text-black hover:bg-yellow-300"
      : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black";

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}