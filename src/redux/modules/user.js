import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/cookie";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

// initialState
const initialState = {
    user: null,
    is_login: false,
};

// actionCreators
const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, () => {});


// middleWares
const signUpApi = (user) => {
    return async function (dispatch, getState, {history}){
        console.log(user)
        try {
            const join = await axios.post("http://54.180.96.119/api/signup",{
                username: user.user_name,
                nickname: user.nickname,
                password: user.pwd,
            });
            console.log(join)
            if(join.data === "회원가입이 완료되었습니다."){
                alert(`${user.nickname}님 ${join.data}`);
                history.replace('/login')
            } else {
                alert("회원가입에 실패했습니다. 다시 시도해주세요.");
            };
        } catch(err){
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
            console.log(err)
        }
    }
}

const loginApi = (user) => {
    return async function (dispatch, getState, {history}){
        console.log(user)
        try {
            const login = await axios.post('http://54.180.96.119/user/login',{
                username: user.user_name,
                password: user.pwd,
            });
            console.log(login);
            if(!login.data){
                alert(`안녕하세요. ${user.user_name}님!`);
                history.replace('/');
                // 토큰 받아서 넣어줘야 한다.
                // localStorage.setItem('token',login.data.token);
                // dispatch(setUser({
                // nickname: login.data.nickname,
                // username: user.user_name,
                // userId: login.data.userId
            } else {
                alert('이메일과 패스워드를 다시 확인해주세요.');
            };
        } catch(err) {
            window.alert('아이디와 비밀번호를 다시 확인해주세요.');
            console.log(err);
        }
    }
}

const logOutApi = (user) => {
    return function (dispatch, getState, {history}){

    }
}

const loginCheckApi = (user) => {
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
    signUpApi,
    loginApi,
};

export { actionCreators };