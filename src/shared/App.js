import React, { useEffect } from "react";

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
    const dispatch = useDispatch();
    const is_login = useSelector(state => state.user.is_login);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if(!token){
            console.log("없어")
            return;
        } else {
            console.log('되니?')
            dispatch(userActions.loginCheckApi());
        };
    },[]);
        
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

export default App;
