import { store } from "../store";
import { Provider } from "react-redux";
import {fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import LeaderBoard from "./LeaderBoard";

describe("LeaderBoard", () => {
    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <LeaderBoard/>
            </BrowserRouter>
        </Provider>
    );
    it("LeaderBoard should be rendered",() => {
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("Renders a table with four columns",() => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LeaderBoard/>
                </BrowserRouter>
            </Provider>
        );
        const columns = component.getAllByRole("columnheader");
        expect(columns).toHaveLength(4);
    });
});