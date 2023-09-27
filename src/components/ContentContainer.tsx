import { ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
};

const ContentContainer = ({ children, className }: ContentContainerProps) => {
  return <div className={`${className} px-24`}>{children}</div>;
};

export default ContentContainer;
