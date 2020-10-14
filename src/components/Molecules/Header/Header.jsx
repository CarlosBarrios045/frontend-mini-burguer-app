import React from "react";

// Material UI
import { Typography } from "@material-ui/core";

// Icons
import { GiVenezuela } from "react-icons/gi";

// Styles
import styles from "./styles";

const Header = () => {
  const classes = styles();
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <img src="/img/burguer.jpg" alt="burguer" className={classes.img} />
        <Typography component="h1" className={classes.title}>
          Burguer App
        </Typography>
        <Typography component="p" className={classes.subtitle}>
          Desarrollado por Juan Barrios
        </Typography>
        <Typography component="p" className={classes.textOpen}>
          Abierto
        </Typography>
      </div>
      <div className={classes.country}>
        <GiVenezuela style={{ marginRight: 5 }} /> Venezuela
      </div>
    </header>
  );
};

export default Header;
