import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled, { css } from "styled-components";
import { contentWidth } from "../global";
import { color, device, fontSizes } from "./Home";

const Container = styled.nav`
  position: sticky;
  background-color: ${color("primary")};

  color: ${color("bg")};
  font-size: ${fontSizes.md};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const baseNavStyles = css`
  list-style-type: none;
  align-items: center;
`;

const NavContent = styled.ul`
  ${baseNavStyles}
  width: ${contentWidth.md};
  max-width: 80%;

  display: flex;
  gap: 3rem;
`;

const MenuButton = styled.button`
  color: inherit;
  background-color: transparent;
  border: none;

  display: flex;

  @media ${device.md} {
    display: none;
  }

  &:hover {
    color: ${color("secondary")};
  }
`;

interface NavProps {
  isOpen?: any;
}

const MobileNavContent = styled.ul<NavProps>`
  ${baseNavStyles}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
  height: ${(p) => (p.isOpen ? "15rem" : "0rem")};

  transition: visibility 0.08s ease-in, height 0.3s ease-in;

  @media ${device.md} {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: inherit;
  text-decoration: none;

  ${NavContent} & {
    display: none;

    @media ${device.md} {
      display: flex;
    }
  }

  &:hover {
    color: ${color("secondary")};
    text-decoration: underline;

    transition: text-decoration 0.2s ease-in-out;
  }
`;

const MainIcon = styled.a`
  color: inherit;
  font-size: ${fontSizes.lg};
  text-decoration: none;
  flex: 1;

  padding-top: 0.2rem;
  padding-bottom: 0.2rem;

  &:hover {
    color: ${color("secondary")};
    transition: color 0.2s ease-in-out;
  }
`;

export const pages = ["home", "eboard", "resources"];

const navItems = pages.map((p: string) => (
  <NavItem to={p === "home" ? "/" : `/${p}`} key={p}>
    {p}
  </NavItem>
));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <NavContent>
        <MainIcon href="/">dia</MainIcon>
        {navItems}

        {/* Toggles drawer. */}
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={32} />
        </MenuButton>
      </NavContent>

      {/* Mobile drawer content. */}
      <MobileNavContent isOpen={isOpen}>{navItems}</MobileNavContent>
    </Container>
  );
};

export default Navbar;
