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
const getPostAx = (userId) => {
  return async function(dispatch, getState, {history}){
    console.log(userId)
    const _postList = []
    let response;
    try{
          if(userId)
          {
            response = await axios.post(`http://54.180.96.119/api/posts/${userId}`,{},{
              headers: {
                Authorization: `BEARER ${localStorage.getItem("token")}`,
              },
            });
          }else
          {
            response = await axios.post(`http://54.180.96.119/api/posts/0`)
          }
          response.data.forEach(g => { _postList.push(g)});
          dispatch(getPost(_postList));
    }catch(err){
        alert("getPost fail");
        console.log("getPost fail : " , err)
    }
  };
};


const addPostAx = (content, file, nickname) => {
  const formData = new FormData();
  formData.append("content", content);
  formData.append("nickName", nickname);
  formData.append("file", file);
  return async function (dispatch, getState, { history }){
    try {
      await axios.post("http://54.180.96.119/api/post", formData, {
        headers: {
          Authorization: `BEARER ${localStorage.getItem("token")}`,
        },
      });
      history.replace("/");
    } catch (err) {
      alert("게시글 생성에 실패하였습니다.");
      console.log("fail : ", err);
    }
  };
};



// Middleware - post 추가하기
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
      produce(state, (draft) => {
        draft.list = action.payload.postList;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        // unshift 는 배열 맨 앞에 데이터를 넣는다
        draft.list.unshift(action.payload.post);
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