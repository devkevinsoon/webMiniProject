import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { RESP } from "../../shared/json";

const GET_POST_EACH = "GET_POST_EACH";

const initialState = {
    list: {
        postId: 1,
        content: "initialState",
        modifiedAt: "",
        likeCount: 1,
        imageUrl:"",
        userId : 1,
        nickname: "동현",
        comments: [
        {
            commentId: 1,
            comment: "나도 반가워요",
            modifiedAt: ""
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

               