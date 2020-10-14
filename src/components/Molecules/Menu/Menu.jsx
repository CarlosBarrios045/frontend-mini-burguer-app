import React from "react";

// Material UI
import { Button, Typography } from "@material-ui/core";

// Icons
import { AiOutlineShopping } from "react-icons/ai";

// Styles
import styles from "./styles";

const Menu = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Button className={classes.flex}>
          <AiOutlineShopping size={25} />
          <Typography component="p">2</Typography>
        </Button>
        <Button
          component="p"
          style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}
        >
          VER PEDIDOS
        </Button>
        <Button className={classes.button}>$850</Button>
      </div>
    </div>
  );
};

export default Menu;
