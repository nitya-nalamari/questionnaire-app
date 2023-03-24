import React from "react";
import Layout from '../../src/components/layout'
import { useRouter } from 'next/router';

import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';

import TextInput from "../../src/components/text-input";
import MultilineTextInput from "../../src/components/multiline-text-input";
import SelectAnInput from "../../src/components/select-an-input";
import RadioInput from '../../src/components/radio-input';
import CheckBoxInput from '../../src/components/check-box-input';
import SwitchInput from '../../src/components/switch-input';
import RatingInput from '../../src/components/rating-input';

import questionData from "../../question-data.json";


export default function Question(){
    const router = useRouter();
    const id = router.query.id as string;
    const currentQuestion = questionData.find(record => record.id === id);

    const [disabled, setDisabled] = React.useState(false);
   
    function getPreviousRoute(){
        if(id === "1"){
            router.push("/");
        }
        else {
            router.push(`/questions/${parseInt(id) - 1}`);
        }
    }

    function getNextRoute(){
        if(id === questionData.length.toString()){
            router.push("/questions/summary");
        }
        else {
            router.push(`/questions/${parseInt(id) + 1}`);
        }
    }

    function getInputType(currentQuestion){
        switch(currentQuestion.type) {
            case "text":
                return <TextInput currentQuestionOptions={currentQuestion} setDisabled={setDisabled}/>;
            case "multiline":
                return <MultilineTextInput currentQuestionOptions={currentQuestion} setDisabled={setDisabled}/>;
            case "select":
                return <SelectAnInput currentQuestionOptions={currentQuestion} setDisabled={setDisabled}/>
            case "radio":
                return <RadioInput currentQuestionOptions={currentQuestion} setDisabled={setDisabled}></RadioInput>
            case "checkbox":
                return <CheckBoxInput currentQuestionOptions={currentQuestion} setDisabled={setDisabled}></CheckBoxInput>
            case "switch":
                return <SwitchInput currentQuestionOptions={currentQuestion} setDisabled={setDisabled}></SwitchInput>
            case "rating":
                return <RatingInput currentQuestionOptions={currentQuestion} setDisabled={setDisabled}></RatingInput>
            default:
                return <></>;
        }
    }
  
    return(
        <Layout>
            <Card raised>
            <CardHeader title={currentQuestion && currentQuestion.question} />
            <CardContent>{currentQuestion && getInputType(currentQuestion)}</CardContent>
            <CardActions>            
                <Button onClick={getPreviousRoute}>Back</Button>
                <Button onClick={getNextRoute} disabled={disabled}>Next</Button>
                </CardActions>
            </Card>
        </Layout>
    );
}