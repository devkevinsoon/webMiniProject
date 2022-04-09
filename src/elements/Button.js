import React from "react";
import styled from "styled-components"

const Button = (props) => {
    const { children, _onClick, padding, width, bg, color, size, margin, circle, hover, disabled } = props;

    const styles = {
        padding,
        margin,
        width,
        bg,
        color,
        size,
        hover, 
    }
    
    if(circle){
        return(
            <CircleBtn {...styles} onClick={_onClick} >{children}</CircleBtn>
        )
    }

    return(
        <Btn {...styles} onClick={_onClick} disabled={disabled}>{children}</Btn>
    )
}

Button.defaultProps = {
    children: null,
    padding: "10px",
    margin: "20px 0px",
    width: "80%",
    bg: "#f48fb1",
    color: "white",
    size: "16px",
    circle: false,
    check: false,
    hover: false,
    disabled: false,
    _onClick: () => {},
}

const Btn = styled.button`
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    background: ${props => props.bg};
    color: ${props => props.color};
    font-size: ${props => props.size};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    ${props => props.hover ? `&:hover {
        color: white;
        background: #ff54b0;
    }` : ""}
`;

const CircleBtn = styled.button`
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    line-height: 50px;
    border: none;
    border-radius: 50px;
    font-size: 70px;
    background: #9e9e9e;
    padding: 2px 0 0 0;
    color: white;
    cursor: pointer;

    &:hover {
        background: #424242;
    }
`;

export default Button;
