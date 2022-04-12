import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import { RESP } from "../../shared/json";

import { actionCreators as imageActions } from "./image";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const GET_ONE_POST = "GET_ONE_POST";

// action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const getOnePost = createAction(GET_ONE_POST, (post) => ({post}));

// initialState
const initialState = {
  list: {
      postId: 1,
      content: "반갑습니다.",
      modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      likeCount: 1,
      imageUrl:"",
      userId : 1,
      nickname: "작성자",
      comments: [
          {
              nickname: "닉네임",
              commentId: 1,
              comment: "저도 반가워요:)",
              modifiedAt: "2022-04-10"
          },
      ]
  }
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
    [SET_POST]: (state, action) =>
      produce(state, (dreft) => {
        dreft.list = action.payload.post_list;
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
  setPost,
  addPost,
  editPost,
  deletePost,
  getOnePostApi,
};

export { actionCreators };