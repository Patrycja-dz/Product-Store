import { Container, Flex, Text, HStack, IconButton } from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";
import { Link } from "react-router";
import React from "react";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Container fluid maxWidth={"6xl"} px={4}>
      <Flex
        py={4}
        justifyContent={"space-between"}
        h={16}
        alignItems={"center"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
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
          <Link to="/">Product Store </Link>
        </Text>
        <HStack alignItems={"center"}>
          <Link to="/create">
            <IconButton variant="outline" size="sm">
              <CiSquarePlus fontSize={20} />
            </IconButton>
          </Link>
          <IconButton onClick={toggleColorMode} variant="outline" size="sm">
            {colorMode === "light" ? <LuMoon /> : <LuSun />}
          </IconButton>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
