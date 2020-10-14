import React, { useState } from "react";

// Components
import Header from "src/components/Molecules/Header";
import Search from "src/components/Molecules/Search";
import Menu from "src/components/Molecules/Menu";
import Products from "src/components/Organisms/Products";

// Graphql
import { GET_CATEGORIES } from "src/data/constants";
import { useQuery } from "@apollo/client";

const Home = () => {
  const [categorySelected, setCategorySelected] = useState("");

  // Get categories
  const { data } = useQuery(GET_CATEGORIES, {
    pollInterval: 15 * 1000, // 15 seconds
  });

  return (
    <>
      <Header />

      {data?.categories.length && (
        <>
          <Search
            categories={data?.categories}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
          {categorySelected ? (
            <Products
              category={categorySelected}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          ) : (
            <>
              {data?.categories.map((category) => (
                <Products
                  category={category.category}
                  categorySelected={categorySelected}
                  setCategorySelected={setCategorySelected}
                  key={category.id}
                />
              ))}
            </>
          )}
        </>
      )}

      <Menu />
      <div style={{ marginBottom: "5rem" }} />
    </>
  );
};

export default Home;
