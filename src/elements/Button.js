import React from "react";
import styled from "styled-components"
import { css } from "styled-components";

const Button = (props) => {

    const { children, _onClick, padding, width, bg, color, size, margin, circle, hover, disabled, text, is_float } = props;

    if (is_float) {
        return (
          <React.Fragment>
            <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
          </React.Fragment>
        );
      }

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
        <Btn 
          {...styles}
          tabIndex="-1"
          name={name}
          onClick={_onClick}
          disabled={disabled} 
        >
          {text}
        </Btn>
    )
}

Button.defaultProps = {
    text: false,
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
    name: null,
    _onClick: () => {},
}

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #EFEFEF;
  box-sizing: border-box;
  font-size: 35px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: solid 1px #ccc;
  border-radius: 50px;
  color: #FFFFFF;
    &:hover {
      border-color: #f69c9c;
      box-shadow: 1px 1px 4px 0px #f4d5d5;
    }
   transition: all 0.3s;
`;

const Btn = styled.button`
  box-sizing: border-box;
  border: solid 1px #ccc;
  transition: all 0.3s;
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
