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
    "font-semibold px-5 py-2 rounded-xl transition-all duration-200 hover:cursor-pointer active:scale-[0.97] hover:scale-[1.03]";

  const variants: Record<ButtonVariant, string> = {
primary: `
  relative
  bg-[#2090C8]
  text-white
  font-semibold

  shadow-md
  border border-[#2090C8]

  hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]
  hover:border-yellow-300/40

  transition-all duration-200
  active:scale-[0.97]
`,

    secondary: `
      bg-white/80
      backdrop-blur-md
      text-[#2090C8]
      border border-[#2090C8]/30
      shadow-sm
      hover:bg-[#2090C8]
      hover:text-white
      hover:border-[#2090C8]
    `,
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
