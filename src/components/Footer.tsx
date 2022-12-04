import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { color, device, fontSizes, MainLayout } from "./Home";
import { pages } from "./Navbar";

const Layout = styled(MainLayout)`
  background-color: ${color("primary")};
  color: ${color("bg")};

  gap: 2rem;

  padding: 2rem;

  @media ${device.md} {
    font-size: ${fontSizes.md};
  }
`;

const FooterContent = styled.ul`
  width: 40rem;
  max-width: 100%;

  display: flex;
  justify-content: space-evenly;

  list-style-type: none;
`;

const FooterItem = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${color("secondary")};
    text-decoration: underline;
  }
`;

const Divider = styled.li`
  &:last-child {
    display: none;
  }
`;

const Copyright = styled.div`
  color: ${color("secondary")};
  font-style: italic;
`;

const Footer = () => {
  return (
    <Layout>
      <FooterContent>
        {pages.map((p) => {
          return (
            <>
              <FooterItem to={p.url} key={p.name}>
                {p.name}
              </FooterItem>
              <Divider>•</Divider>
            </>
          );
        })}
      </FooterContent>
      <Copyright>made by dia @ 2022</Copyright>
    </Layout>
  );
};

export default Footer;
