import React from "react";
import * as RTL from "@testing-library/react";
import SelectAnInput from "../components/select-an-input";

const mockDataRequired = {
    "id": "2",
    "key":"age",
    "question": "What is your age range?",
    "type": "select",
    "required": "yes",
    "options": ["0-9","10-19"]
};

const mockDataNotRequired = {
    "id": "2",
    "key":"age",
    "question": "What is your age range?",
    "type": "select",
    "required": "no",
    "options": ["0-9","10-19"]
};


test("Age is required", async () => {
    await RTL.render(
        <SelectAnInput currentQuestionOptions={mockDataRequired} setDisabled={true}/>
    );
    expect(RTL.screen.getByTestId("age-label").innerHTML).toBe(" Age *");
    expect(RTL.screen.getByTestId("helper-text").innerHTML).toBe("Required");
})

test("Age is not required", async () => {
  
   
    await RTL.render(
        <SelectAnInput currentQuestionOptions={mockDataNotRequired} setDisabled={false}/>
    );
    expect(RTL.screen.getByTestId("age-label").innerHTML).toBe(" Age ");
    
})