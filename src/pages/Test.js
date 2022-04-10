import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";

const Test = (props) => {
    const dispatch = useDispatch();
    
    

    
    const postRef = () => {
        dispatch(postActions.getPostEachApi({postId: "123"}));
      
    }

    return(
        <>
            <Button 
                text="게시물"
                _onClick={postRef}
            />
        </>
    )
}

export default Test;