import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

import { Grid, Input, Button, Text } from "../elements/index";

const Login = (props) => {
    return(
        <Grid width="100vw" height="100vh" is_flex>
            <Container>
                <Grid height="20%" is_flex>
                    <Text size="52px" fontFamily="'Kaushan Script', cursive">Login</Text>
                </Grid>
                <Grid height="50%" column is_flex>
                    <Grid margin="40px 0px 30px 0px" is_flex>
                        <Input placeholder="이메일을 입력해주세요."/>
                    </Grid>
                    <Grid margin="0px 0px 40px 0px" is_flex>
                        <Input placeholder="패스워드를 입력해주세요."/>
                    </Grid>
                </Grid>
                <Grid height="30%" column is_flex>
                    <Button width="80%" color="white" size="16px" margin="20px 0px" bg="#607d8b" hover>로그인</Button>
                    <Grid is_flex>
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
    height: 60%;
    padding: 30px 0px 20px 0px;
    border: none;
    border-radius: 25px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2);
`;


export default Login;