import React from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { history } from "../redux/configureStore";

import { useSelector } from "react-redux";
import PostList from "./PostList";

import Container from "@material-ui/core/Container";

import Bg from "../images/bg.jpg";

const Main = (props) => {
  const post_list = useSelector((state) => state.post_list);

  console.log("post_list : ", post_list);
  // if(!getCookie("token")){
  //     history.replace("login");
  // }

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

const sectionStyle = styled.div`
  
  backgroundImage:"url("+{Bg}+ ")";
`;

export default Main;
