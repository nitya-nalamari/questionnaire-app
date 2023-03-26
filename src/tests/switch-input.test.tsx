import React from "react";
import * as RTL from "@testing-library/react";
import SwitchInput from "../components/switch-input";

const mockDataRequired = {
    "id": "6",
    "key":"feedback",
    "question":"Did you like the questionnaire?",
    "type":"switch",
    "required": "yes"
};


test("Feedback is required", async () => {
    await RTL.render(
        <SwitchInput currentQuestionOptions={mockDataRequired} setDisabled={true}/>
    );
    
    expect(RTL.screen.getByTestId("helper-text").innerHTML).toBe("Required");
});