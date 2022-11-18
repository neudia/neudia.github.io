import * as React from "react";
import styled from "styled-components";
import WidgetBot from "@widgetbot/react-embed";
import { Title } from "./About";
import { color, device } from "./Home";

const ContentLayout = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContentBg = styled.section`
  width: 100%;
  aspect-ratio: 1 / 1;

  background-color: ${color("contentBg")};
  color: ${color("primary")};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  @media ${device.lg} {
    flex: 1;
    padding: 2rem;
  }
`;

const Content = styled.div`
  width: 90%;
  height: 90%;

  background-color: ${color("primary")};
  display: flex;

  border-radius: 2rem;
  padding: 1rem;
`;

const Events = () => {
  return (
    <ContentLayout>
      <ContentBg>
        <Title>upcoming events</Title>
        <Content
          as="iframe"
          src="https://calendar.google.com/calendar/embed?src=digitalillustrationassociation%40gmail.com&ctz=America%2FNew_York"
        />
      </ContentBg>
      <ContentBg>
        <Title>announcements</Title>
        <Content>
          <WidgetBot
            style={{ width: "100%", borderRadius: "1rem" }}
            server="797709118357110835"
            channel="798992018008571944"
          />
        </Content>
      </ContentBg>
    </ContentLayout>
  );
};

export default Events;
