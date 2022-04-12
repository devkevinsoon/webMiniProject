import React, { useState } from "react";
import styled from "styled-components"

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = () => {
    const fileInput = React.useRef();
    const dispatch = useDispatch();
    //const is_uploading = useSelector((state) => state.image.uploading);

    const selectFile = (e) => {
      console.log("selectFile :" ,e.target.files[0]);
      const reader = new FileReader();
      const file = fileInput.current.files[0];

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
        // preview 동작 메소드
        dispatch(imageActions.setPreview(reader.result));
        console.log("1");
      };
    };

    const uploadFB = () => {
      let image = fileInput.current.file[0];
      dispatch(imageActions.uploadImageApi(image));
    }
    
    return (
      <ImageWrap>
        <label htmlFor="uploadImage" className="flex-auto">
          <input
            id="uploadImage"
            type="file"
            onChange={selectFile}
            ref={fileInput}
          />
          <div>
            <button
              //disabled={is_uploading}
              onClick={() => {
                uploadFB();
              }}>
              Upload
            </button>
          </div>
        </label>
      </ImageWrap>
    );
  };

  const ImageWrap = styled.div`
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
    border-radius: 10px;
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