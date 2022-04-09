import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { children, is_flex, column, width, height, padding, margin, background } = props;
    const style = {
        column, 
        is_flex, 
        width, 
        height, 
        padding, 
        margin, 
        background
    };
  
    return (
        <GridBox {...style}>
            {children}
        </GridBox>
    );
};

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    height: "auto",
    padding: false,
    margin: false,
    background: false,
};

const GridBox = styled.div`
    ${(props) =>
        (props.is_flex
        ? `display: flex; align-items: center; justify-content: center;`
        : "")};
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    width: ${(props) => (props.width)};
    height: ${(props) => (props.height)};
    padding: ${(props) => (props.padding ? `${props.padding}` : "")};
    margin: ${(props) => (props.margin ? `${props.margin}` : "")};
    background-color: ${(props) => (props.background ? `${props.background}` : "")};
`;

export default Grid;