import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Upload from "../shared/Upload";

// component & element
import { Grid, Text, Button, Image, Input } from "../elements";
import ImageWrap from '../components/ImageWrap';

import { history } from '../redux/configureStore';
import { actionCreators as postActions } from '../redux/modules/post';
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

  //const post_id = props.match.param.id;
  //const is_edit = post_id ? true : false;

  // 로그인 하지 않았다면 로그인하러 가기 버튼 보여주기
  // props에서 history 가지고 오기
  const { history } = props;
  console.log(is_login);

  //let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
  //console.log(_post);

  // 게시글 작성 페이지에서 텍스트 내용 저장하기
  //const [contents, setContents] = React.useState(_post ? _post.contents : "");

  // React.useEffect(() => {
  //   if (is_edit && !_post) {
  //     console.log("포스트 정보가 없어요");
  //     history.goBack();

  //     return;
  //   }

  //   if (is_edit) {
  //     dispatch(imageActions.setPreview(_post.image_url));
  //   }
  // }, []);

  // e 이벤트 받아서 setContents 해주기
  const ChangeConstents = (e) => {
    //setContents(e.target.value);

    console.log(e.target.value);
  };
  //console.log(contents);

  // 게시글 작성버튼과 연동 할때 사용함
  const addPost = () => {
    //dispatch(postActions.addPostFB(contents));
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
              <Upload />
              <ImageWrap image_url={uploadImage?.preview} />
              <InputTagStyle>
                <input
                  label="게시글 내용"
                  placeholder="게시글 작성"
                  type="text"
                  onChange={ChangeConstents}
                />
              </InputTagStyle>
              <Button
                text="Post"
                margin="25px 0px -30px 0px"
                onClick={addPost}
              ></Button>
            </Grid>
          </Container>
        </Grid>
      </WriteStyle>
    </React.Fragment>
  );
};


PostWrite.defatulProps = {
  postId: '',
  nickname: 'spring',
  image_url: '',
  modifiedAt : moment().format("YYYY-MM-DD hh:mm:ss"),
};

const WriteStyle = styled.div`
  max-width: 600px;
  margin: 0 auto ;
  padding: 40px;
  
  input: focus{outline: none;}
  
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
export default PostWrite;
