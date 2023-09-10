import React, { ReactNode } from "react";

const Button = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: any;
}) => {
  return (
    <button
      className={`${className} !bg-[#121619] text-[16px] text-white px-[12px] py-[8px] rounded-[12px] hover:[opacity:0.9] transition-all`}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};

export default Button;
