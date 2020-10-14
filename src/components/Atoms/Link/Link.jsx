import React from "react";
import classnames from "classnames";
import RouteLink from "next/link";

import styles from "./styles";

const Link = ({
  href = "",
  normal,
  label,
  children,
  className,
  disabled,
  ...rest
}) => {
  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className,
  });

  if (!normal) {
    return (
      <RouteLink
        href={!disabled ? href : null}
        {...rest}
        style={{ fontWeight: 500 }}
      >
        <a className={classNames}>{children}</a>
      </RouteLink>
    );
  }

  return (
    <a
      href={!disabled ? href : null}
      className={classNames}
      {...rest}
      style={{ fontWeight: 500 }}
    >
      {children}
    </a>
  );
};

export default Link;
