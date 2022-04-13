import React from "react";
import styled from "styled-components";

import PostList from "./PostList";
import Container from "@material-ui/core/Container";

const Main = (props) => {

  return (
    <React.Fragment>
      <Container maxWidth="lg" >
        <MainContainer >
          <PostList />
        </MainContainer>
      </Container>
    </React.Fragment>
  );
};

const MainContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

export default Main;
