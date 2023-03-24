import React from "react";

import { MenuItem, Select, FormHelperText, InputLabel } from "@mui/material";

export default function SelectAnInput(props) {
    
    const key = props.currentQuestionOptions["key"];
    const [value, setValue] = React.useState(localStorage.getItem(key));
    const required = props.currentQuestionOptions["required"] === "yes" ? true : false;

    React.useEffect(() => {
        if(required && value == null) props.setDisabled(true);
        localStorage.setItem(key, value);
    }, [value]);

    const optionItems = props.currentQuestionOptions["options"].map((record,index) => { return <MenuItem key={index} value={index}>
    {record}
    </MenuItem>});
    return (
        <>
            <InputLabel> Age {required ? "*" : ""}</InputLabel>
            <Select sx={{width:100}} value={value} onChange={
                (event) => {
                    if(event.target.value == null) {
                            props.setDisabled(true);
                        } 
                        else {
                            setValue(event.target.value); props.setDisabled(false)
                        }
                    }}>
                {optionItems}
            </Select>
            {required ? <FormHelperText>Required</FormHelperText> : <></>}
        </>
    );
}