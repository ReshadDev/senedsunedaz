import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = (props) => {
  return <div className={`box ${props.className}`}>{props.children}</div>;
};

export default Box;
