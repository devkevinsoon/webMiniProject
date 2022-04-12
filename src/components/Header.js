import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Logo, Button, Input, Grid } from "../elements/index.js";
import { getCookie } from "../shared/cookie";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
	const { history } = props;
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const token = getCookie("token");
  
	
	const is_login = useSelector((state) => state.user.is_login);
	
	if(is_login){
		return(
			<React.Fragment>
				<HeaderContainer>
					<Logo {...props} />
					{/* <Button
						bg="red"
						width="90px"
						text="프로필"
					// _onClick={goProfile}
					/> */}
					<Button
						bg="#efefef"
						width="90px"
						text="로그아웃"
						_onClick={() => {
						dispatch(userActions.logOutApi());
						}}
					/>
				</HeaderContainer>
			</React.Fragment>
		)
	}

  return (
    <React.Fragment>
		<HeaderContainer>
			<Logo {...props} />
				<React.Fragment>
						<Button
							bg="#efefef"
							width="90px"
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
							width="90px"
							text="회원가입"
						/>
				</React.Fragment>
		</HeaderContainer>
    </React.Fragment>
  );
};

//   return (
//     <React.Fragment>
//       <HeaderContainer>
//         <Logo {...props} />
//         {!token ? (
//           <React.Fragment>
//               <Button
//                 width="90px"
//                 text="로그인"
//                 _onClick={() => {
//                   props.history.push("/Login");
//                 }}
//               />
//               <Button
//                 _onClick={() => {
//                   //props.history.push("/signup");
//                 }}
//                 width="90px"
//                 text="회원가입"
//               />
//             </React.Fragment>
//             ) : (
//             <React.Fragment>
//               <Button
//                 width="90px"
//                 text="프로필"
//                 // _onClick={goProfile}
//               />
//               <Button
//                 width="90px"
//                 text="로그아웃"
//                 // _onClick={() => {
//                 //   dispatch(userActions.logOutAction({}));
//                 // }}
//               />
//             </React.Fragment>
//             )}
//       </HeaderContainer>
//     </React.Fragment>
//   );
// };

const HeaderContainer = styled.div`
  position: relative; 
  display: flex;
  align-items: stretch;
  justify-content: center; 
  background-color: white;
  width: 100vw; 
  height: 40px;
  margin: 30px auto 30px auto;
  button {
    margin-left: 10px;
    border-radius: 100px;
    color: #797979;
    &:hover {
      border-color: #f69c9c;
      box-shadow: 1px 1px 4px 0px #f4d5d5;
    }
  }
`;

export default Header;
