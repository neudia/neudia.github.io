import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { TitleOnBg } from "../components/About";
import Footer from "../components/Footer";
import { color, device, fontSizes, MainLayout } from "../components/Home";
import Navbar from "../components/Navbar";
import { GlobalStyle, theme } from "../global";

export const Container = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.div`
  background-color: ${color("secondary")};
  aspect-ratio: 1 / 1;
  width: 17rem;
  max-width: 100%;

  border-radius: 2rem;
`;

const Info = styled.div`
  color: ${color("primary")};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3`
  @media ${device.md} {
    font-size: ${fontSizes.sm};
  }
`;

const Role = styled.h4`
  color: ${color("primary")};
  font-weight: normal;
  font-style: italic;

  @media ${device.md} {
    font-size: ${fontSizes.xs};
  }
`;

const MemberLayout = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const EboardPage = () => {
  const member = { name: "Chanmi Oh", role: "Technology Officer" };

  const members = [member, member, member, member, member, member];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <MainLayout>
        <Container>
          <TitleOnBg>meet the eboard</TitleOnBg>

          <MemberLayout>
            {members.map((m) => (
              <Member>
                <Image />
                <Info>
                  <Name>{m.name}</Name>
                  <Role>{m.role}</Role>
                </Info>
              </Member>
            ))}
          </MemberLayout>
        </Container>
      </MainLayout>
      <Footer />
    </ThemeProvider>
  );
};

export default EboardPage;
