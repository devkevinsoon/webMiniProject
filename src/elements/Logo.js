import React from "react";
import styled from "styled-components";

const Logo = (props) => {
    const { history } = props;
    return(
        <React.Fragment>
            <LogoContainer onClick={() => history.push("/")}>FourDium</LogoContainer>
        </React.Fragment>
    );
}

const LogoContainer = styled.div`
    width: 80vw;
    text-align: left;
    cursor: pointer;
    font-family: "Lobster", cursive;
    font-family: "Permanent Marker", cursive;
    font-size: 30px;
    color: #ff54b0;
`;

export default Logo;