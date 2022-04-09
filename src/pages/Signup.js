import React, { useState } from "react"
import styled from "styled-components"

import { history } from "../redux/configureStore"
import { Grid, Input, Button, Text } from "../elements/index";
import { emailCheck, pwdCheck } from "../shared/common";

const Signup = (props) => {
    const [ formInput, setFormInput ] = useState({});

    const onChange = (e) => {
        const id = e.target.id;
        console.log(e.target.id)
        const value = e.target.value;
        setFormInput({
            ...formInput,
            [id]: value,
        });
    };

    // 중복 검사도 넣어야함!
    const signupClick = () => {
        const { id, nickname, pwd, re_pwd } = formInput;

        if(!id || !nickname || !pwd || !re_pwd ){
            alert("빈칸을 모두 채워주세요.");
            return;
        } else if (!emailCheck(id)){
            alert("이메일 형식이 아닙니다.");
            return;
        } else if (!pwdCheck(pwd)){
            alert("패스워드는 숫자와 특수문자를 포함한 최소 8자 이상입니다.");
            return;
        } else if (pwd !== re_pwd){
            alert("패스워드가 서로 같지 않습니다.")
        } else {
            // 디스패치
            history.push('/login')
        }
    }
          
    return(
        <Grid width="100vw" height="100vh" is_flex>
            <Container>
                <Grid height="20%" is_flex>
                    <Text size="52px" fontFamily="'Kaushan Script', cursive">Signup</Text>
                </Grid>
                <Grid height="60%" is_flex column>
                    <Grid margin="50px 0px 20px 0px" is_flex column>
                        <Input
                            id="id"
                            placeholder="이메일을 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                    <Grid margin="0px 0px 20px 0px" is_flex>
                        <Input
                            id="nickname"
                            placeholder="닉네임을 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                    <Grid margin="0px 0px 20px 0px" is_flex>
                        <Input
                            id="pwd"
                            type="password"
                            placeholder="패스워드를 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                    <Grid margin="0px 0px 50px 0px" is_flex>
                        <Input
                            id="re_pwd"
                            type="password"
                            placeholder="패스워드를 다시 한 번 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                </Grid>
                <Grid height="20%" is_flex>
                    <Button 
                        hover
                        _onClick={
                            signupClick
                        }
                    >
                        회원가입
                    </Button>
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