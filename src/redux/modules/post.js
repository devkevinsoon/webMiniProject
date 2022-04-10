import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { RESP } from "../../shared/json";

const GET_POST_EACH = "GET_POST_EACH";

const initialState = {
    list: {
        postId: 1,
        content: "반갑습니다.",
        modifiedAt: "2022-04-10",
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
}

const getPostEach = createAction(GET_POST_EACH, (post) => ({post}));

const getPostEachApi = (postId) => {
    return function (dispatch, getState, {history}){
        const resp = RESP.post;
        dispatch(getPostEach(resp));
        history.push('/detail')
    };
};


export default handleActions(
    {
        [GET_POST_EACH]: (state, action) => 
            produce(state, (draft) => {
                draft.list = action.payload.post;
        }),
    },
    initialState
);

const actionCreators = {
    getPostEachApi,
};

export { actionCreators };

               