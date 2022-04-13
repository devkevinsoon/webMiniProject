// import React from "react";

// import { Grid, Image, Text, Button } from "../elements";
// import { history } from "../redux/configureStore";
// import { useDispatch } from "react-redux";
// import post, { actionCreators as postActions } from "../redux/modules/post";
// import moment from "moment";
// import styled from "styled-components";
// import ImageWrap from '../components/ImageWrap';

// import Pic1 from "../images/01.jpg";
// import Pic2 from "../images/02.jpg";
// import Pic3 from "../images/03.jpg";
// import Pic4 from "../images/04.jpg";
// import Pic5 from "../images/05.jpg";
// import Pic6 from "../images/06.jpg";
// import Pic7 from "../images/07.jpg";


// const Post = React.memo((props) => {
//   const dispatch = useDispatch();
//   //const classes = useStyles();

//   return (
//     <Wrap>
//       {/* <Figure>
//         <Img src={Pic1}/>
//         <Figcaption>
//           Cinderella wearing European fashion of the mid-1860’s
//         </Figcaption>
//       </Figure>

//       <Figure>
//         <Img src={Pic2} />
//         <Figcaption>Rapunzel, clothed in 1820’s period fashion</Figcaption>
//       </Figure>

//       <Figure>
//         <Img src={Pic3} />
//         <Figcaption>Belle, based on 1770’s French court fashion</Figcaption>
//       </Figure>

//       <Figure>
//         <Img src={Pic4} />
//         <Figcaption>Mulan, based on the Ming Dynasty period</Figcaption>
//       </Figure>

//       <Figure>
//         <Img src={Pic5} />
//         <Figcaption>Mulan, based on the Ming Dynasty period</Figcaption>
//       </Figure>

//       <Figure>
//         <Img src={Pic6} />
//         <Figcaption>Mulan, based on the Ming Dynasty period</Figcaption>
//       </Figure>

//       <Figure>
//         <Img src={Pic7} />
//         <Figcaption>Mulan, based on the Ming Dynasty period</Figcaption>
//       </Figure> */}

//       {/* <Figure>
//         <Img src={props.imageUrl} />
//         <Figcaption>{props.content}</Figcaption>
//       </Figure> */}

//     </Wrap>
//   );
// });


// // const Wrap = styled.div`
// //   column-width: 320px;
// //   column-gap: 15px;
// //   width: 900%;
// //   max-width: 1100px;
// //   margin: 50px auto ;
// // `;

// // const Figure = styled.div`
// //   display: inline-block;
// //   border:1px solid rgba(0,0,0,0.2);
// //   margin:0;
// //   margin-bottom: 15px;
// //   padding:10px;
// //   box-shadow: 2px 5px 5px rgba(0,0,0,0.5);
// //   filter: grayscale(0.8); 
// //   &:hover { filter: none; }
// // `;

// // const Img = styled.img`
// //   width: 100%
// // `;

// // const Figcaption = styled.div`
// //   font-size: .9rem;
// //   color: #444;
// //   line-height: 1.5;
// // `;





// // Post.defaultProps = {
// //  list : {
// //     nickname: "Spring",
// //   },
// //   image_url:
// //     // "https://c.pxhere.com/photos/cd/46/santorini_oia_greece_aegean_architecture_landscape_tourism_white-947315.jpg!d",
// //     "https://pbs.twimg.com/media/DennlYdV4AAkkQo?format=jpg&name=medium",
// //   content: "The API documentation of the CardMedia React component. Learn more about the props and the CSS customization pointss",
// //   comment_cnt: 10,
// //   modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
// // };

// // postId: 1,
// //       content: "반갑습니다.",
// //       modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
// //       likeCount: 1,
// //       imageUrl:"",
// //       userId : 1,
// //       nickname: "작성자",
// //       comments: [
// //           {
// //               nickname: "닉네임",
// //               commentId: 1,
// //               comment: "저도 반가워요:)",
// //               modifiedAt: "2022-04-10"
// //           },
// //       ]


// export default Post;
