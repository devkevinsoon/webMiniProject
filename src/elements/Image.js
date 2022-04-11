import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const { src, size, shape } = props;

    const styles = {
        src,
        size,
    };

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    return (
        <AspectOutter>
            <AspectInner {...styles}></AspectInner>
        </AspectOutter>
    );
};

Image.defaultProps = {
  src: "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
  size: 36,
  shape: false,
};

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 500px;
`;

const AspectInner = styled.div`
    position: relative;
    // 비율 정할 수 있어!
    padding-top: calc(100% /4 * 3);
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-position: center;
    background-color: #f8f8f8;
    background-repeat: no-repeat;
    background-size: contain;
`;

export default Image;