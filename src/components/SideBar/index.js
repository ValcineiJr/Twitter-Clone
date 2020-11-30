import React from "react";
import FollowSuggestions from "../FollowSuggestions";
import List from "../List";
import News from "../News";
import StickyBox from "react-sticky-box";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestions
                name="Valcinei Furtado"
                nickname="@vafucajuu"
              />,
              <FollowSuggestions name="Tesday" nickname="@tesday1" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
