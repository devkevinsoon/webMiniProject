import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const { src, size } = props;

    const styles = {
        src,
        size,
    };

    return (
        <AspectOutter>
            <AspectInner {...styles}></AspectInner>
        </AspectOutter>
    );
};

Image.defaultProps = {
  src: "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
  size: 36,
};

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
    background-size: cover;
`;

export default Image;