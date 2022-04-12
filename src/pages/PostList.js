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

    // React.useEffect(() => {
    //   if (getCookie("is_login") == "true") {
    //     dispatch(userActions.loginDB());
    //   }
  
    //   dispatch(PostActions.getPostDB());
    // }, []);
  
    return (
        <React.Fragment>
          <WrapPost>
            <WrapPost>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </WrapPost>
          </WrapPost>
        </React.Fragment>
    )
}



// Post.defaultProps = {
//     user_info: {
//       nickname: "Spring",
//     //   user_profile:
//     //     "http://image.dongascience.com/Photo/2015/11/14478135982143[1].png",
//     },
//     image_url:
//       "https://c.pxhere.com/photos/cd/46/santorini_oia_greece_aegean_architecture_landscape_tourism_white-947315.jpg!d",
//     contents: "반갑습니다",
//     comment_cnt: 10,
//     modifiedAt : moment().format("YYYY-MM-DD hh:mm:ss"),
//   };
  
  
  const WrapPost = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: "#ddafff";
  margin: 20px 20px;
  gap: 50px;
`;

export default PostList;

