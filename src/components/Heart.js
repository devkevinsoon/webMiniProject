import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { keyframes } from "styled-components";

import { Grid } from "../elements";

const Heart = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector(state => state.user.is_login);
    
    const btnRef = useRef();
    const [ heartClick, setHeartClick ] = useState(false); // 조건 주기

    useEffect(() => {
        if(heartClick){
            btnRef.current.setAttribute('fill', '#ed4956');
        } else {
            btnRef.current.setAttribute('fill', 'white');
        } 
    },[heartClick]);

    const clickHeart = () => {
        // if(is_login) 
        setHeartClick(!heartClick);
    }
    
    return (
        <Grid position="relative">
            {heartClick ? 
            <HeartMiddle>
                <svg height="100%" viewBox="0 0 48 48" width="100%">
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
            </HeartMiddle>
            : "" }
            <HeartOuter onClick={clickHeart}>
                    <svg aria-label="좋아요 버튼" ref={btnRef} fill="white" height="24" role="img" viewBox="0 0 48 48" width="24">
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
            </HeartOuter>
            {props.children}
        </Grid>
    );
};

const HeartAppear = keyframes`
    0%{
        opacity: 0.5;
        fill: #ed4956;
    }
    100%{
        width: 100px;
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
        width: 50px;
        fill: transparent;
        animation: ${HeartAppear} 0.5s alternate ease-out;
    }
`;

const HeartOuter = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 5px;
    left: 5px;

    svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

export default Heart;
