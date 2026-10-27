import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  showArrow = false,
  children,
  className = "",
  href,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wide whitespace-nowrap";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-[#FF5500] hover:bg-[#E04B00] text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-white/90 border border-[#0F281E]/20 text-[#0F281E] hover:border-[#FF5500] hover:bg-white hover:text-[#FF5500] shadow-xs backdrop-blur-md",
    ghost:
      "text-[#0F281E]/85 hover:text-[#FF5500] hover:bg-[#0F281E]/5",
  };

  const combinedClass = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${combinedClass}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${combinedClass}`} {...props}>
      {content}
    </button>
  );
};
