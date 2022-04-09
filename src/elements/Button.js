import React from "react";
import styled from "styled-components"

const Button = (props) => {
    const { children, _onClick, padding, width, bg, color, size, margin, hover, disabled, text, is_float } = props;
    
    const styles = {
        padding,
        margin,
        width,
        bg,
        color,
        size,
        hover, 
    }
    
    if(is_float)
    {
        return (
            <React.Fragment>
              <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
            </React.Fragment>
          );
    }

    return(
        <Btn {...styles} onClick={_onClick} disabled={disabled}>
          {text}
        </Btn>
    )
}

Button.defaultProps = {
    children: null,
    padding: false,
    width: "100%",
    bg: "#f48fb1",
    color: "white",
    size: "16px",
    circle: false,
    check: false,
    hover: false,
    disabled: false,
    is_abs: false,
    margin: false,
    _onClick: () => {},
}

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

const Btn = styled.button`
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    background: ${props => props.bg};
    color: ${props => props.color};
    font-size: ${props => props.size};
    border: none;
    border-radius: 13px;
    cursor: pointer;
    ${props => props.hover ? `&:hover {
        color: white;
        background: #ff54b0;
    }` : ""}
`;



export default Button;
