import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Grid, Input, Button, Text } from "../elements/index";

const Signup = (props) => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwd_check, setPwdCheck] = useState('');
    const [nickname, setNickName] = useState('');

    // 이메일, 패스워드 정규표현식
    const emailValueCheck = (asValue) => {
        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return emailRegExp.test(asValue);
    };
        
    const pwdValueCheck = (asValue) => {
        const pwdRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return pwdRegExp.test(asValue);
    };
    
    const emailValueCheckBool = emailValueCheck(id);
    const pwdValueCheckBool = pwdValueCheck(pwd);
    const nicknameValueCheckBool = Boolean(nickname)
    const pwdValueDoubleCheckBool = Boolean(pwd_check)

    // if(!emailValueCheck){
    //     document.querySelector(".login_input")
    // }
    
    const isValid = emailValueCheckBool && pwdValueCheckBool && pwdValueDoubleCheckBool && nicknameValueCheckBool;
    console.log(emailValueCheckBool, pwdValueCheckBool, isValid, pwd)
    
    useEffect(() => {
        console.log(document.querySelector(".name"))
    })
    
    return(
        <Grid width="100vw" height="100vh" is_flex>
            <Container>
                <Grid height="20%" is_flex>
                    <Text size="52px" fontFamily="'Kaushan Script', cursive">Signup</Text>
                </Grid>
                <Grid height="60%" is_flex column>
                    <Grid margin="50px 0px 20px 0px" is_flex>
                        <Input _onChange={(e) => {setId(e.target.value)}} value={id} placeholder="이메일을 입력해주세요."/>
                    </Grid>
                    <Grid margin="0px 0px 20px 0px" is_flex>
                        <Input _onChange={(e) => {setNickName(e.target.value)}} value={nickname} placeholder="닉네임을 입력해주세요."/>
                    </Grid>
                    <Grid margin="0px 0px 20px 0px" is_flex>
                        <Input _onChange={(e) => {setPwd(e.target.value)}} value={pwd} placeholder="패스워드를 입력해주세요."/>
                    </Grid>
                    <Grid margin="0px 0px 50px 0px" is_flex>
                        <Input _onChange={(e) => {setPwdCheck(e.target.value)}} value={pwd_check} placeholder="패스워드를 다시 입력해주세요."/>
                    </Grid>
                </Grid>
                <Grid height="20%" is_flex>
                    <Button width="80%" color="white" size="16px" margin="20px 0px" bg="#607d8b" disabled={!isValid} hover>회원가입</Button>
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
    height: 60%;
    padding: 30px 0px 20px 0px;
    border: none;
    border-radius: 25px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2);

`;

export default Signup;