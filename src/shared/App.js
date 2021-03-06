import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/index";
import { Grid, Button } from "../elements";
import { Login, Signup, Main, Detail, PostWrite, Modify } from '../pages/index';
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const is_login = useSelector(state => state.user.is_login);
    
    useEffect(() => {
        if(is_login || token){
            dispatch(userActions.loginCheckApi());
        };
    },[is_login]);

    return (
        <React.Fragment>
            <Grid>
                <ConnectedRouter history={history}>
                <Route path="/" component={Header} />
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/write" exact component={PostWrite} />
                <Route path="/detail/:id" exact component={Detail} />
                <Route path="/modify/:id" exact component={Modify} />
                </ConnectedRouter>
            </Grid>
                {is_login ? <Button is_float text="+" _onClick={() => {history.push('/write');}}/> : ""}
        </React.Fragment>
    );
};

export default App;

