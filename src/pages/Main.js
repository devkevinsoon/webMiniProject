import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post"
import styled from "styled-components";
import PostList from "./PostList";
import Container from "@material-ui/core/Container";

const Main = (props) => {

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const user = useSelector((state) => state.user.user?.userId);

  useEffect(() => {
    dispatch(postActions.getPostApi(user));
  }, [user]);

  return (
    <React.Fragment>
      <Container >
        <Wrap >
          {postList.map((p, idx) => {
            return <PostList key={p.postId} {...p}/>    // postId가 아직 없어서 index로 key 값으로 함
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

export default Main;

