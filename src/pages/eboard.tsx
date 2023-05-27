import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { TitleOnBg } from "../components/About";
import Footer from "../components/Footer";
import { color, device, fontSizes, MainLayout } from "../components/Home";
import Navbar from "../components/Navbar";
import { GlobalStyle, theme } from "../global";
import useFirestore, { Document } from "../useFirestore";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  @media ${device.md} {
    width: 60rem;
    max-width: 100%;
    font-size: ${fontSizes.sm};
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 17rem;
  max-width: 100%;
`;

const Image = styled.img`
aspect-ratio: 1 / 1;
width: 100%;
max-width: 100%;

border-radius: 2rem;
object-fit: cover;

transition: 0.3s;
transform: translateX(-10px) translateY(-10px);
box-shadow: 10px 10px 0 1px ${color("secondary")};

&:hover {
  cursor: pointer;
  transform: unset;
  box-shadow: unset;
}
`;

const Info = styled.div`
  color: ${color("primary")};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
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

  max-width: 100%;

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
  const { docs: eboardDocs } = useFirestore("eboard");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <MainLayout>
        <Container>
          <TitleOnBg>meet the eboard</TitleOnBg>

          <MemberLayout>
          {eboardDocs.map((m: Document) => (
              <Member key={m.id}>
                <Image src={m.data?.img} />
                <Info>
                  <Name>
                    {m.data?.firstName}&nbsp;
                    {m.data?.lastName}
                  </Name>
                  <Role>{m.data?.role}</Role>
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
