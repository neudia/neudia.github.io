import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "../fonts.css";

export const theme = {
  primary: "#404B8F",
  secondary: "#FEE6A9",
  bg: "white",
  contentBg: "#D8E2ED",
};

export const GlobalStyle = createGlobalStyle`
*, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
`;

export const contentWidth = {
  sm: "60rem",
  md: "75rem",
};
