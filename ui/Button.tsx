import Link from 'next/link';
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  path: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({
  title,
  icon,
  path,
  className = "",
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ariaLabel
}: ButtonProps) => {
  const baseClasses = "inline-flex whitespace-nowrap gap-2 items-center capitalize border-0 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-[#FE6500] text-white hover:bg-[#e55a00] focus:ring-[#FE6500]",
    secondary: "bg-[#333333] text-white hover:bg-[#2a2a2a] focus:ring-[#333333]",
    outline: "border-2 border-[#FE6500] text-[#FE6500] hover:bg-[#FE6500] hover:text-white focus:ring-[#FE6500]"
  };

  const sizeClasses = {
    sm: "text-sm font-medium py-2 px-3",
    md: "text-md font-semibold py-3 px-4",
    lg: "text-lg font-bold py-4 px-6"
  };

  const newClassName = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <Link
      href={path}
      className={newClassName}
      onClick={onClick}
      aria-label={ariaLabel || title}
      aria-disabled={disabled}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{title}</span>
    </Link>
  );
};

export default Button;