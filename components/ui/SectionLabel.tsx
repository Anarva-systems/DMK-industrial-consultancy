import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  centered = false,
  className = "",
}) => (
  <div
    className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""} ${className}`}
  >
    {centered && (
      <div className="flex items-center gap-1.5">
        <span className="h-[2px] w-10 sm:w-14 bg-[#FF5500]" />
        <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
      </div>
    )}
    {!centered && (
      <div className="flex items-center gap-1.5">
        <span className="h-[2px] w-10 sm:w-14 bg-[#FF5500]" />
        <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
      </div>
    )}
    <span className="text-xs font-extrabold tracking-[0.2em] text-[#FF5500] uppercase px-1">
      {children}
    </span>
    {centered && (
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
        <span className="h-[2px] w-10 sm:w-14 bg-[#FF5500]" />
      </div>
    )}
  </div>
);
