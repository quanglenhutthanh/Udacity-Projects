import {fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import {BrowserRouter} from "react-router-dom";
import Login from  "./Login";
describe("Login", () => {
    it("Login should be rendered",() => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );
        screen.debug();
    });

    it("User submit login form",() => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );
        const usernameInput = component.getByTestId("username");
        const passwordInput = component.getByTestId("password");
        const submitButton = component.getByTestId("submit");
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.change(usernameInput, {target: {value: 'sarahedo'}});
        fireEvent.change(passwordInput, {target: {value: 'password123'}});
        fireEvent.submit(submitButton); 
        expect(usernameInput.value).toBe("");
        expect(passwordInput.value).toBe("");
    });
});