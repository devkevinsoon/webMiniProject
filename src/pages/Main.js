import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import  {  actionCreators as postActions } from "../redux/modules/post"

import styled from "styled-components";
import PostList from "./PostList";
import Container from "@material-ui/core/Container";

const Main = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list)
  // console.log("post_list : ", post_list);

  return (
    <React.Fragment>
      <Container maxWidth="lg" >
        <Wrap >
          {postList.map((p, idx) => {
            //console.log("p  : ", p);
            return <PostList key={idx} {...p}/>    // postId가 아직 없어서 index로 key 값으로 함 
          })}
        </Wrap>
      </Container>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  column-width: 320px;
  column-gap: 15px;
  width: 900%;
  max-width: 1100px;
  margin: 50px auto ;
`;

// const MainContainer = styled.div`
//   padding: 20px 0;
//   display: flex;
//   flex-direction: column;
// `;

export default Main;