import React from "react";

import {Radio, RadioGroup, FormControlLabel, FormHelperText} from "@mui/material";

export default function RadioInput(props){
    const key = props.currentQuestionOptions["key"];
    const [value, setValue] = React.useState(localStorage.getItem(key));
    const required = props.currentQuestionOptions["required"] === "yes" ? true : false;

    React.useEffect(() => {
        localStorage.setItem(key, value);
    },[value]);

    const radioOptions = props.currentQuestionOptions["options"].map(record => {return <FormControlLabel key={record} value={record} control={<Radio />} label={record} />});
    return (
        <>
            <RadioGroup value={value} onChange={(event) => {
                if(event.target.value == null) 
                    {
                        props.setDisabled(true);
                    } 
                else 
                    {
                        setValue(event.target.value); 
                        props.setDisabled(false);
                    }
                }}>
                {radioOptions}
            </RadioGroup>
            {required ? <FormHelperText data-testid="helper-text">Required</FormHelperText> : <></>}
        </>
    );
}