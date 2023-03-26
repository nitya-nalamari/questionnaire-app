import React from "react";

import { Switch, Typography, Stack, FormHelperText } from "@mui/material";


export default function SwitchInput(props){
    const key = props.currentQuestionOptions["key"];
    const initialValue = JSON.parse(localStorage.getItem(key));
    const [checked, setChecked] = React.useState(initialValue);
    const required = props.currentQuestionOptions["required"] === "yes" ? true : false;

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(checked));
    },[checked]);

    return (
    <>
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography id="no">No</Typography>
                <Switch id="switch-input" checked={checked} onChange={(event) => {setChecked(event.target.checked)}} />
            <Typography id="yes">Yes</Typography>
        </Stack>
        {required ? <FormHelperText data-testid="helper-text">Required</FormHelperText> : <></>}
    </>);
}