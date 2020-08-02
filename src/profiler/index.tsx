import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../styles/main.scss";
import configStore from "./store/redux/redux-store";
import ScreenRouter from "./routers/root/RootPath";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Colors from "../colors/colors";
import { ThemeMaker } from "components/md/Components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <ScreenRouter />
    </Provider>,
    document.getElementById("root")
);
