import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useProductStore } from "../../store/product";
import ProductCard from "../components/Card";

const Cards = () => {
  const { getProducts, products } = useProductStore();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      gap={8}
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default Cards;
