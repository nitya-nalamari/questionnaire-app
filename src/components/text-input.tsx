import React from "react";

import { TextField, FormHelperText, InputLabel } from "@mui/material";

export default function TextInput(props) {
    const key = props.currentQuestionOptions["key"];
    const [name, setName] = React.useState(localStorage.getItem(key));
    const required = props.currentQuestionOptions["required"] === "yes" ? true : false;

    React.useEffect(()=>{
        if(required && name === "") props.setDisabled(true);
        localStorage.setItem(key, name);
    },[name]);

    
    return (
     <>
        <InputLabel data-testid="name-label"> Name {required ? "*" : ""}</InputLabel>
        <TextField data-testid="text-input" size="small" onChange={(event)=>{ 
            if(event.target.value === ""){setName(event.target.value); props.setDisabled(true)} 
            else {setName(event.target.value); props.setDisabled(false)}}} value={name || ""}></TextField>
        {required ? <FormHelperText data-testid="helper-text">Required</FormHelperText> : <></>}
     </>
    )
    
}