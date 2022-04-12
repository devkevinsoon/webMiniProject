import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { 
        bold, 
        color, 
        size, 
        children, 
        margin, 
        textAlign, 
        display, 
        fontFamily, 
        hover, 
        padding, 
        width 
    } = props;

    const styles = {
        bold,
        color,
        size, 
        margin, 
        textAlign, 
        fontFamily,
        hover,
        padding,
        width,
    };

    return (
        <P {...styles} style={{display: display}} tabIndex="-1">
            {children}
        </P>
    );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  textAlign: false,
  display: "block",
  fontFamily: "",
  hover: false,
  padding: false,
  width: "100%",
};

const P = styled.p`
  text-align: ${(props) => (props.textAlign)};
  color: ${(props) => (props.color)};
  padding: ${(props) => (props.padding)};
  font-size: ${(props) => (props.size)};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  margin: ${(props) => (props.margin)};
  font-family: ${(props) => (props.fontFamily)};
  width: ${(props) => (props.width)};
  ${props =>
    props.hover 
        ? `&:hover {
        font-weight: 600;
        color: #ff54b0;
        cursor: pointer}` 
        : ""};
`;

export default Text;
