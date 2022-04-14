import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";
import { actionCreators as imageActions } from "./image";



// actions
const GET_POST = "GET_POST";          // 정보 불러오기
const ADD_POST = "ADD_POST";          // 정보 추가하기
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const SET_COMMENT = "SET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const SET_LIKE = "SET_LIKE";


// action creators
const getPost = createAction(GET_POST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
// const editPost = createAction(EDIT_POST, (post_id, post) => ({post_id, post}));
const editPost = createAction(EDIT_POST, (post_id, content) => ({post_id, content}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const setComment = createAction(SET_COMMENT, (post_id, comment) => ({post_id, comment}));
const deleteComment = createAction(DELETE_COMMENT, (post_id, commentId) => ({post_id, commentId}));
const setLike = createAction(SET_LIKE, (like) => ({like}));


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
const getPostApi = (userId) => {
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

// middleWares - post 추가하기 
const addPostApi = (content, file, nickname) => {
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

// middleWares - post 수정하기 
const editPostApi = (content, postId) => {
  console.log("content : ",content);
  console.log("postID : ",postId);

  return async function (dispatch, getState, { history }){
    try {
      await axios.put(`http://54.180.96.119/api/posts/${postId}`,{
        content: content,
        postId: postId
      },{
        headers: {
          Authorization: `BEARER ${localStorage.getItem("token")}`,
        },
      });
      history.replace("/");
    } catch (err) {
      alert("게시글 수정에 실패하였습니다.");
      console.log("fail : ", err);
    }
  };
};


// Middleware 
const getOnePostApi = (postId) => {
  console.log(postId);
  return async function (dispatch, getState, { history }) {
    try {
      const onePost = await axios.get(
        `http://54.180.96.119/api/postDetail/${postId}/comments`
      );
      console.log(onePost);
      dispatch(getPost([onePost.data]));
      history.push(`/detail/${postId}`);
    } catch (err) {
      console.log(err);
      alert("게시글 조회에 실패하였습니다.");
    }
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
    }
  };
};

const deleteCommentApi = (post_id, commentId) => {
	return async function (dispatch, getState, {history}){
		try {
			const _deleteComment = await axios.post(`http://54.180.96.119/api/comments/${commentId}`, {commentId},{
				headers: {
                    Authorization: `BEARER ${localStorage.getItem('token')}`
                }
			});
			console.log(_deleteComment);
			dispatch(deleteComment(post_id, commentId));
		} catch(err){
			console.log(err);
            alert("댓글 삭제에 실패하였습니다.");
		};
	}
}

const setLikeCountApi = (userId, postId) => {
	return async function (dispatch, getState, {history}){
		try {
			const like = await axios.post("http://54.180.96.119/api/likes", {},{
				headers: {
                    Authorization: `BEARER ${localStorage.getItem('token')}`
                }
			});
			console.log(like);
			dispatch(setLike(like));
		} catch(err){

		}
	}
}


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
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // 상세페이지에서는 포스트가 하나인데 인덱스를 찾을 필요가 있을까?
        const idx = draft.list.findIndex(
          (v) => v.postId === action.payload.post_id
        );
        draft.list[idx].comments.unshift(action.payload.comment);
      }),

    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id] = draft.list.comments.filter(
          (v) => v.commentId !== action.payload.commentId
        );
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
  addPostApi,
  getPostApi,
  setCommentApi,
	deleteCommentApi,
  editPostApi
};

export { actionCreators };