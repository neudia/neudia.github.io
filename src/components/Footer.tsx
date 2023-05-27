import {Link as GatsbyLink} from "gatsby";
import * as React from "react";
import styled from "styled-components";
import {color, device, fontSizes, Link, MainLayout} from "./Home";
import {pages} from "./Navbar";

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

const FooterItem = styled(GatsbyLink)`
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
  font-size: ${fontSizes.sm};
`;

const SocialLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  
  img {
    width: 36px;
    margin: 1rem;
  }
`

const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <Layout>
            <FooterContent>
                {pages.map((p, key) => {
                    return (
                        <>
                            <FooterItem to={p.url} key={key}>
                                {p.name}
                            </FooterItem>
                            <Divider>•</Divider>
                        </>
                    );
                })}
            </FooterContent>

            <SocialLinks>
                <Link href="https://www.instagram.com/neu.dia/" target="_blank">
                    <img alt="Instagram icon" src="/instagram-icon.svg" />
                </Link>

                <Link href="https://discord.gg/n9MvDAxZgS" target="_blank">
                    <img alt="Discord Icon" src="/discord-icon.svg" />
                </Link>
            </SocialLinks>

            <Copyright>made with ❤ by dia @ {currYear}</Copyright>
        </Layout>
    );
};

export default Footer;
