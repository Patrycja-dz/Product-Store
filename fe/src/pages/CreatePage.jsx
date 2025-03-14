import { Toaster } from "../components/ui/toaster";
import Form from "../components/Form";
import React from "react";
import { Container } from "@chakra-ui/react";
const CreatePage = () => {
  return (
    <Container maxW={"3xl"}>
      <Toaster />
      <Form />
    </Container>
  );
};

export default CreatePage;
