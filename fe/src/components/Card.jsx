import React from "react";
import { Button, Text, Image, Card } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={product.image} alt={product.description} />
      <Card.Body gap="2">
        <Card.Title>{product.name}</Card.Title>
        <Card.Description>{product.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
