import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";
import { RESP } from "../../shared/json";

import { actionCreators as imageActions } from "./image";

// actions
const GET_POST = "GET_POST";          // 정보 불러오기
const ADD_POST = "ADD_POST";          // 정보 추가하기
const EDIT_POST = "EDIT_POST";        
const DELETE_POST = "DELETE_POST";
const GET_ONE_POST = "GET_ONE_POST";

// action creators
const getPost = createAction(GET_POST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const getOnePost = createAction(GET_ONE_POST, (post) => ({post}));

// initialState
const initialState = {
  list: [
    {
      postId: "",
      content: "",
      modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      likeCount: 0,
      imageUrl: "",
      userId: "",
      nickname: "작성자",
      comments: [],
    },
  ],
};

// Middleware - postList 가져오기
const getPostAx = () => {
 
  return async function(dispatch, getState, {history}){
    console.log("getPost start");
    
    const _postList = []
    
    try{
          const _getPost = await axios.get('http://54.180.96.119/api/posts')
          console.log("_getPost : ",_getPost);
          
          _getPost.forEach( g => { _postList.push(g)});
          dispatch(getPost(_postList));

    }catch(err){
        alert("getPost fail");
        console.log("getPost fail : " , err)
    }
  };
};

// Middleware - post 추가하기
const addPostAx = (content, formData) => {
  console.log("content : ", content);
  console.log("preview : ", formData);
  return;
  return async function(dispatch, getState, {history}){
    try {
      const user = getState().user.user;
      const _addPost = await axios.post(
        "http://54.180.96.119/api/posts",
        {content, nickname : user.nickname, formData },
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );

      const file = Object.values(formData);
      console.log("file: ", file);

      const list = {
        postId: "", // 서버통신할때 : reponse.data.postId;
        content: content,
        modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        // imageUrl :formData,
        imageUrl : file[0],
        likeCount: 0,
        userId: user.userId,
        nickname: user.nickname,
        comments: [],
      };
      console.log("post_list : ", list);
      // return;
      dispatch(addPost(list));

      history.replace("/");
    } catch (err) {
      console.log("fail : ", err);
    }
      
  };
};


const getOnePostApi = (postId) => {
  return function (dispatch, getState, {history}){
      const resp = RESP.post;
      dispatch(getOnePost(resp));
      history.push('/detail')
  };
};

// reducer
export default handleActions(
  {
    // action.payload.post_list에 넘어온 값으로 dreft.list에 저장
    [GET_POST]: (state, action) =>
      produce(state, (dreft) => {
        dreft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        // unshift 는 배열 맨 앞에 데이터를 넣는다
        console.log("action : ",action);
        draft.list.unshift(action.payload.post);
        console.log("action2 : ",action);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((p) => p.id !== action.payload.post_id);
      }),
    [GET_ONE_POST]: (state, action) => 
          produce(state, (draft) => {
              draft.list = action.payload.post;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getPost,
  addPost,
  editPost,
  deletePost,
  getOnePostApi,
  addPostAx,
  getPostAx,
};

export { actionCreators };