import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { yellow, grey } from "@material-ui/core/colors";

import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 500,
    backgroundColor: grey[100],
   // margin: "10px 25px 50px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: grey[300],
    width: theme.spacing(7),
    height: theme.spacing(6),
    fontSize: 18,
    fontWeight: 700,
  },
  height: {
    height: 100,
    margin: 5,
  },
}));

const Post = React.memo((props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
      <Card className={classes.root} margin="">
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              variant="circular"
              className={classes.avatar}
            >
              {props.user_info.user_profile.Image}
            </Avatar>
          }
          title={
            <Text margin="0px 10px 0px 3px" size="17px" bold>
              {props.user_info.nickname}
            </Text>
          }
        />
        <CardMedia className={classes.media} image={props.image_url} />
        <CardContent>
          <Typography
            variant="body1"
            color="textSecondary"
            component="div"
            overflow="scroll"
            className={classes.height}
          >
            {props.contents}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Text margin="0px 10px 0px 3px" font-size="24px" bold>
            댓글 {props.comment_cnt}개
          </Text>

          <Text margin="0px" bold>
            좋아요 {props.like_cnt}개
          </Text>

          <Button
            _onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              //dispatch(postActions.toggleLikeDB(props.id));
            }}
            is_like={props.is_like}
          ></Button>
        </CardActions>
      </Card>
  );
});



// Post.defaultProps = {
//   nickname: "shane",

//   skill: "React",
//   comment_cnt: 10,
//   like_cnt: 0,
//   is_like: false,
//   contents: "안녕하세요~~!",
// };

Post.defaultProps = {
  user_info: {
    nickname: "Spring",
    user_profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1h9GZH18sUSO-8P_coFOJehZ1KkPo-CUJ2816jM_kaQoascDIj3vWzaBt2wx3X1Wwz8&usqp=CAU",
  },
  image_url:
    "https://c.pxhere.com/photos/cd/46/santorini_oia_greece_aegean_architecture_landscape_tourism_white-947315.jpg!d",
  contents: "반갑습니다",
  comment_cnt: 10,
  modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

// postId: 1,
//       content: "반갑습니다.",
//       modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
//       likeCount: 1,
//       imageUrl:"",
//       userId : 1,
//       nickname: "작성자",
//       comments: [
//           {
//               nickname: "닉네임",
//               commentId: 1,
//               comment: "저도 반가워요:)",
//               modifiedAt: "2022-04-10"
//           },
//       ]


export default Post;
