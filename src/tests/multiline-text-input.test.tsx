import React from "react";
import * as RTL from "@testing-library/react";

import {useRouter} from "next/router";
import {RouterContext} from "next/dist/shared/lib/router-context";

import MultilineTextInput from "../components/multiline-text-input";
import Question from "../../pages/questions/[id]";


const mockDataRequired = {
    "id": "3",
    "key":"work",
    "question": "Explain your work experience briefly.",
    "type": "text",
    "required": "yes"
};

const mockDataNotRequired = {
    "id": "2",
    "key":"name",
    "question": "Explain your work experience briefly.",
    "type": "text",
    "required": "no"
};

jest.mock("next/router", () => ({
    useRouter() {
        return {
            query: {"id": "3"}
        };
    },
}));

test("Job description is required", async () => {
    await RTL.render(
        <MultilineTextInput currentQuestionOptions={mockDataRequired} setDisabled={true}/>
    );
    expect(RTL.screen.getByTestId("multiline-label").innerHTML).toBe(" Briefly *");
    expect(RTL.screen.getByTestId("helper-text").innerHTML).toBe("Required");
})

test("Job description is not required", async () => {
    await RTL.render(
        <MultilineTextInput currentQuestionOptions={mockDataNotRequired} setDisabled={false}/>
    );
    expect(RTL.screen.getByTestId("multiline-label").innerHTML).toBe(" Briefly ");
})

test("Is Next button disabled if job description is required", async() => {
    const router = useRouter();
    await RTL.render(
        <RouterContext.Provider value={router}>
            <Question />
        </RouterContext.Provider>
    );
    expect(RTL.screen.getByTestId("next-button")).toBeDisabled;
})