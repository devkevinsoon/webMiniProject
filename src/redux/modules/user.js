import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/cookie";

// actions
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
const CHECK_DUP = "CHECK_DUP";

// initialState
const initialState = {
    user: null,
    is_login: false,
};

// actionCreators
const setUser = createAction(SET_USER, (user) => ({user})) 
const logOut = createAction(LOG_OUT, () => {})

// middleWares
const signUPApi = (user) => {
    return function (dispatch, getState, {history}){

    }
}



// reducer
export default handleActions(
    {
        [SET_USER]: (state, action) => 
            produce(state, (draft) => {
                setCookie("is_login", "success");
                draft.is_login = true;
                draft.user = action.payload.user;
        }),
        [LOG_OUT]: (state, action) => 
            produce(state, (draft) => {
                deleteCookie("is_login");
                draft.is_login = false;
                draft.user = null;
        }),
    },
    initialState
);

const actionCreators = {
    setUser,
    logOut,
};

export { actionCreators };