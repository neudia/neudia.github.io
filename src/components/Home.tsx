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

  @keyframes slidein {
    from {
      top: -30px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  position: relative;
  animation: slidein 1s ease-in-out;
`;

const Layout = styled(MainLayout)`
  background-color: ${color("primary")};
  color: ${color("bg")};

  height: 100%;
  gap: 3rem;
  @media ${device.md} {
    gap: 5rem;
    height: 90vh;
  }
`;

const MainContent = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 100;
  font-size: 5rem;
`;

const Name = styled.span`
  font-weight: 900;
`;

const Image = styled.div`
  width: 20rem;
  aspect-ratio: 1 / 1;

  background-color: ${color("secondary")};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;

  transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Button = styled.button`
  background-color: ${color("bg")};
  color: ${color("primary")};
  border: none;

  padding: 1rem 3rem 1rem 3rem;
  border-radius: 2rem;

  transition: 0.3s;
  transform: translateX(-10px) translateY(-10px);
  box-shadow: 10px 10px 0 1px rgba(0, 37, 90, 0.8);

  &:hover {
    cursor: pointer;
    background-color: ${color("secondary")};
    color: ${color("primary")};
    transform: unset;
    box-shadow: unset;
  }
`;

export const Link = styled.a`
  &:hover {
    filter: brightness(0) saturate(100%) invert(88%) sepia(20%) saturate(670%)
      hue-rotate(341deg) brightness(104%) contrast(99%);
  }
`;

export const Subtitle = styled.h2`
  font-style: oblique;

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
        <Image>
          <img
              alt="Yellow ghost"
              src="/ghostie.png"
              style={{ width: "60%" }}
          />
        </Image>
        <Header>
          <Title><Name>dia</Name> @ NEU 🖌️</Title>
          <Subtitle>digital illustration association</Subtitle>
        </Header>
      </MainContent>
      <Socials>
        <Button onClick={() => navigate(inviteLink)}>
          <Subtitle>join the discord</Subtitle>
        </Button>
        <Link href="https://www.instagram.com/neu.dia/">
          <img alt="Instagram icon" src="/instagram-icon.svg" />
        </Link>
      </Socials>
    </Layout>
  );
};

export default Home;
