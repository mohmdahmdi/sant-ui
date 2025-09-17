import clsx from "clsx";
import { ReactNode } from "react";

export interface KpiProps {
  primary?: boolean;
  color?: "primary" | "secondary" | "accent" | "neutral";
  label?: string;
  dashed?: boolean;
  onClick?: () => void;
  className?: string;
  data: { icon: ReactNode; title: string; description: string }[]; // length should be 4
}

export const Kpi = ({
  primary = true,
  color = "primary",
  label,
  className,
  data,
  dashed,
  ...props
}: KpiProps) => {
  const bgColor = {
    primary: "bg-primary-800",
    secondary: "bg-secondary-800",
    accent: "bg-accent-800",
    neutral: "bg-neutral-800",
  }[color];

  const textColor = "text-white";

  return (
    <div
      className={clsx(
        "w-full rounded-2xl py-3 px-6 flex justify-center items-center mt-5 mb-5",
        bgColor,
        textColor,
        className
      )}
      {...props}
    >
      {data.map((item, idx) => (
        <div key={idx} className="flex items-center w-full px-4 gap-x-4 h-full">
          <div
            className={
              "w-fit flex items-center justify-center rounded-full border-2 border-white text-white p-4 " +
              clsx([dashed && "border-dashed", primary && "!text-accent-200 !border-accent-200"]) 
            }
          >
            {item.icon}
          </div>
          <span className="h-16 w-px bg-neutral-300"></span>
          <div className="flex flex-col justify-between h-full">
            <p className="font-semibold text-md mb-2">{item.title}</p>
            <p className="text-sm opacity-90 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
