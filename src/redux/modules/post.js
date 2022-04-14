import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

// actions
const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const SET_COMMENT = "SET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const SET_LIKE = "SET_LIKE";

// action creators
const getPost = createAction(GET_POST, (postList) => ({ postList }));
const setLike = createAction(SET_LIKE, (post_id, is_click) => ({
  post_id,
  is_click,
}));
const setComment = createAction(SET_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));
const deleteComment = createAction(DELETE_COMMENT, (post_id, commentId) => ({
  post_id,
  commentId,
}));

// initialState
const initialState = {
  list: [
    {
      postId: "",
      content: "",
      modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      postLikeTotal: 0,
      imageUrl: "",
      userId: "",
      nickname: "",
      comments: [],
    },
  ],
};

// middleWares
const getPostApi = (userId) => {
  return async function (dispatch, getState, { history }) {
    const _postList = [];
    let response;
    try {
      if (userId) {
        response = await axios.post(
          `http://54.180.96.119/api/posts/${userId}`,
          {},
          {
            headers: {
              Authorization: `BEARER ${localStorage.getItem("token")}`,
            },
          }
        );
      } else {
        response = await axios.post(`http://54.180.96.119/api/posts/0`);
      }
      response.data.forEach((g) => {
        _postList.push(g);
      });
      dispatch(getPost(_postList));
    } catch (err) {
      alert("getPost fail");
      console.log("getPost fail : ", err);
    };
  };
};

const addPostApi = (content, file, nickname) => {
  const formData = new FormData();
  formData.append("content", content);
  formData.append("nickName", nickname);
  formData.append("file", file);
  return async function (dispatch, getState, { history }) {
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
    };
  };
};

const editPostApi = (content, postId) => {
  return async function (dispatch, getState, { history }) {
    try {
      await axios.put(
        `http://54.180.96.119/api/posts/${postId}`,
        {
          content: content,
          postId: postId,
        },
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      history.replace("/");
    } catch (err) {
      alert("게시글 수정에 실패하였습니다.");
      console.log("fail : ", err);
    };
  };
};

const deletePostApi = (postId) => {
  return async function (dispatch, getState, { history }) {
    try {
      const deletePost = await axios.delete(
        `http://54.180.96.119/api/posts/${postId}`,
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(deletePost);
      history.replace("/");
    } catch (err) {
      console.log(err);
      alert("게시글 삭제에 실패하였습니다.");
    };
  };
};

const getOnePostApi = (like, postId) => {
  return async function (dispatch, getState, { history }) {
    try {
      const onePost = await axios.get(`http://54.180.96.119/api/postDetail/${postId}/comments`);
      dispatch(getPost([onePost.data]));
      
      history.push(`/detail/${postId}`);
    
    } catch (err) {
      console.log(err);
      alert("게시글 조회에 실패하였습니다.");
    };
  };
};

const setCommentApi = (post_id, comment_info) => {
  return async function (dispatch, getState, { history }) {
    try {
      const comment = await axios.post(
        `http://54.180.96.119/api/comments/${post_id}`,
        comment_info,
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(comment);
      const doc = {
        ...comment_info,
        modifiedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        commentId: comment.data.commentId,
      };
      dispatch(setComment(post_id, doc));
    } catch (err) {
      console.log(err);
      alert("댓글 작성에 실패하였습니다.");
    };
  };
};

const deleteCommentApi = (post_id, commentId) => {
  return async function (dispatch, getState, { history }) {
    try {
      await axios.delete(
        `http://54.180.96.119/api/comments/${commentId}`,
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(deleteComment(post_id, commentId));
    } catch (err) {
      console.log(err);
      alert("댓글 삭제에 실패하였습니다.");
    }
  };
};

const setLikeCountApi = (postId, is_click) => {
  return async function (dispatch, getState, { history }) {
    try {
        await axios.post(
        `http://54.180.96.119/api/like/${postId}`,
        { postId },
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(setLike(postId, is_click));
    } catch (err) {
      console.log(err);
      alert("좋아요에 실패하였습니다.");
    }
  };
};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postList;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.list.findIndex(
          (v) => v.postId === action.payload.post_id
        );
        draft.list[idx].comments.unshift(action.payload.comment);
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].comments = draft.list[0].comments.filter(
          (v) => v.commentId !== action.payload.commentId
        );
      }),
    [SET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.list.findIndex(
          (p) => p.postId === action.payload.post_id
        );
        if (action.payload.is_click) {
          draft.list[idx].postLikeTotal -= 1;
        } else {
          draft.list[idx].postLikeTotal += 1;
        }
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getOnePostApi,
  addPostApi,
  getPostApi,
  setCommentApi,
  deleteCommentApi,
  editPostApi,
  setLikeCountApi,
  deletePostApi,
};

export { actionCreators };
