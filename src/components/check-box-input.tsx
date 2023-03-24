import React from "react";

import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";

export default function CheckBoxInput(props){

    const key = props.currentQuestionOptions["key"];
    const initialValues = JSON.parse(localStorage.getItem(key));
    const required = props.currentQuestionOptions["required"] === "yes" ? true : false;
    const [checked, setChecked] = React.useState(initialValues);

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(checked));
    },[checked])

    const checkboxOptions = props.currentQuestionOptions["options"].map((record, index) => {
        return (
        <>
            <FormControlLabel key={record} name={record} control={<Checkbox key={index} checked={checked[record]} onChange={(event) => {
                setChecked({...checked, [event.target.name]: event.target.checked})}}/>} label={record} />
            <br/>
        </>);
    } );

    return <>
        {checkboxOptions}
        {required ? <FormHelperText>Required</FormHelperText> : <></>}
    </>;
}