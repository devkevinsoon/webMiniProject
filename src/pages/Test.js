import React from "react";
import { useDispatch } from "react-redux";
import Heart from "../components/Heart";

import { Button, Grid } from "../elements";
import Image from "../elements/Image";
import { actionCreators as postActions } from "../redux/modules/post";

const Test = (props) => {
    const dispatch = useDispatch();
    
    

    
    const postRef = () => {
        dispatch(postActions.getOnePostApi({postId: "123"}));
    }

    return(
        <React.Fragment>
            <Button 
                text="게시물"
                _onClick={postRef}
            />
            <Grid width="300px" margin="50px">
                <Heart>
                    <Image size="10" src="https://user-images.githubusercontent.com/75834421/124404954-0be05f80-dd78-11eb-8048-0a5517211d3e.jpg" shape="rectangle"/>
                </Heart>
            </Grid>
        </React.Fragment>
    )
}

export default Test;