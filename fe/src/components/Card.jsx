import React from "react";
import { Button, Text, Image, Card, IconButton, Toast } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../../store/product";
import { toaster, Toaster } from "./ui/toaster";
const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const handleDeleteProduct = async () => {
    const { success, message } = await deleteProduct(product._id);
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
    });
  };

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
        <IconButton
          onClick={() => handleDeleteProduct(product.id)}
          variant="ghost"
        >
          <MdDelete />
        </IconButton>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
