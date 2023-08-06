import React from "react";
import { ButtonProps } from "./Button.types";
import css from './Button.module.scss';
import { add } from "@kamrucci/utils";

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={css.button}
      {...props}>
      {text} {add(2, 3)}
    </button>
  );
};

export default Button;
