import React from "react";
import styled from "styled-components"

import { Grid } from "./index";

const Input = (props) => {
    const { placeholder, label, type, _onChange, value, multiLine, id } = props;

    if(multiLine){
        return (
          <Grid>
            {/* {label && <Text margin="0px">{label}</Text>} */}
            <ElTextarea
              rows={5}
              value={value}
              placeholder={placeholder}
              onChange={_onChange}
            ></ElTextarea>
          </Grid>
        );
      }

    return(
        <React.Fragment>
              <ElInput id={id} type= {type} placeholder={placeholder} onChange={_onChange}/>
        </React.Fragment>
    )
}

Input.defaultProps = {
    placeholder: null,
    label: null,
    type: "text",
    value: '',
    multiLine: false,
    id: null,
    _onChange: () => {},
}

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  font-size: 18px;
  &::placeholder{
      font-size: 18px;
  }
`;

const ElInput = styled.input`
    border: none;
    border-bottom: 1px solid #212121;
    outline: none;
    width: 80%;
    padding: 8px 4px;
    font-size: 18px;
    &::placeholder{
      font-family: 'Nanum Myeongjo', serif;
      font-size: 14px;
      color: #90a4ae;
    }
    &:hover, :focus{
        border-bottom: 2px solid #212121;
    }
`;


export default Input;