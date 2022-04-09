import React from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements";

const Detail = (props) => {
    return(
        <ModalOverlay>
            <ModalInner>
                <Container>
                    <Grid width="65%" height="100%">
                        <Image />
                    </Grid>
                    <Grid width="35%">
                        <Grid height="7%">
                            닉네임, 수정버튼
                        </Grid>
                        <Grid height="60%">
                            댓글
                        </Grid>
                        <Grid height="7%">
                            하트 개수 
                        </Grid>
                        <Grid height="26%">
                            댓글 작성 공간
                        </Grid>
                    </Grid>
                </Container>
            </ModalInner>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1000;
`;

const ModalInner = styled.div`
    width: 70%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: white;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export default Detail;
