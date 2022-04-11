import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Grid, Input, Button, Text } from "../elements/index";
import { emailCheck, pwdCheck } from "../shared/common";
import { actionCreators as userActions } from "../redux/modules/user"
import { useDispatch } from "react-redux";
import { actionCreator as checkActions } from "../redux/modules/checkDup";
import axios from "axios";

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

    useEffect(() => {
        if(user_name && nickname && pwd && re_pwd){
            document.getElementsByName("signUpBtn")[0].style.background ="#ff54b0";
        } else {
            document.getElementsByName("signUpBtn")[0].style.background ="#f48fb1";
        }
    }, [user_name, nickname, pwd, re_pwd]);

    // 이메일, 닉네임 중복검사
    const [ checkEmail, setCheckEmail ] = useState(false);
    const [ checkNick, setCheckNick ] = useState(false);
    const btn_arr = document.getElementsByName("btn");

    const checkUserNameDup = async() => {
        if(emailCheck(user_name)){
            try {
                const checkUserName = await axios.post("http://54.180.96.119/api/userName",{
                    username: user_name,
                });
                if(checkUserName.data.includes("사용")){
                    alert(checkUserName.data);
                    setCheckEmail(true);
                    btn_arr[0].style.background = "#ff54b0";
                    btn_arr[0].innerText = "OK";
                } else {
                    alert(checkUserName.data);
                }  
            } catch(err){
                console.log(err);
                alert("이메일 중복확인에 실패했습니다.");
            };
        } else {
            alert("이메일 형식을 먼저 확인해주세요.")
        }; 
    };

    const checkNickNameDup = async() => {
        if(nickname.length >= 2){
            try {
                const checkUserNickName = await axios.post("http://54.180.96.119/api/nickName",{
                    nickname: nickname,
                });
                if(!checkUserNickName.data.includes("중복")){
                    alert(checkUserNickName.data);
                    setCheckNick(true);
                    btn_arr[1].style.background = "#ff54b0";
                    btn_arr[1].innerText = "OK";
                } else {
                    alert(checkUserNickName.data);  
                } 
            } catch(err){
                console.log(err);
                alert("닉네임 중복확인에 실패했습니다.");
            };   
        } else {
            alert("닉네임은 최소 2자 이상입니다.");
        }
    };
    //

    const signupClick = () => {

        if(!user_name || !nickname || !pwd || !re_pwd ){
            alert("빈칸을 모두 채워주세요.");
            return;
        } else if (!pwdCheck(pwd)){
            alert("패스워드는 숫자와 특수문자를 포함한 최소 8자 이상입니다.");
            return;
        } 
        else if (pwd !== re_pwd){
            alert("패스워드가 서로 일치하지 않습니다.")
        } 
        // else if (!username_check.is_check || (username_check.email !== user_name)){
        //     alert("이메일 중복확인을 해주세요.")
        // } else if (!nickname_check.is_check || (nickname_check.nick_name !== nickname)){
        //     alert("닉네임 중복확인을 해주세요.")
        // } 
        else {
            dispatch(userActions.signUpApi(formInput))
        }
    }
    
    return(
        <Grid width="100vw" height="100vh" padding="70px 0 30px 0" is_flex>
            <Container>
                <Grid height="20%" is_flex>
                    <Text size="52px" fontFamily="'Kaushan Script', cursive" textAlign="center">Signup</Text>
                </Grid>
                <Grid height="60%" is_flex column>
                    <Grid is_flex column position="relative">
                        <Grid width="80%" margin="50px 0px 30px 0px" is_flex>
                            <Input
                                id="user_name"
                                placeholder="이메일을 입력해주세요."
                                _onChange={onChange}
                            />
                            <Button 
                                width="20%" padding="5px" margin="0px 0px 0px 5px" size="14px" border= "none" hover 
                                _onClick={checkUserNameDup} text="Check" name="btn" tabIndex="-1"
                            />
                        </Grid>
                        { user_name && !emailCheck(user_name) && <Span color="red">이메일 형식이 아닙니다.</Span>}
                        { user_name && emailCheck(user_name) && <Span color="blue">올바른 이메일 형식입니다.</Span>}
                    </Grid>
                    <Grid is_flex column position="relative">
                        <Grid width="80%" margin="0px 0px 30px 0px" is_flex>
                            <Input
                                id="nickname"
                                placeholder="닉네임을 입력해주세요."
                                _onChange={onChange}
                            />
                            <Button 
                                width="20%" padding="5px" margin="0px 0px 0px 5px" size="14px" border= "none" hover
                                _onClick={checkNickNameDup} text="Check" name="btn" tabIndex="-1"
                            />
                        </Grid>
                        { nickname && (nickname.length < 2) && <Span color="red">닉네임은 최소 2자 이상입니다.</Span>}
                        { nickname && (nickname.length >= 2) && <Span color="blue">올바른 닉네임 형식입니다.</Span>}
                    </Grid>
                    <Grid is_flex column position="relative">
                        <Grid margin="0px 0px 30px 0px" is_flex>
                            <Input
                                id="pwd"
                                width="80%"
                                type="password"
                                placeholder="패스워드를 입력해주세요."
                                _onChange={onChange}
                            />
                        </Grid>
                        { pwd && !pwdCheck(pwd) && <Span color="red">패스워드는 숫자와 특수문자를 포함한 최소 8자 이상입니다.</Span>}
                        { pwd && pwdCheck(pwd) && <Span color="blue">올바른 패스워드 형식입니다.</Span>}
                    </Grid>
                    <Grid is_flex column position="relative">
                        <Grid margin="0px 0px 30px 0px" is_flex>
                            <Input
                                id="re_pwd"
                                width="80%"
                                type="password"
                                placeholder="패스워드를 다시 한 번 입력해주세요."
                                _onChange={onChange}
                            />
                        </Grid>
                        { re_pwd ? 
                            (pwd !== re_pwd 
                            ? <Span color="red">패스워드가 서로 일치하지 않습니다.</Span>
                            : <Span color="blue">패스워드가 서로 일치합니다.</Span>)
                          : ""
                        }
                    </Grid>
                </Grid>
                <Grid height="20%" is_flex>
                    <Button
                        width="80%"
                        border= "none"
                        name="signUpBtn"
                        padding="10px"
                        text="회원가입"
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
    width: 420px;
    height: 70%;
    padding: 20px 0px 30px 0px;
    border: none;
    border-radius: 25px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Span = styled.span`
    font-size: 12px;
    font-family: "'Kaushan Script', cursive"; 
    position: absolute;
    bottom: 10px;
    left: 44px;
    color: ${props => props.color};
`;

export default Signup;