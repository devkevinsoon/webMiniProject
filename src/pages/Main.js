import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  { actionCreators as postActions } from "../redux/modules/post"
import styled from "styled-components";
import PostList from "./PostList";
import Container from "@material-ui/core/Container";

import { getRankApi } from "../redux/modules/rank";
import { Image } from "../elements";

const Main = (props) => {
  useEffect(() => {
    dispatch(getRankApi());
  }, []);

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const user = useSelector((state) => state.user.user?.userId);
  const rank_list = useSelector((state) => state.rank.list);

  useEffect(() => {
    dispatch(postActions.getPostApi(user));
  }, [user]);

  return (
    <React.Fragment>
      <Container >
        {/* <Mid>
          <Nemo>
            <Image src={rank_list[1].imageUrl} />
          </Nemo>
          <King>
            <Image src={rank_list[0].imageUrl} />
          </King>
          <Nemo>
            <Image src={rank_list[2].imageUrl} />
          </Nemo>
        </Mid> */}
        <Wrap >
          {postList.map((p, idx) => {
            return <PostList key={p.postId} {...p}/>    // postId가 아직 없어서 index로 key 값으로 함
          })}
        </Wrap>
      </Container>
    </React.Fragment>
  );
};

const Mid = styled.div`
  width: 100%;
  border: 1px red solid;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const Nemo = styled.div`
  width: 30%;
  height: 100px;
  border: 1px red solid;
`;

const King = styled.div`
  position: absolute;
  top: -50px;
  display: flex;
  justify-content: center;
  width: 30%;
  height: 100px;
  border: 1px red solid;
`;

const Wrap = styled.div`
  column-width: 320px;
  column-gap: 15px;
  width: 900%;
  max-width: 1100px;
  margin: 50px auto ;
`;

export default Main;

