import React from "react";
import * as RTL from "@testing-library/react";

import {useRouter} from "next/router";
import {RouterContext} from "next/dist/shared/lib/router-context";

import TextInput from "../components/text-input";
import Question from "../../pages/questions/[id]";



const mockDataRequired = {
    "id": "1",
    "key":"name",
    "question": "What is your full name?",
    "type": "text",
    "required": "yes"
};

const mockDataNotRequired = {
    "id": "1",
    "key":"name",
    "question": "What is your full name?",
    "type": "text",
    "required": "no",
};

jest.mock("next/router", () => ({
    useRouter() {
        return {
            query: {"id": "1"}
        };
    },
}));

test("Name is required", async () => {
    await RTL.render(
        <TextInput currentQuestionOptions={mockDataRequired} setDisabled={true}/>
    );
    expect(RTL.screen.getByTestId("name-label").innerHTML).toBe(" Name *");
    expect(RTL.screen.getByTestId("helper-text").innerHTML).toBe("Required");
})

test("Name is not required", async () => {
  
   
    await RTL.render(
        <TextInput currentQuestionOptions={mockDataNotRequired} setDisabled={false}/>
    );
    expect(RTL.screen.getByTestId("name-label").innerHTML).toBe(" Name ");
    
})

test("Is Next button disabled if name is required", async() => {
        const router = useRouter();
        await RTL.render(
            <RouterContext.Provider value={router}>
                <Question />
            </RouterContext.Provider>
        );
    expect(RTL.screen.getByTestId("next-button")).toBeDisabled;
})