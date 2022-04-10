import React, { useState } from "react"
import styled from "styled-components"

import { history } from "../redux/configureStore"
import { Grid, Input, Button, Text } from "../elements/index";
import { emailCheck, pwdCheck } from "../shared/common";
import { actionCreators as userActions } from "../redux/modules/user"
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as checkActions } from "../redux/modules/checkDup";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [ formInput, setFormInput ] = useState({});
    const { user_name, nickname, pwd, re_pwd } = formInput;
    
    const onChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setFormInput({
            ...formInput,
            [id]: value,
        });
    };

    // 이메일, 닉네임 중복검사 및 양식 검사
    const username_check = useSelector(state => state.checkDup.username)
    const nickname_check = useSelector(state => state.checkDup.nickname)

    const checkUserNameDup = () => {
        dispatch(checkActions.checkUserNameDupApi(user_name))
    }

    const checkNickNameDup = () => {
        dispatch(checkActions.checkNickNameDupApi(nickname))
    }

    const signupClick = () => {

        if(!user_name || !nickname || !pwd || !re_pwd ){
            alert("빈칸을 모두 채워주세요.");
            return;
        } else if (!emailCheck(user_name)){
            alert("이메일 형식이 아닙니다.");
            return;
        } else if (!pwdCheck(pwd)){
            alert("패스워드는 숫자와 특수문자를 포함한 최소 8자 이상입니다.");
            return;
        } else if (pwd !== re_pwd){
            alert("패스워드가 서로 같지 않습니다.")
        } else if (!username_check.is_check || (username_check.email !== user_name)){
            alert("이메일 중복확인을 해주세요.")
        } else if (!nickname_check.is_check || (nickname_check.nick_name !== nickname)){
            alert("닉네임 중복확인을 해주세요.")
        } else {
            alert("성공")
            dispatch(userActions.setUser(formInput))
            history.push('/login')
        }
    }
    
    return(
        <Grid width="100vw" height="100vh" padding="70px 0 30px 0" is_flex>
            <Container>
                <Grid height="20%" is_flex>
                    <Text size="52px" fontFamily="'Kaushan Script', cursive" textAlign="center">Signup</Text>
                </Grid>
                <Grid height="60%" is_flex column>
                    <Grid width="80%" margin="50px 0px 25px 0px" is_flex>
                        <Input
                            id="user_name"
                            placeholder="이메일을 입력해주세요."
                            _onChange={onChange}
                        />
                        <Button 
                            width="20%" padding="5px" margin="0px 0px 0px 5px" size="14px" hover
                            _onClick={checkUserNameDup} text="Check" name="btn" tabIndex="-1"
                        />
                    </Grid>
                    <Grid width="80%" margin="0px 0px 25px 0px" is_flex>
                        <Input
                            id="nickname"
                            placeholder="닉네임을 입력해주세요."
                            _onChange={onChange}
                        />
                        <Button 
                            width="20%" padding="5px" margin="0px 0px 0px 5px" size="14px" hover
                            _onClick={checkNickNameDup} text="Check" name="btn" tabIndex="-1"
                        />
                    </Grid>
                    <Grid margin="0px 0px 25px 0px" is_flex>
                        <Input
                            id="pwd"
                            width="80%"
                            type="password"
                            placeholder="패스워드를 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                    <Grid margin="0px 0px 20px 0px" is_flex>
                        <Input
                            id="re_pwd"
                            width="80%"
                            type="password"
                            placeholder="패스워드를 다시 한 번 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                </Grid>
                <Grid height="20%" is_flex>
                    <Button
                        width="80%"
                        padding="10px"
                        text="회원가입"
                        hover
                        _onClick={
                            signupClick
                        }
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 70%;
    padding: 40px 0px 30px 0px;
    border: none;
    border-radius: 25px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2);

`;

export default Signup;