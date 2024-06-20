import type React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className="c-button">
      {children}
    </button>
  );
};

export default Button;
