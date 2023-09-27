import { useState, useRef, ReactNode } from "react";

type TooltipProps = {
  content: string | ReactNode;
  children: ReactNode;
  className?: string;
  ySpace?: string;
};

const Tooltip = ({
  content,
  children,
  className,
  ySpace = "12",
}: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span
          className={`absolute z-40 -translate-y-${ySpace} rounded-md border-2 border-text bg-background px-4 py-2 text-text`}
        >
          {content}
        </span>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
