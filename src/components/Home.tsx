import * as React from "react";
import styled from "styled-components";
import Ghost from "../images/ghostie.png";

export const color = (variant: string) => (props: any) => props.theme[variant];

export const device = {
  sm: `(min-width: 640px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1280px)`,
};

export const fontSizes = {
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

const TextGroup = styled.div`
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
  border-color: ${color("primary")};
  color: ${color("primary")};
  padding: 1rem 3rem 1rem 3rem;
  border-radius: 2rem;
  transition: 0.3s;

  &:hover {
    background-color: ${color("primary")};
    border-color: ${color("primary")};
    color: ${color("bg")};
  }
`;

const Subtitle = styled.h2`
  font-weight: initial;

  @media ${device.md} {
    font-size: ${fontSizes.lg};
  }

  ${Button} & {
    @media ${device.md} {
      font-size: ${fontSizes.md};
    }
  }
`;

const Home = () => {
  return (
    <Layout>
      <MainContent>
        <TextGroup>
          <Title>dia</Title>
          <Subtitle>digital illustration association</Subtitle>
        </TextGroup>
        <Image>
          <img src={Ghost} style={{ width: "60%" }} />
        </Image>
      </MainContent>
      <Button role="button">
        <Subtitle>join the discord</Subtitle>
      </Button>
    </Layout>
  );
};

export default Home;
