import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled } from "@mui/system";
import { useButton } from "@mui/base/useButton";

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children, disabled, onClick, className, type = "button" } = props;
  const { active, focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  return (
    <CustomButtonRoot
      {...getRootProps()}
      type={type}
      className={clsx("custom-button", className, {
        active,
        disabled,
        focusVisible,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default CustomButton;

const colors = {
  primary: "#d81b60", // Magenta Pink
  hover: "#c2185b", // Darker Pink
  active: "#ad1457", // Deep Magenta
  disabled: "#B0B8C4",
  text: "#FFFFFF",
  focusOutline: "#ff80ab",
};

const CustomButtonRoot = styled("button")`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 30px;
  color: ${colors.text};
  background-color: ${colors.primary};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.hover};
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${colors.active};
    transform: scale(0.98);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  }

  &.focusVisible {
    box-shadow: 0 0 0 4px ${colors.focusOutline};
    outline: none;
  }

  &.disabled {
    background-color: ${colors.disabled};
    color: #666;
    cursor: not-allowed;
    box-shadow: none;
    transform: scale(1);
  }

  /* 📱 Responsive Design */
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 10px 16px;
    height: 45px;
  }

  @media (max-width: 400px) {
    font-size: 0.85rem;
    padding: 8px 12px;
    height: 40px;
  }
`;
