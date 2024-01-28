import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../styled-component/button.styled";

interface NavigationButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  to,
  children,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(to);
  };

  return <div onClick={handleButtonClick}>{children}</div>;
};

export default NavigationButton;
