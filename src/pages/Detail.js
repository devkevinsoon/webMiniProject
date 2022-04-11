import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Button, Grid, Image, Input, Text } from "../elements";

import Comment from "../components/comment";
import { dateView } from "../shared/time";

const Detail = (props) => {
    // const user_list = useSelector(stste => state.user)
    const each_post = useSelector(state => state.post.list);
    console.log(each_post)
    return(
        <Container>
            <Wrap>
                <Grid padding="10px 20px" borderB="1px solid #eee" is_flex justify>
                    <Text size="18px" bold width="auto">{each_post.nickname}</Text>
                    <Grid is_flex justify width="auto">
                        {/* {each_post.userId === "유저리스트에 userId" ? (
                            <EditBtn onClick={() => {history.push(`/revise/${post_id}`)}}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z"></path>
                                </svg>
                            </EditBtn>
                        ) : null
                        }
                        {each_post.userId === "유저리스트에 userId" ? (
                            <EditBtn>
                                <svg viewBox="0 0 24 24">
                                    <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
                                </svg>
                            </EditBtn>
                        ) : null
                        } */}
                        <Text color="gray" width="auto">{dateView(each_post.modifiedAt)}</Text>
                    </Grid>
                </Grid>
                <Grid padding="20px 20px">
                    <Grid margin="0 0 20px 0">
                        <Text>{each_post.content}</Text>
                    </Grid>
                    <Image src={each_post.imageUrl}  type="rectangle"/>
                </Grid>
            </Wrap>
            <Grid width="40%" minWidth="540px" padding="20px 5px 0 5px" is_flex justify>
                <Input width="85%" placeholder="댓글을 입력해주세요." />
                <Button width="10%" padding="5px 0" text="입력" hover></Button>
            </Grid>
            <Grid width="40%" minWidth="540px" padding="20px 0 0 0" is_flex column> 
                {each_post.comments.map((v, i) => 
                    <Comment 
                        key={i}
                        nickname={v.nickname}
                        commentId={v.commentId}
                        modifiedAt={v.modifiedAt}
                        comment={v.comment}
                    />
                )}
            </Grid>
        </Container>

    )
};

const Container = styled.div`
    width: 100vw;
    height: 100%;
    padding: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrap = styled.div`
    width: 40%;
    min-width: 540px;
    display: flex;
    flex-direction: column;
    box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.1), 0px 0px 5px rgba(0, 0, 0, 0.2);
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
