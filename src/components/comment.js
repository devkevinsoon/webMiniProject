import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";

const Comment = (props) => {
    const { nickname, comment, modifiedAt } = props;
    
    return(
        <Wrap>
            <Text width="auto" padding="0 10px 0 0" size="16px" bold>ddsadsasa</Text>
            <Text width="80%">{comment}</Text>
            <Text width="20%" color="gray" size="12px" textAlign="right">{modifiedAt}</Text>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100%;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    margin-bottom: 10px;
`;


export default Comment;