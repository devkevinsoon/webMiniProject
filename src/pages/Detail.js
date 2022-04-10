import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Input, Text } from "../elements";
import Comment from "../components/comment"
import { useSelector } from "react-redux";

const Detail = (props) => {
    const each_post = useSelector(state => state.post.list)
    console.log(each_post)
    return(
        <Container>
            <Wrap>
                <Grid padding="10px 20px" borderB="1px solid #eee" is_flex justify>
                    <Text size="18px" bold width="auto">{each_post.nickname}</Text>
                    <Text color="gray" width="auto">{each_post.modifiedAt}</Text>
                </Grid>
                <Grid padding="20px 20px">
                    <Grid margin="0 0 20px 0">
                        <Text>{each_post.content}</Text>
                    </Grid>
                    <Image src={each_post.imageUrl} />
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

export default Detail;
