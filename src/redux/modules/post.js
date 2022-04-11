import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { RESP } from "../../shared/json";

const GET_ONE_POST = "GET_ONE_POST";

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

const getOnePost = createAction(GET_ONE_POST, (post) => ({post}));

const getOnePostApi = (postId) => {
    return function (dispatch, getState, {history}){
        const resp = RESP.post;
        dispatch(getOnePost(resp));
        history.push('/detail')
    };
};


export default handleActions(
    {
        [GET_ONE_POST]: (state, action) => 
            produce(state, (draft) => {
                draft.list = action.payload.post;
        }),
    },
    initialState
);

const actionCreators = {
    getOnePostApi,
};

export { actionCreators };

               