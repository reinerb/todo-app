import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" />
      <Route path="/new" />
      <Route path=":taskId" />
      <Route path=":taskId/edit" />
    </Routes>
  </ChakraProvider>
);
