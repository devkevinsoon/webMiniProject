import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = () => {
  const fileInput = React.useRef();
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);

  const selectFile = (e) => {
    console.log("이미지 업로드 이벤트 값 :", e.target.file[0]);

    const reader = new FileReader();
    const file = fileInput.current.file[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      // console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };



  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageApi(image));
  };

  return (
    <ImgWrap>
      <label htmlFor="uploadImg" className="flex-auto">
        <input
          id="uploadImg"
          type="file"
          onChange={selectFile}
          ref={fileInput}
        />
        <div>
          <button
            disabled={is_uploading}
            onClick={() => {
              uploadFB();
            }}>
            업로드하기
          </button>
        </div>
      </label>
    </ImgWrap>
  );
};

const ImgWrap = styled.div`
  width: 100%;
  label {
    width: 100%;
    display: flex;
    align-items: stretch;
  }
  input {
    flex: auto;
    padding: 10px;
    margin-right: 10px;
  }
  button {
    height: 100%;
    cursor: pointer;
    &[disabled] {
      background-color: #eee;
      color: #ddd;
    }
  }
`;
export default Upload;
