import React from "react";
import * as RTL from "@testing-library/react";
import RadioInput from "../components/radio-input";

const mockDataRequired = {
    "id":"4",
    "key":"location",
    "question": "Do you live in Toronto?",
    "type": "radio",
    "options": ["Yes","No"],
    "required": "yes" 
};


test("Location is required", async () => {
    await RTL.render(
        <RadioInput currentQuestionOptions={mockDataRequired} setDisabled={true}/>
    );
    
    expect(RTL.screen.getByTestId("helper-text").innerHTML).toBe("Required");
   
})