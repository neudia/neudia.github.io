import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Title, TitleOnBg } from "../components/About";
import { Content, ContentBg, ContentLayout } from "../components/Events";
import Footer from "../components/Footer";
import { MainLayout } from "../components/Home";
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
          We aim to make digital art accessible for everyone and offer software
          and hardware resources.
          <br />
          <br />
          To get started, fill out the Google forms below and a DIA eboard
          member will contact you soon via email or Discord with the details.
          <br />
          <br />
          Please keep in mind these are only available for Northeastern
          students. Thank you!
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
