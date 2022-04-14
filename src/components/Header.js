import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Logo, Button } from "../elements/index.js";
import { actionCreators as userActions } from "../redux/modules/user";

import oc from "open-color";
import { shadow, media } from "../lib/styleUtil";

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
    return (
      <React.Fragment>
        <HeaderContainer>
          <Logo {...props} />
          <Button
            bg="#efefef"
            width="100%"
            text="로그아웃"
            _onClick={() => {
              dispatch(userActions.logOutApi());
            }}
          />
        </HeaderContainer>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <HeaderContainer>
        <Positioner>
          <WhiteBackground>
            <HeaderContents>
              <Logo {...props} />
              <React.Fragment>
                <Button
                  bg="#efefef"
                  text="로그인"
                  _onClick={() => {
                    props.history.push("/Login");
                  }}
                />
                <Button
                  _onClick={() => {
                    props.history.push("/signup");
                  }}
                  bg="#efefef"
                  text="회원가입"
                />
              </React.Fragment>
            </HeaderContents>
          </WhiteBackground>
        </Positioner>
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  /* position: relative;  */
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 50px;
  margin: 30px auto 30px auto;
  button {
	width: 150px;
    margin-left: 10px;
    border-radius: 100px;
    color: #797979;
    &:hover {
      border-color: #f69c9c;
      box-shadow: 1px 1px 4px 0px #f4d5d5;
    }
  }
`;

// 상단 고정, 그림자
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  background: #dcdcdc;
  display: flex;
  justify-content: center;
  height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
  ${media.wide`
        width: 992px;
    `}

  ${media.tablet`
        width: 100%;
    `}
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

export default Header;
