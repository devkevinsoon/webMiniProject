import React from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { history } from "../redux/configureStore"; 


import { useSelector  } from "react-redux";


const Main = (props) => {
    const post_list =useSelector((state) => state.post_list);

    // console.log("post_list : ", post_list);
    // if(!getCookie("token")){
    //     history.replace("login");
    // }

    return (
        <React.Fragment>
            <MainContainer>
                test
                {/* {post_list.map((p, idx) => {
                    return <Post key={p.id}{...p} />
                })} */}
            </MainContainer>
            
        </React.Fragment>
    );
};

const MainContainer = styled.div`
    height: auto;
    width: 80vw;
    margin: 0 auto;
`;

export default Main;