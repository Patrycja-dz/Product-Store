import React, { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import { Box, Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster";
import { useProductStore } from "../../store/product";

const Form = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    brand: "",
    category: "",
    rating: "",
    numReviews: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { message, success } = await createProduct(newProduct);
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
    });

    setNewProduct({
      name: "",
      price: "",
      description: "",
      image: "",
      brand: "",
      category: "",
      rating: "",
      numReviews: "",
    });
  };
  return (
    <VStack spacing={4}>
      <Heading as={"h1"} size={"2xl"} mb={8}>
        Create New Product
      </Heading>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "grey.700")}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spacing={8} p={8}>
          <HStack
            width="full"
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Input
              placeholder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </HStack>
          <Input
            placeholder="Product Description"
            name="description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <Input
            placeholder="Product Image"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <HStack
            width="full"
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <Input
              placeholder="Product Brand"
              name="brand"
              value={newProduct.brand}
              onChange={(e) =>
                setNewProduct({ ...newProduct, brand: e.target.value })
              }
            />
            <Input
              placeholder="Product Category"
              name="category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            />
          </HStack>

          <HStack
            width="full"
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <Input
              placeholder="Product Rating"
              type="number"
              name="rating"
              value={newProduct.rating}
              onChange={(e) =>
                setNewProduct({ ...newProduct, rating: e.target.value })
              }
            />
            <Input
              placeholder="Product Number of Revivews"
              name="numReviews"
              type="number"
              value={newProduct.numReviews}
              onChange={(e) =>
                setNewProduct({ ...newProduct, numReviews: e.target.value })
              }
            />
          </HStack>
          <Button
            colorPalette="blue"
            w={"full"}
            variant={"subtle"}
            onClick={handleAddProduct}
          >
            Create Product
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Form;
