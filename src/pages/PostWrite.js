import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Upload from "../shared/Upload";

// component & element
import { Grid, Text, Button, Image, Input } from "../elements";
//import ImageWrap from "../components/ImageWrap";

import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

import moment from "moment";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  // 업로드 된 이미지 불러오기
  const uploadImage = useSelector((state) => state.image);
  // 로그인 후에만 /write에 접근하기위한 로그인 체크
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
  const postImage = useSelector((state) => state.image.targetfile);
  const user = useSelector((state) => state?.user?.user?.nickname);

  const content = React.useRef();

  console.log(preview);
  // props에서 history 가지고 오기
  const { history } = props;
  console.log(is_login);



  const fileInput = React.useRef();
  //const is_uploading = useSelector((state) => state.image.uploading);
  
  let targetFile;
  
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    targetFile = e.target.files[0]

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      // preview 동작 메소드
      dispatch(imageActions.setPreview({result: reader.result, targetFile:targetFile}));
    };
  };
  
 
  //console.log(contents);
  
  // 게시글 작성버튼과 연동 할때 사용함 
  
  const addPost = () => {
      const file = document.getElementById("uploadImage").files[0];
      dispatch(postActions.addPostAx(content, file, user));
    };

  return (
    <React.Fragment>
      <WriteStyle>
        <Grid width="100%" height="100%" is_flex>
          <Container>
            <Text
              margin="10px"
              size="25px"
              bold="1"
              fontFamily="'Kaushan Script', cursive"
              textAlign="center"
            >
              Image Upload
            </Text>
            <Grid padding="16px">
              <ImageWrap>
                  <input
                    id="uploadImage"
                    type="file"
                    onChange={selectFile}
                    ref={fileInput}
                  />
              </ImageWrap>

              <img src={preview} style={{width:"200px"}}></img>

              <InputTagStyle>
                <input
                  label="게시글 내용"
                  placeholder="게시글 작성"
                  type="text"
                  ref={content}
                />
              </InputTagStyle>
              <Button
                text="Post"
                margin="25px 0px -30px 0px"
                _onClick={addPost}
              ></Button>
            </Grid>
          </Container>
        </Grid>
      </WriteStyle>
    </React.Fragment>
  );
};

PostWrite.defatulProps = {
  postId: "",
  nickname: "spring",
  image_url: "",
  modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const WriteStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;

  input: focus {
    outline: none;
  }

  input {
    border: solid 1px #ccc;
  }
  .input_tag {
    margin: 10px;
    margin-left: -6px;
  }
  button {
    font-size: 16px;
    padding: 6px 10px;
    border: none;
    border-radius: 15px;
    background-color: #f4d5d5;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #ff54b0;
    }
  }
`;

const InputTagStyle = styled.div`
  display: inline-block;
  min-width: 300px;
  input {
    width: 100%;
    padding: 6px 10px;
    border-radius: 20px;
    border: solid 1px #ccc;
  }
  .tag {
    padding: 4px 6px;
    margin-right: 6px;
    border: solid 1px #ccc;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 40%;
  padding: 20px 0px 20px 0px;
  border: none;
  border-radius: 15px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

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




export default PostWrite;
