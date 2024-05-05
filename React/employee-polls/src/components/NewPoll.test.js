import {fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import {BrowserRouter} from "react-router-dom";
import NewPoll from  "./NewPoll";
describe("NewPoll", () => {
    it("NewPoll page should be rendered",() => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll/>
                </BrowserRouter>
            </Provider>
        );
        screen.debug();
    });

    it("NewPoll submit success",() => {
        store.dispatch = jest.fn();
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll/>
                </BrowserRouter>
            </Provider>
        );
        const optionOneInput = component.getByTestId("optionOne");
        const optionTwoInput = component.getByTestId("optionTwo");
        const submitButton = component.getByTestId("submit");
        expect(optionOneInput).toBeInTheDocument();
        expect(optionTwoInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.change(optionOneInput, {target: {value: 'Option One'}});
        fireEvent.change(optionTwoInput, {target: {value: 'Option Two'}});
        fireEvent.submit(submitButton); 
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});