import React from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// Molecules
import Navbar from "../../Molecules/Navbar";
// import Sidebar from "../../Molecules/Sidebar";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  container: {
    height: "100%",
  },
}));

const Container = ({ children, className }) => {
  const classes = useStyles();

  const classNames = classnames({
    [classes.container]: true,
    [className]: !!className,
  });

  return (
    <div className={classes.root}>
      {/* <Sidebar /> */}
      <div className={classes.column}>
        <Navbar />
        <div className={classNames}>{children}</div>
      </div>
    </div>
  );
};
export default Container;
