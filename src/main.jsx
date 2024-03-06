import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/headers/header";
import Routerss from "./router/router";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Header />
        <Routerss />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);
