import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { TitleOnBg } from "../components/About";
import Footer from "../components/Footer";
import { color, device, MainLayout } from "../components/Home";
import Navbar from "../components/Navbar";
import { GlobalStyle, theme } from "./global";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  @media ${device.md} {
    width: 60rem;
    max-width: 100%;
  }
`;

const Member = styled.div`
  background-color: ${color("secondary")};
  aspect-ratio: 1 / 1;
  width: 17rem;
  max-width: 100%;

  border-radius: 2rem;
`;

const MemberLayout = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const EboardPage = () => {
  const members = ["c", "m", "d", "e", "b", "c"];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <MainLayout>
        <Container>
          <TitleOnBg>meet the eboard</TitleOnBg>

          <MemberLayout>
            {members.map((m) => (
              <Member />
            ))}
          </MemberLayout>
        </Container>
      </MainLayout>
      <Footer />
    </ThemeProvider>
  );
};

export default EboardPage;
