import React, { useState } from "react";
import numeral from "numeral";

// Material UI
import { Button, Typography } from "@material-ui/core";

// Icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { FiTrash } from "react-icons/fi";

// Styles
import styles from "./styles";

const Product = ({ product }) => {
  const classes = styles();
  const [selected, setSelected] = useState(false);
  const [countProducts, setCountProducts] = useState(1);

  const { name, image, have_descuent, descuent, price } = product;

  return (
    <div className={classes.product}>
      <div className={classes.detailsProduct}>
        <div className={classes.contentImg}>
          <div
            className={classes.img}
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_URI_BACKEND}${image?.url})`,
            }}
          />
        </div>

        <div className={classes.contentDetails}>
          <Typography component="h4" className={classes.title}>
            {name}
          </Typography>
          {have_descuent && (
            <div className={classes.porcent}>
              <Typography component="p">
                {numeral(descuent).divide(price).subtract(1).format("0%")}
              </Typography>
            </div>
          )}
          {!selected ? (
            <>
              <div className={classes.details}>
                {have_descuent && (
                  <Typography component="p" className={classes.descuent}>
                    $ {price}
                  </Typography>
                )}
                <Typography component="p" className={classes.price}>
                  $ {have_descuent ? descuent : price}
                </Typography>
              </div>
              <Button
                className={classes.buttonCar}
                onClick={() => setSelected(true)}
              >
                <AiOutlineShoppingCart size={20} color="#fff" />
              </Button>
            </>
          ) : (
            <>
              <div className={classes.details}>
                <Typography component="p" className={classes.price}>
                  $ {have_descuent ? descuent : price}
                </Typography>
              </div>
              <div className={classes.cardOpen}>
                <div className={classes.buttonsCard}>
                  <Button
                    className={classes.buttons}
                    onClick={
                      countProducts > 1
                        ? () => setCountProducts((prev) => prev - 1)
                        : () => setSelected(false)
                    }
                  >
                    {countProducts > 1 ? (
                      <IoIosRemove size={20} color="#cbd7e2" />
                    ) : (
                      <FiTrash size={20} color="#cbd7e2" />
                    )}
                  </Button>
                  <Typography component="p">{countProducts}</Typography>

                  <Button
                    className={classes.buttons}
                    onClick={() => setCountProducts((prev) => prev + 1)}
                  >
                    <IoIosAdd size={20} color="#c40808" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
