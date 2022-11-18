import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/Navbar";
import Home, { device } from "../components/Home";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "../fonts.css";
import About from "../components/About";
import Footer from "../components/Footer";
import Events from "../components/Events";
import { GlobalStyle, theme } from "./global";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Events />
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
