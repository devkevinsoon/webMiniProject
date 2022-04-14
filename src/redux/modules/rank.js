import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const GET_RANK = "GET_RANK";

const initialState = {
    list:[
        {
        postId: 1,
        content: "",
        imageUrl:"",
        modifiedAt: "",  
        likeCount: 1,
        }
    ]
};

const getRank = createAction(GET_RANK, (list) => ({list}));

export const getRankApi = () => {
    return async function (dispatch, getState, {history}){
        try {
            const rank = await axios.post("http://54.180.96.119/api/posts/rank",{},{
                headers: {
                    Authorization: `BEARER ${localStorage.getItem('token')}`
                }
            });
            dispatch(getRank(rank.data));
        } catch(err){
            console.log('에러발생', err)
        }
    };
};

export default handleActions(
    {
        [GET_RANK]: (state, action) => 
            produce(state, (draft) => {
                draft.list = action.payload.list.splice(0, 3);
        }),
    },
    initialState
);