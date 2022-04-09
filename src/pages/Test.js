import React, { useState } from "react";
import Detail from "../components/Detail";
import { Button } from "../elements";

const Test = (props) => {
    const [modal, setModal] = useState(false)

    return(
        <>
            <Button 
                text="모달"
                _onClick={() => {
                    setModal(true)
                }}
            />
            { modal && <Detail/> }
        </>
    )
}

export default Test;