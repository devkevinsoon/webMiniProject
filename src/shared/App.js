import React, { useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../components/index";
import { Grid, Button } from "../elements";
import { Login, Signup, Main, Detail, PostWrite } from '../pages/index';
import { actionCreators as userActions } from "../redux/modules/user";
import Test from "../pages/Test";


function App() {
    // const dispatch = useDispatch();
    // const is_login = useSelector(state => state.user.is_login);
    // const token = localStorage.getItem("token");

    
    
    // console.log(is_login, token)
    
    return (
        <React.Fragment>
            <Grid>
                <ConnectedRouter history={history}>
                <Route path="/" component={Header} />
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/write" exact component={PostWrite} />
                <Route path="/detail" exact component={Detail} />
                <Route path="/test" exact component={Test} />
                </ConnectedRouter>
            </Grid>
                <Button is_float text="+" _onClick={() => {history.push('/write');}} />
        </React.Fragment>
    );
}

const Plus = styled(TiPlus)`
    font-size: 28px;
`;


// const AddBtn = styled(Link)`
//    ${RoundBtn};
//    position: fixed;
//    bottom: 10px;
//    right: 10px;
//    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
//      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
//    ${({ theme }) => theme.device.tablet} {
//      bottom: 20px;
//      right: 20px;
//    }
//    ${Plus} {
//      transition: transform 300ms ease-in-out;
//    }
//    &:hover {
//      ${Plus} {
//        transform: rotate(90deg);
//      }
//    }
//  `;
export default App;
