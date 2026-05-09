import React from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "font-bold px-5 py-2 rounded transition-all duration-200 hover:cursor-pointer active:scale-[0.98] hover:scale-[1.02]";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "text-white bg-[#FF6F61] hover:bg-[#FF8A75]",

    secondary:
      "text-[#ffffff] border-2 border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}