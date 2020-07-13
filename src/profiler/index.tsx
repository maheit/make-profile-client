import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../styles/main.scss";
import configStore from "./store/redux/redux-store";
import ScreenRouter from "./routers/root/RootPath";

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <div className={"root-container"}>
            <ScreenRouter />
        </div>
    </Provider>,
    document.getElementById("root")
);
