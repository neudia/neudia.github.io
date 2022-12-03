import { navigate } from "gatsby";
import * as React from "react";
import styled from "styled-components";

export const color = (variant: string) => (props: any) => props.theme[variant];

export const device = {
  sm: `(min-width: 640px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1280px)`,
};

export const fontSizes = {
  xs: "1.125rem",
  sm: "1.5rem",
  md: "1.875rem",
  lg: "3rem",
  xl: "4.5rem",
};

export const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem;
`;

const Layout = styled(MainLayout)`
  background-color: ${color("primary")};
  color: ${color("bg")};

  height: 95vh;
  gap: 3rem;
  @media ${device.md} {
    gap: 5rem;
  }
`;

const MainContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const Image = styled.div`
  width: 20rem;
  aspect-ratio: 1 / 1;

  background-color: ${color("secondary")};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
`;

const Button = styled.button`
  background-color: ${color("bg")};
  color: ${color("primary")};
  border: none;

  padding: 1rem 3rem 1rem 3rem;
  border-radius: 2rem;

  transition: 0.3s;

  &:hover {
    background-color: ${color("secondary")};
    color: ${color("primary")};
  }
`;

const Link = styled.a`
  &:hover {
    filter: brightness(0) saturate(100%) invert(88%) sepia(20%) saturate(670%)
      hue-rotate(341deg) brightness(104%) contrast(99%);
  }
`;

export const Subtitle = styled.h2`
  font-weight: initial;

  ${Header} & {
    color: ${color("secondary")};
  }

  @media ${device.md} {
    font-size: ${fontSizes.lg};
  }

  ${Button} & {
    @media ${device.md} {
      font-size: ${fontSizes.md};
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Home = () => {
  const inviteLink = "https://discord.gg/n9MvDAxZgS";
  return (
    <Layout>
      <MainContent>
        <Header>
          <Title>dia</Title>
          <Subtitle>digital illustration association</Subtitle>
        </Header>
        <Image>
          <img
            alt="Yellow ghost"
            src="../../ghostie.png"
            style={{ width: "60%" }}
          />
        </Image>
      </MainContent>
      <Socials>
        <Button onClick={() => navigate(inviteLink)}>
          <Subtitle>join the discord</Subtitle>
        </Button>
        <Link href="https://www.instagram.com/neu.dia/">
          <img alt="Instagram icon" src="../../IGIcon.svg" />
        </Link>
      </Socials>
    </Layout>
  );
};

export default Home;
