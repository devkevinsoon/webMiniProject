// PostList.js
import React from "react";
import styled from "styled-components";

import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";

//import { actionCreators as PostActions } from "../redux/modules/Post";
import moment from "moment";


const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    const is_loading = useSelector((state) => state.post.is_loading);

    
    // props 값을 잘 가지고 오는지 확인 
    // const {content, imageUrl} = props;
    // console.log("content : ", content);
    // console.log("imageUrl : ", imageUrl);

    return (
      <React.Fragment>
        {/* <WrapPost>
            <Post content={props.content} imageUrl={props.imageUrl}/>
          </WrapPost> */}
        
        <Figure>
          <Img src={props.imageUrl} />
          <Figcaption>{props.content}</Figcaption>
        </Figure>
      </React.Fragment>
    );
}


const Figure = styled.div`
  // column-width: 350px;
  // column-gap: 15px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
  filter: grayscale(0.8);
  &:hover {
    filter: none;
  }
`;

const Img = styled.img`
  width: 100%
`;

const Figcaption = styled.div`
  font-size: .9rem;
  color: #444;
  line-height: 1.5;
`;

  const WrapPost = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: "#ddafff";
  margin: 20px 20px;
  gap: 50px;
`;

export default PostList;

