import React from "react";
import styled from "styled-components";

const DEFAULT_IMG =
  "https://pbs.twimg.com/media/DennlYdV4AAkkQo?format=jpg&name=medium";
const ImageWrap = ({ image_url }) => {
  // console.log(image_url);
  return (
    <ImgStyle>
      <img src={image_url ? image_url : DEFAULT_IMG} alt="이미지" />
    </ImgStyle>
  );
};

const ImgStyle = styled.div`
  display: flex;
  width: 100%;
  min-height: 300px;
  margin: 20px 0;
  border: solid 1px #ccc;
  img {
    width: 100%;
  }
`;

export default ImageWrap;