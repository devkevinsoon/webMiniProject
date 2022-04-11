import React from "react";
import styled from "styled-components"

import { Grid } from "./index";

const Input = (props) => {
    const { 
      placeholder, 
      label, 
      type, 
      _onChange, 
      value, 
      multiLine, 
      id,
      width, 
    } = props;

    const style = {
      width,
    }
   
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
              <ElInput 
                {...style}
                id={id}
                type= {type}
                placeholder={placeholder}
                onChange={_onChange}
              />
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
    width: "100%",
    _onChange: () => {},
}

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: ${props => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
  font-size: 18px;
  &::placeholder{
      font-size: 18px;
  }
`;

const ElInput = styled.input`
    border: none;
    border-bottom: 2px solid lightgray;
    width: ${props => props.width};
    outline: none;
    padding: 8px 4px;
    font-size: 18px;
    &::placeholder{
      font-family: 'Nanum Myeongjo', serif;
      font-size: 14px;
      color: #90a4ae;
    }
    &:hover, :focus{
        border-bottom: 2px solid #f48fb1;
    }
`;


export default Input;