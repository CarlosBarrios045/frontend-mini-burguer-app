import React from "react";
import classnames from "classnames";

// Material UI
import { Button } from "@material-ui/core";

// Icons
import { GoSearch } from "react-icons/go";

// Styles
import styles from "./styles";

const Search = ({ categories, categorySelected, setCategorySelected }) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.contentButton}>
          <Button className={classes.search}>
            <GoSearch size={20} />
          </Button>

          <Button
            className={classnames({
              [classes.button]: true,
              [classes.buttonSelected]: categorySelected === "",
            })}
            onClick={() => setCategorySelected("")}
          >
            Todas las categorías
          </Button>
          {categories?.map((category) => (
            <Button
              className={classnames({
                [classes.button]: true,
                [classes.buttonSelected]:
                  category.category === categorySelected,
              })}
              onClick={() => {
                if (category.category !== categorySelected)
                  setCategorySelected(category.category);
              }}
              key={category.id}
            >
              {category.category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
