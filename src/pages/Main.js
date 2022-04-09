import React from "react";
import styled from "styled-components";

import { ImgList } from "../components/index";
import { history } from "../redux/configureStore"; 
import { getCookie } from "../shared/cookie";

const Main = (props) => {
    // 로그인 안한 유저는 로그인 페이지로 이동 - token사용
    // if(!getCookie("token")){
    //     history.replace("login");
    // }

    return (
        <React.Fragment>
            <MainContainer>
                {/* <ImgList {...props} /> */}
            </MainContainer>
            
        </React.Fragment>
    );
};

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
`;

export default Main;