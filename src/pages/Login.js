import React, { useState } from "react"
import styled from "styled-components"

import { Link } from "react-router-dom";
import { history } from "../redux/configureStore"
import { Grid, Input, Button, Text } from "../elements/index";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import flower from "../images/flower_pngtree.png"

const Login = (props) => {
    const dispatch = useDispatch();
    
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

    const loginClick = () => {
        const { id, pwd } = formInput;
        if(!id || !pwd){
            alert("빈칸을 모두 채워주세요.");
            return;
        }
    };
    
    return(
        <Grid width="100vw" height="100vh" padding="70px 0 30px 0" is_flex>
            <Container>
                <Wrap>
                    <Flower src={flower} />
                    <Span>Login</Span>
                </Wrap>
                <Grid height="30%" column is_flex>
                    <Grid margin="40px 0px 30px 0px" is_flex>
                        <Input
                            id="id"
                            placeholder="이메일을 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                    <Grid margin="0px 0px 20px 0px" is_flex>
                        <Input
                            id="pwd"
                            placeholder="패스워드를 입력해주세요."
                            _onChange={onChange}
                        />
                    </Grid>
                </Grid>
                <Grid height="30%" column is_flex>
                    <Button 
                        text="로그인"
                        width="80%"
                        padding="10px"
                        margin="20px 0px"
                        hover
                        _onClick={loginClick}
                    />
                    <Grid is_flex padding="0px 0px 20px 0px">
                        <Text size="12px">계정이 없으신가요?</Text>
                        <Link to="/signup" style={{textDecoration : "none"}}> 
                            <Text size="12px" margin="0px 5px" color="#37474f" hover>회원가입</Text>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 70%;
    padding: 30px 0px 20px 0px;
    border: none;
    border-radius: 25px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Wrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45%;
    padding-top: 20px;
`

const Flower = styled.img`
    width: 70%;
`

const Span = styled.span`
    position: absolute;
    font-size: 54px;
    font-family: 'Kaushan Script', cursive;
    padding-bottom: 15px;
`;

export default Login;