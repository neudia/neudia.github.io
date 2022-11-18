import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { ThemeProvider } from "styled-components";
import About from "../components/About";
import Footer from "../components/Footer";
import Events from "../components/Events";
import { GlobalStyle, theme } from "../global";

const IndexPage = () => {

  React.useEffect(() => {

    
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
