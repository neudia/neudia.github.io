import * as React from "react";
import styled from "styled-components";
import { device, fontSizes, color, MainLayout } from "./Home";

const Layout = styled(MainLayout)`
  gap: 1rem;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.md} {
    width: 60rem;
    max-width: 100%;

    font-size: ${fontSizes.sm};
    gap: 3rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-style: italic;

  text-align: center;

  font-size: ${fontSizes.md};

  @media ${device.md} {
    font-size: ${fontSizes.lg};
  }
`;

export const TitleOnBg = styled(Title)`
  background-color: ${color("secondary")};
  color: ${color("primary")};

  padding: 1rem;
  border-radius: 2rem;
`;

const Header = styled.h1`
  color: ${color("primary")};
  font-style: italic;
  font-size: ${fontSizes.md};

  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  @media ${device.md} {
    font-size: ${fontSizes.lg};
  }
`;

const Border = styled.div`
  flex: 1;
  margin-left: 1rem;
  border-bottom: 0.2rem solid ${color("primary")};
`;

const Content = styled.div`
  margin-top: 1rem;
`;

const About = () => (
  <Layout>
    <Container>
      <TitleOnBg>who we are test</TitleOnBg>
      DIA aims to foster passion for digital illustration to those of all levels
      of experience while cultivating a friendly, open-minded community amongst
      artists and patrons. We welcome everyone who appreciates digital
      illustration to come together and support each other.
      <Content>
        <Header>
          for artists,
          <Border />
        </Header>
        We encourage drawing with fun events and peer support to improve skills
        and grow a following.
      </Content>
      <Content>
        <Header>
          for connoisseurs,
          <Border />
        </Header>
        We provide a reliable way to find local artists to follow or commission.
      </Content>
    </Container>
  </Layout>
);

export default About;
