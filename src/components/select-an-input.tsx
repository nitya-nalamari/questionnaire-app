import React from "react";

import { MenuItem, Select, FormHelperText, InputLabel } from "@mui/material";

export default function SelectAnInput(props) {
    
    const key = props.currentQuestionOptions["key"];
    const [value, setValue] = React.useState(localStorage.getItem(key) || "");
    const required = props.currentQuestionOptions["required"] === "yes" ? true : false;

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);

    const optionItems = props.currentQuestionOptions["options"].map((record,index) => { return <MenuItem defaultValue="" key={index} value={index}>
    {record}
    </MenuItem>});
    return (
        <>
            <InputLabel data-testid="age-label"> Age {required ? "*" : ""}</InputLabel>
            <Select defaultValue="" sx={{width:100}} value={value || ""} onChange={
                (event) => {
                    if(event.target.value == "") {
                            props.setDisabled(true);
                        } 
                        else {
                            setValue(event.target.value); props.setDisabled(false);
                        }
                    }}>
                {optionItems || []}
            </Select>
            {required ? <FormHelperText data-testid="helper-text">Required</FormHelperText> : <></>}
        </>
    );
}