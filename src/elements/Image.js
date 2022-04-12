import styled from  'styled-components';
import React from 'react';

const Image = (props) => {
    const { shape, src, size } = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle") {
        return (
          <ImageCircle {...styles}></ImageCircle>
        )
    } else {
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        ) 
    }  
}

Image.defaultProps = {
    shape: "circle",
    src: "../../public/img/03.png",
    size: 36,
};

const AspectOutter = styled.div`
    width: 100%;
    max-width: 700px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: 100%;
    background-color: #f8f8f8;
    background-position: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;