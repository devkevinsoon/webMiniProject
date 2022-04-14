import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, Image, Input, Text } from "../elements";
import Comment from "../components/Comment"
import { dateView } from "../shared/time";
import { actionCreators as postActions } from "../redux/modules/post";

const Detail = (props) => {
    const dispatch = useDispatch();

    const post = useSelector(state => state.post?.list);
    const user = useSelector(state => state.user?.user);
    const is_login = useSelector(state => state.user.is_login);

    //댓글 작성
    const [ comment, setComment ] = useState("");
    const writeComment = (e) => {
        setComment(e.target.value);
    };
  
    const clickBtn = () => {
        dispatch(postActions.setCommentApi(
            post[0].postId, 
            {
                comment,
                nickName: user.nickname,
                postId: post[0].postId,
            }
        ));
        setComment("");
    }

    // 좋아요 클릭
    const btnRef = useRef();
    const [ heartClick, setHeartClick ] = useState(false); // 조건 주기
    useEffect(() => {
        if(heartClick){
            btnRef.current.setAttribute('fill', '#ed4956');
        } else {
            btnRef.current.setAttribute('fill', 'lightgray');
        } 
    },[heartClick]);

    const clickHeart = () => { 
        if(is_login){
            dispatch(postActions.setLikeCountApi(post[0].postId, heartClick));
            setHeartClick(!heartClick);
        }
    }
    //
    const deletePost = () => {
        dispatch(postActions.deletePostApi(post[0].postId));
    }

    return(
        <Container>
            <Wrap>
                <Grid padding="10px 20px" borderB="1px solid #eee" is_flex justify>
                    <Text size="18px" bold width="auto">{post[0].nickName}</Text>
                    <Grid is_flex justify width="auto">
                        {post[0]?.userId === user?.userId ? (
                            <EditBtn onClick={() => {props.history.push(`/write/${post[0].postId}`)}}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z"></path>
                                </svg>
                            </EditBtn>
                        ) : null
                        }
                        {post[0]?.userId === user?.userId ? (
                            <EditBtn onClick={deletePost}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
                                </svg>
                            </EditBtn>
                        ) : null
                        }
                        <Text color="gray" width="auto">{dateView(post[0].modifiedAt)}</Text>
                    </Grid>
                </Grid>
                <Grid padding="20px 0 0 0" borderB="1px solid #eee">
                    <Grid margin="0 0 20px 0" padding="0px 20px">
                        <Text>{post[0].content}</Text>
                    </Grid>
                    <Grid position="relative">
                        { heartClick ? 
                        <HeartMiddle>
                            <svg height="100%" viewBox="0 0 48 48" width="100%">
                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                        </HeartMiddle>
                        : "" }
                        <Image src={post[0].imageUrl} shape="rectangle"/>
                    </Grid>
                </Grid>
                <Grid padding="5px 10px 0 10px" borderB="1px solid #eee">
                    <Box>
                        <HeartOuter onClick={clickHeart}>
                            <svg aria-label="좋아요 버튼" ref={btnRef} fill="black" height="24" role="img" viewBox="0 0 48 48" width="24">
                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                        </HeartOuter>
                        <Span>좋아요 {post[0].postLikeTotal}개</Span>
                    </Box>
                </Grid>
            </Wrap>
            <Grid width="40%" minWidth="540px" padding="20px 5px 0 5px" is_flex justify>
                {user?.userId 
                    ? <Input _onChange={writeComment} width="85%" placeholder="댓글을 입력해주세요." value={comment}/>
                    : <Input _onChange={writeComment} width="85%" placeholder="로그인 후 이용해주세요." disabled/>
                }
                {user?.userId 
                    ? <Button _onClick={clickBtn} width="10%" padding="5px 0" text="입력" border="none" hover></Button>
                    : <Button _onClick={clickBtn} width="10%" padding="5px 0" text="입력" border="none" disabled></Button>
                }
            </Grid>
            <Grid width="40%" minWidth="540px" padding="20px 0 0 0" is_flex column> 
                {post[0].comments 
                    ? post[0].comments.map((v, i) => 
                        <Comment 
                            key={v.commentId}
                            nickName={v.nickName}
                            commentId={v.commentId}
                            modifiedAt={v.modifiedAt}
                            postId={v.postId}
                            comment={v.comment} 
                        />)
                    : ""
                }
            </Grid>
        </Container>

    )
};

// Detail.defaultProps ={
//     list: [
//     	{
// 			postId: "",
// 			content: "반갑습니다.",
// 			modifiedAt: "2022-04-14 09:00:00",
// 			likeCount: 0,
// 			imageUrl:"",
// 			userId : "",
// 			nickname: "작성자",
// 			comments: [
// 				{
// 					nickname: "닉네임",
// 					commentId: "",
// 					comment: "저도 반가워요:)",
// 					modifiedAt: "2022-04-10"
// 				},
// 			]
// 	  	}
//   	]
// }

const Box = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
`;

const Span = styled.div`
    font-size: 14px;
    
`;
const Container = styled.div`
    width: 100vw;
    height: 100%;
    padding: 50px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrap = styled.div`
    width: 40%;
    min-width: 540px;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
`;

const HeartAppear = keyframes`
    0%{
        opacity: 0.5;
        fill: #ed4956;
    }
    100%{
        width: 200px;
        opacity: 10;
    }
`;

const HeartMiddle = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    ${props => props.click}
    svg {
        width: 100px;
        fill: transparent;
        animation: ${HeartAppear} 0.5s alternate ease-out;
    }
`;

const HeartOuter = styled.div`
    margin-right: 7px;

    svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

const EditBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin-right: 4px;
    cursor: pointer;
    
    svg {
        width: 20px;
        fill: #666;
        transition: 0.1s;
        
        &:hover{
          fill: #ff54b0;
        }
    }
`;

export default Detail;
