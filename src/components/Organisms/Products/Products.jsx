import React, { useEffect, useState } from "react";

// Material UI
import { Typography, Button } from "@material-ui/core";

// Components
import Product from "src/components/Molecules/Product";

// Graphql
import { GET_PRODUCTS } from "src/data/constants";
import { useLazyQuery } from "@apollo/client";

// Styles
import styles from "./styles";

const Products = ({ category, setCategorySelected, categorySelected }) => {
  const classes = styles();
  const [products, setProducts] = useState([]);

  // Get products
  const [getProducts] = useLazyQuery(GET_PRODUCTS, {
    pollInterval: 5 * 1000, // 1 minute
    onCompleted: (res) => setProducts(res.products),
  });

  const funcGetProducts = async () => {
    await getProducts({
      variables: { where: { categories: { category } } },
    });
  };

  useEffect(() => {
    if (category) funcGetProducts();
  }, [category]);

  if (!products.length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.contentTitle}>
        <Typography component="h4">{category}</Typography>
        <Button
          onClick={() => {
            if (category !== categorySelected) setCategorySelected(category);
          }}
        >
          <Typography component="p">Ver Todos</Typography>
        </Button>
      </div>
      <div className={classes.content}>
        <div className={classes.contentProducts}>
          {products?.map((product) => (
            <Product product={product} key={product?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
