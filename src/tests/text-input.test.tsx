import React from "react";
import * as RTL from "@testing-library/react";

import TextInput from "../components/text-input";

const mockData = {
    "id": "1",
    "key":"name",
    "question": "What is your full name?",
    "type": "text",
    "required": "yes"
};

test("Check validation", async () => {
    await RTL.render(
        <TextInput currentQuestionOptions={mockData} setDisabled={true}/>
    );
  
    expect(RTL.screen.getByTestId("name-label")).toContain("Name *");
})