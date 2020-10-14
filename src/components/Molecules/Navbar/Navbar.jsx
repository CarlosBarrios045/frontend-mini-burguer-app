import React from "react";
import Router from "next/router";

// Icons
import { FiMenu } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";

// Components
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import Link from "src/components/Atoms/Link";
import Button from "src/components/Atoms/Button";

// Hook
import { useWindowDimensions } from "src/hooks/useWindowDimensions";

// styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 72,
    backgroundColor: theme.palette.text.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
    marginRight: "auto",
  },
  logOut: {
    color: theme.palette.primary.main,
  },
  flex: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.flex}>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <FiMenu />
          </IconButton>
          <Link href="/" className={classes.title}>
            Burguer App
          </Link>
        </div>
        <div>
          {width > 480 && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <TiShoppingCart />
            </IconButton>
          )}
          <Button
            className={classes.logOut}
            onClick={() => Router.push("/iniciar-sesion")}
          >
            Cerrar Sesión
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
