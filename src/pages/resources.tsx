import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Title, TitleOnBg } from "../components/About";
import { Content, ContentBg, ContentLayout } from "../components/Events";
import Footer from "../components/Footer";
import { color, device, fontSizes, MainLayout } from "../components/Home";
import Navbar from "../components/Navbar";
import { GlobalStyle, theme } from "../global";
import { Container } from "./eboard";

const ResourcesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <MainLayout>
        <Container>
          <TitleOnBg>resources</TitleOnBg>
        </Container>
      </MainLayout>
      <ContentLayout>
        <ContentBg>
          <Title>software</Title>
          <Content
            as="iframe"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeUcMY5NlBPW8h4XexS-NFFrh6oZMNIT_8I_lhz1rkhGgTXzw/viewform?embedded=true"
          />
        </ContentBg>
        <ContentBg>
          <Title>hardware</Title>
          <Content
            as="iframe"
            src="https://docs.google.com/forms/d/e/1FAIpQLSclzRFjMlmFa46rMUmfBPzGfyET7jBgI9SEOj5BT84GQ7yaew/viewform?embedded=true"
          />
        </ContentBg>
      </ContentLayout>
      <Footer />
    </ThemeProvider>
  );
};

export default ResourcesPage;
