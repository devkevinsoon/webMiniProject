import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

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
    return async function (dispatch, getState, {histoty}){
        try {
            const checkUserName = await axios.post("http://54.180.96.119/api/userName",{
                username: user_name,
            });
            console.log(checkUserName);
            // if(!emailCheck(user_name)){
            //     alert("이메일 형식이 올바르지 않습니다.");
            //     return;
            // };
            // if(checkUserName.data.return){
            //     alert("사용 가능한 이메일입니다!");
            // } else {
            //     alert("이미 사용되고 있는 이메일입니다.");
            //     return;
            // };
            // const check_info = {
            //     username: {
            //         email: user_name,
            //         is_check: checkUserName.data.return,
            //     }
            // };
            // dispatch(checkDup(check_info));
        } catch(err){
            console.log(err);
            alert("이메일 중복확인에 실패했습니다.")
        };
    };
};

const checkNickNameDupApi = (_nickname) => {
    return async function (dispatch, getState, {histoty}){
        try {
            const checkUserNickName = await axios.post("http://54.180.96.119/api/nickName",{
                nickname: _nickname,
            });
            console.log(checkUserNickName);
        
            // if(checkUserNickName.data.return){
            //     alert("사용 가능한 닉네임입니다!");
            // } else {
            //     alert("이미 사용되고 있는 닉네임입니다.");
            //     return;
            // };
            // const check_info = {
            //     username: {
            //         nick_name: _nickname,
            //         is_check: checkUserNickName.data.return,
            //     }
            // };
            // dispatch(checkDup(check_info));
        } catch(err){
            console.log(err);
            alert("닉네임 중복확인에 실패했습니다.")
        };
    };
};

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
    checkUserNameDupApi,
    checkNickNameDupApi,
}

export { actionCreator }