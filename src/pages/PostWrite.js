import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid, Text, Button, Image, Input } from "../elements";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import moment from "moment";
const PostWrite = (props) => {
  const dispatch = useDispatch();
  // 로그인 후에만 /write에 접근하기위한 로그인 체크
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const user = useSelector((state) => state?.user?.user?.nickname);
  const postList = useSelector((state) => state.post.list);
  const postId = postList[0].postId;
  
  // props에서 history 가지고 오기
  const { history } = props;
  
  const fileInput = React.useRef();
  
  // 게시글 작성 페이지에서 텍스트 내용 저장하기 
  const [content, setContent] = React.useState("");
  let targetFile;
  
  
  // e 이벤트 받아서 file 이미지 load 시켜서 preview 
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    targetFile = e.target.files[0]
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // console.log(reader.result);
      // preview 동작 메소드
      dispatch(imageActions.setPreview({result: reader.result, targetFile:targetFile}));
    };
  };
  // e 이벤트 받아서 setContents 해주기 
  const ChangeConstent = (e) => {
    setContent(e.target.value);
  }
  
  const addPost = () => {
      const file = document.getElementById("uploadImage").files[0];
      dispatch(postActions.addPostApi(content, file, user));
    };
  
  const editPost = () => {
    dispatch(postActions.editPostApi({content: content},postId));
  }
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
              <Grid>
              <img
                src={preview}
                style={{ width: "300px", margin: "20px 10px 25px 10px", alignItems: "center"}}
              />
              </Grid>  
              <InputTagStyle>
                <input
                  value={content}
                  onChange={ChangeConstent}
                  label="게시글 내용"
                  placeholder="게시글 작성"
                  type="text"
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
    width: 328px;
    padding: 6px 10px;
    border-radius: 20px;
    border: solid 1px #ccc;
  }
  
`;
const Container = styled.div`
  // position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 40%;
  padding: 20px 20px 20px 20px;
  border: none;
  border-radius: 15px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.1);
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