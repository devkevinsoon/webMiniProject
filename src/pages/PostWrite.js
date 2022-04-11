import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Upload from "../shared/Upload";

// component & element
import { Grid, Text, Button, Image, Input } from "../elements";
import ImageWrap from '../components/ImageWrap';

const PostWrite = (props) => {

  const uploadImage = useSelector(state => state.Image);

  return (
    <React.Fragment>
      <WriteStyle>
      <Grid width="100%" height="100%" is_flex>
        <Container>
            <Text margin="10px" size="25px" bold="1" fontFamily="'Kaushan Script', cursive">
              Image Upload              
            </Text>
          <Grid padding="16px">
            <Upload />
            <ImageWrap image_url={uploadImage?.preview} />
            <InputTagStyle>
              <input 
                label="게시글 내용" 
                placeholder="게시글 작성"
                type="text" />
            </InputTagStyle>
            <Button text="Post" margin="25px 0px -30px 0px"></Button>
          </Grid>
          
        </Container>
      </Grid>
      </WriteStyle>
    </React.Fragment>
  );
};


PostWrite.defatulProps = {
  article_id: '',
  writer_id: '',
  writer_nickname: 'spring',
  image_url: '',
  tags: [],
  postWrite_date: 'YYYY-MM-DD hh:mm:ss',
};

const WriteStyle = styled.div`
  max-width: 600px;
  margin: 0 auto ;
  padding: 100px;
  
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
  padding: ;
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
  height: 60%;
  padding: 20px 0px 20px 0px;
  border: none;
  border-radius: 15px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
export default PostWrite;
