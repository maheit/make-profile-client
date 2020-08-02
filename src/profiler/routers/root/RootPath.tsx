import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { PrivateScreen } from "../PrivateScreen";
import { PublicScreen } from "../PublicScreen";

import PublicScreenList from "./PublicPathList";
import { RootState } from "../../store/redux/redux-store";
import { AnyAction } from "redux";
import PrivateScreenList from "./PrivatePathList";

// import CircleRoutate from "components/loaders/circle-rotate/CircleRotate";
import { CircleRotateLoader } from "components/md/Components";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Colors from "../../../colors/colors";
// import { ThemeMaker } from "components/md/Components";

const ThemeColors: any = {
    primary: {
        color: `${Colors["BLUE"]["5"]}`,
        text: "white",
    },
    secondary: {
        color: `${Colors["TEAL"]["5"]}`,
        text: "white",
    },
    style: {
        background: `linear-gradient(45deg, ${Colors["BLUE"]["5"]} 20%, ${Colors["TEAL"]["5"]} 90%)`,
    },
};

const theme = createMuiTheme({
    palette: {
        primary: {
            main: ThemeColors.primary.color,
        },
        secondary: {
            main: ThemeColors.secondary.color,
        },
    },
    typography: {
        fontFamily: '"Times New Roman", Times, serif',
    },
});

interface Props {
    loggedIn: boolean;
}

interface OwnState {
    isValidated: boolean;
}

class RootPath extends Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isValidated: false,
        };
    }
    componentWillMount() {
        this.setState({ isValidated: true });
        this.setTheme();
    }

    setTheme = () => {
        const doc = document.documentElement;
        doc.style.setProperty(
            "--primary-color",
            `${ThemeColors.primary.color}`
        );
        doc.style.setProperty("--primary-text", `${ThemeColors.primary.text}`);
        doc.style.setProperty(
            "--primary-background",
            `${ThemeColors.style.background}`
        );
        // doc.style.setProperty("--secondary-color", `${ThemeColors.primary.color}`)
        // doc.style.setProperty("--secondary-text", `${ThemeColors.primary.color}`)

        //     --primary-color: #651af0;
        // --primary-text: #ffffff;
        // --secondary-color: #d8128c;
        // --secondary-text: #ffffff;
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                {/* <ThemeMaker
                    theme={{
                        primaryTheme: {
                            background: `linear-gradient(45deg, ${Colors["BLUE"]["5"]} 20%, ${Colors["TEAL"]["5"]} 90%)`,
                            color: "#ffffff",
                            backgroundColor: ThemeColors.primary.color,
                        },
                        primary: {
                            color: ThemeColors.primary.color,
                            text: ThemeColors.primary.text,
                        },
                    }}
                > */}
                <div className={"root-container"}>
                    <Router>
                        {this.state.isValidated ? (
                            <Switch>
                                {PrivateScreenList.map((path) => {
                                    return (
                                        <PrivateScreen
                                            exact={path.exact}
                                            loggedIn={this.props.loggedIn}
                                            path={path.path}
                                            component={path.component}
                                            key={path.path}
                                        />
                                    );
                                })}
                                {PublicScreenList.map((path) => {
                                    return (
                                        <PublicScreen
                                            exact={path.exact}
                                            loggedIn={this.props.loggedIn}
                                            path={path.path}
                                            component={path.component}
                                            key={path.path}
                                        />
                                    );
                                })}
                            </Switch>
                        ) : (
                            <div>
                                <CircleRotateLoader
                                    id="root-loader"
                                    canvasWidth={window.innerWidth}
                                    canvasHeight={window.innerHeight}
                                    isFullScreen={true}
                                ></CircleRotateLoader>
                            </div>
                        )}
                    </Router>
                </div>
                {/* </ThemeMaker> */}
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPath);
