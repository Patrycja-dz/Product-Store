import Cards from "../components/Cards";
import { Container, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <Container fluid maxWidth={"6xl"} px={4}>
      <VStack>
        <Text
          fontSize={{ base: "xl", sm: "2xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
          textTransform={"uppercase"}
          bgGradient="to-r"
          gradientFrom="blue.400"
          gradientTo="pink.400"
          bgClip={"text"}
        >
          Current Products 🚀
        </Text>
        <Text fontSize={"xl"} textAlign={"center"} color={"gray.500"}>
          No products found{" "}
          <Link to="/create">
            <Text
              as={"span"}
              _hover={{ textDecoration: "underline" }}
              color={"blue.500"}
            >
              Create a product
            </Text>
          </Link>
        </Text>
        <Cards />
      </VStack>
    </Container>
  );
};

export default HomePage;
