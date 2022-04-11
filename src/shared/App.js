import React from "react";

import { Route } from "react-router-dom";

import { Header } from "../components/index";
import Permit from "./Permit";
import { Grid, Button } from "../elements";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../pages/Main";

import { Login, Signup, PostWrite } from "../pages/index";


import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
// components

function App() {
  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={PostWrite} />
        </ConnectedRouter>
      </Grid>
      <Grid>
        <Button is_float text="+" _onClick={() => {history.push('/write');}}></Button>
      </Grid>
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
