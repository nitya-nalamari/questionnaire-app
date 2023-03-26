import React from "react";
import * as RTL from "@testing-library/react";
import RatingInput from "../components/rating-input";

const mockDataRequired = {
    "id":"7",
    "key":"rating",
    "question": "Please rate us",
    "type": "rating",
    "required": "yes"
};


test("Rating is required", async () => {
    await RTL.render(
        <RatingInput currentQuestionOptions={mockDataRequired} setDisabled={true}/>
    );
    
    expect(RTL.screen.getByTestId("helper-text").innerHTML).toBe("Required");
});