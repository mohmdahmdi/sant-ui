import clsx from "clsx";

export interface ButtonProps {
  primary?: boolean;
  color?: "primary" | "secondary" | "accent" | "neutral";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  primary = false,
  color = "primary",
  size = "medium",
  label,
  className,
  ...props
}: ButtonProps) => {
  const colorClasses = primary
    ? {
        primary: "bg-primary-800 text-white",
        secondary: "bg-secondary-800 text-white",
        accent: "bg-accent-800 text-white",
        gray: "bg-neutral-800 text-white",
      }
    : {
        primary: "border-2 border-primary-800 text-primary-800",
        secondary: "border-2 border-secondary-800 text-secondary-800",
        accent: "border-2 border-accent-800 text-accent-800",
        neutral: "border-2 border-neutral-800 text-neutral-800",
      };

  const sizeClasses =
    size === "large"
      ? primary
        ? "text-lg px-6 py-3"
        : "text-lg px-5 py-[9px]"
      : size === "medium"
      ? primary
        ? "px-4 py-2"
        : "px-[13px] py-[6px]"
      : primary
      ? "text-sm px-3 py-1"
      : "text-sm px-[10px] py-[2px]";

  return (
    <button
      type="button"
      className={clsx(
        "rounded-2xl items-center box-border hover:cursor-pointer",
        sizeClasses,
        colorClasses[color],
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
