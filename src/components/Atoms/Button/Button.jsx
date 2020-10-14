import React from "react";
import classnames from "classnames";
import { Button as ButtonBase } from "@material-ui/core";

// Styles
import styles from "./styles";

const Button = ({
  type,
  className,
  variant = "text",
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [classes.text]: variant === "text",
    [className]: !!className,
  });

  return (
    <ButtonBase
      type={type}
      variant={variant}
      className={classNames}
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  disabled: false,
  theme: "contained",
};

export default Button;
