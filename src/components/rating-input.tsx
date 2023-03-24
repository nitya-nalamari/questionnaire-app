import React from "react";

import { Rating, FormHelperText } from "@mui/material";

export default function RatingInput(props){
  const key = props.currentQuestionOptions["key"];  
  const initialValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = React.useState(initialValue);
  const required = props.currentQuestionOptions["required"] === "yes" ? true : false;

  React.useEffect(() => {
    if(required && value == null) props.setDisabled(true);
    localStorage.setItem(key, JSON.stringify(value));
  },[value]);

    return(
    <>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          if(newValue == null){
            props.setDisabled(true);
          }
          else{
            setValue(newValue);
            props.setDisabled(false);
          }
        }}
        precision={0.5}
        />
      {required ? <FormHelperText>Required</FormHelperText> : <></>}
    </>);
}