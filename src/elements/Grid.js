import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {
        children, 
        is_flex, 
        column, 
        width, 
        height, 
        padding, 
        margin, 
        background,
        borderB,
        justify,
        minWidth,
        position,
        zIndex,
    } = props;
    
    const style = {
        column, 
        is_flex, 
        width, 
        height, 
        padding, 
        margin, 
        background,
        borderB,
        justify,
        minWidth,
        position,
        zIndex,
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
    borderB: false,
    justify: false,
    minWidth: false,
    position: "static",
    zIndex: false,
};

const GridBox = styled.div`
    ${(props) =>
        (props.is_flex
        ? `display: flex; align-items: center; justify-content: center;`
        : "")};
    justify-content: ${(props) => (props.justify ? "space-between" : "")};
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    width: ${(props) => (props.width)};
    height: ${(props) => (props.height)};
    padding: ${(props) => (props.padding ? `${props.padding}` : "")};
    margin: ${(props) => (props.margin ? `${props.margin}` : "")};
    background-color: ${(props) => (props.background ? `${props.background}` : "")};
    position: ${(props) => (props.position)};
    z-index: ${(props) => (props.zIndex)};
    ${(props) => (props.borderB ? `border-bottom: ${props.borderB};` : "")}
    ${(props) => (props.minWidth ? `min-width: ${props.minWidth};` : "")}
`;

export default Grid;