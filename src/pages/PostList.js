import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Heart from "../components/Heart";

const PostList = ({imageUrl, content, postId}) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    const is_loading = useSelector((state) => state.post.is_loading);
    
    const goDetail = () => {
      dispatch(postActions.getOnePostApi(postId));
    }

    return (
      <React.Fragment>
        <Figure  >
          <Heart>
            <Img 
            onClick={goDetail}
              src={imageUrl}
            />
          </Heart>
          <Figcaption>{content}</Figcaption>
        </Figure>
      </React.Fragment>
    );
}


const Figure = styled.div`
  display: inline-block;
  border:1px solid rgba(0,0,0,0.2);
  margin:0;
  margin-bottom: 15px;
  padding:10px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  cursor: pointer;
  filter: grayscale(0.8); 
  &:hover { filter: none; }
`;

const Img = styled.img`
  user-select: none;
  width: 100%;
`;

const Figcaption = styled.div`
  font-size: .9rem;
  color: #444;
  line-height: 1.5;
`;

export default PostList;

