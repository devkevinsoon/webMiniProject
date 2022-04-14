import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Grid, Text } from "../elements";
import { dateView } from "../shared/time";
import { actionCreators as postActions } from "../redux/modules/post";

const Comment = (props) => {
    const { nickName, comment, modifiedAt, postId, commentId } = props;
    const dispatch = useDispatch();

    const user = useSelector(state => state.user?.user);

    const deleteComment = () => {
        dispatch(postActions.deleteCommentApi(postId, commentId))
    }

    return(
        <Wrap>
            <Grid width="20%">
                <Text padding="0 10px 0 0" width="max-content" size="16px" bold>{nickName}</Text>
            </Grid>
            <Grid >
                <Text>{comment}</Text>
            </Grid>
            { nickName === user?.nickname ? (
                <EditBtn onClick={deleteComment}>
                    <svg viewBox="0 0 24 24">
                        <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
                    </svg>
                </EditBtn>
            ) : null}
            <Grid width="auto">
                <Text color="gray" width="max-content" size="12px" textAlign="right">{dateView(modifiedAt)}</Text>
            </Grid>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100%;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    border: 1px solid #eee;
    margin-bottom: 10px;
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

export default Comment;