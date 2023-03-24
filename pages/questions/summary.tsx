import React from "react";
import { useRouter } from 'next/router';

import { Button, Card, CardHeader, CardActions, Typography, CardContent } from "@mui/material";

import questionData from "../../question-data.json";
import Layout from "../../src/components/layout";

export default function Summary(){

    const router = useRouter();

    const dataToSubmit = questionData.map(record => {
         return {...record, "answers": localStorage ? localStorage.getItem(record.key) : ""}
    });
    
    const handleSubmit = async (): Promise<void> => {
        fetch("/api/submit", {
            body: JSON.stringify(dataToSubmit),
            method: "post",
            headers: {"content-type":"application/json"},
        }).then((result) => {
            console.log(result);
            router.push("/");
        }).catch(error => console.log("Unable to submit data: ", error))

    }

    const answers = questionData.map((record, index)=> {
        
        return (
        <div key={index}>
            <Typography sx={{fontWeight:"bold"}}>
                {record.question}
            </Typography>
            <Typography>
                {localStorage && localStorage.getItem(record.key)}
            </Typography>
            <br />
        </div>)

    });
    return <Layout>
        <Card raised sx={{minWidth: 700}}>
            <CardHeader title={"Below is the summary of the information provided:"}/>
            <CardContent>
                {answers}
            </CardContent>
        <CardActions>
            <Button onClick={() => {router.push(`/questions/${questionData.length}`)}}>Back</Button>
            <Button onClick={handleSubmit}>Submit</Button>
        </CardActions>
        </Card>
    </Layout>;
}