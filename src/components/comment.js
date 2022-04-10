import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";

const Comment = (props) => {
    const { nickname, comment, modifiedAt } = props;
    
    return(
        <Wrap>
            <Grid width="20%">
                <Text padding="0 10px 0 0" size="16px" bold>{nickname}</Text>
            </Grid>
            <Grid >
                <Text>{comment}</Text>
            </Grid>
            <Grid  width="15%">
                <Text color="gray" size="12px" textAlign="right">{modifiedAt}</Text>
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


export default Comment;