import React from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { history } from "../redux/configureStore";

import { useSelector } from "react-redux";
import PostList from "./PostList";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";


const Main = (props) => {
  const post_list = useSelector((state) => state.post_list);

  console.log("post_list : ", post_list);
  // if(!getCookie("token")){
  //     history.replace("login");
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <MainContainer>
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
