import React from "react";

import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweettIcon,
  LikeIcon,
  Dot,
} from "./styles";

const Tweet = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Valcinei Furtado</strong>
            <span>@vafucaju</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Testando Tweet na plataforma</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweettIcon />8
            </Status>
            <Status>
              <LikeIcon />
              500
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
