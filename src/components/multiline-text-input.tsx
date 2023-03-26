import React from "react";

import { TextField, FormHelperText, InputLabel } from "@mui/material";

export default function MultilineTextInput(props) {
    const key = props.currentQuestionOptions["key"];
    const [value, setValue] = React.useState(localStorage.getItem(key));
    const required = props.currentQuestionOptions["required"] === "yes" ? true : false;

    React.useEffect(() => {
        if(required && value === "") props.setDisabled(true);
        localStorage.setItem(key, value);
    },[value])
    return (
    <>
        <InputLabel data-testid="multiline-label"> Briefly {required ? "*" : ""}</InputLabel>
        <TextField multiline sx={{width:550}} onChange={(event) => {if(event.target.value === "") {
                        setValue(event.target.value); props.setDisabled(true);
                        } else {
                            setValue(event.target.value); props.setDisabled(false)}
                    }} value={value || ""}></TextField>
        {required ? <FormHelperText data-testid="helper-text">Required</FormHelperText> : <></>}
    </>);
}