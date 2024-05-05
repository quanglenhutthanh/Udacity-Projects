import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import reducers from './reducers';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from "react-router-dom";


describe("App", () => {
    it("Render App", () => {
        const store = configureStore({reducer:reducers});
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });
});
