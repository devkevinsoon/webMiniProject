import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { RESP } from "../../shared/json";

// action
const CHECK_DUP = "CHECK_DUP";

// actionCreator
const checkDup = createAction(CHECK_DUP, (info) => ({info}));

// initialState
const initialState = {
    username: {
        email: '',
        is_check: false,
    },
    nickname: {
        nick_name: '',
        is_check: false,
    }
}

// middleWares
const checkUserNameDupApi = (user_name) => {
    return function (dispatch, getState, {histoty}){
        const resp = RESP.return;
        console.log(resp)

        const check_info = {
            username: {
                email: user_name,
                is_check: resp,
            }
        }
        dispatch(checkDup(check_info))
    }
}

const checkNickNameDupApi = (nickname) => {
    return function (dispatch, getState, {histoty}){
        const resp = RESP.return;
        console.log(resp)

        const check_info = {
            nickname: {
                nick_name: nickname,
                is_check: resp,
            }
        }
        dispatch(checkDup(check_info))
    }
}


// reducer
export default handleActions(
    {
        [CHECK_DUP]: (state, action) => 
            produce(state, (draft) => {
                const key = Object.keys(action.payload.info);
                draft[key] = {...action.payload.info[key]};
        }),
    },
    initialState
);

const actionCreator = {
    checkDup,
    checkUserNameDupApi,
    checkNickNameDupApi,
}

export { actionCreator }