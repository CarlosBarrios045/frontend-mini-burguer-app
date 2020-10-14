import { useState } from "react";
import classnames from "classnames";

// Icons
import { FiEye, FiEyeOff } from "react-icons/fi";

// Material UI
import { TextField, InputAdornment } from "@material-ui/core";

// Styles
import styles from "./styles";

const Input = ({
  className,
  type,
  secondary,
  classNameIcon,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  const [icon, setIcon] = useState(true);
  const classes = styles();

  const classNames = classnames({
    [classes.inputSecondary]: secondary,
    [className]: !!className,
  });

  const classesIcon = classnames({
    [classes.iconMaterial]: true,
    [classNameIcon]: !!classNameIcon,
  });

  const changeIcon = () => {
    setIcon(!icon);
  };

  const validateType =
    type === "password" ? (icon ? "password" : "text") : type; // eslint-disable-line

  const variant = secondary ? "filled" : "standard";
  const validateShowIconEyes = type && type === "password" && !endAdornment;

  const inputDefault = (
    <TextField
      type={validateType}
      className={classNames}
      variant={variant}
      margin="normal"
      InputProps={{
        classes: { input: classes.default, focused: classes.focused },
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: validateShowIconEyes ? (
          <InputAdornment position="start">
            {icon ? (
              <FiEyeOff onClick={changeIcon} className={classesIcon} />
            ) : (
              <FiEye onClick={changeIcon} className={classesIcon} />
            )}
          </InputAdornment>
        ) : (
          endAdornment
        ),
      }}
      InputLabelProps={{
        classes: {
          root: classes.label,
          shrink: classes.labelShrink,
        },
      }}
      FormHelperTextProps={{ classes: { root: classes.helperText } }}
      fullWidth
      {...rest}
    />
  );

  return inputDefault;
};

Input.defaultProps = {
  className: "",
  type: "",
  secondary: false,
  startAdornment: "",
  endAdornment: "",
};

export default Input;
