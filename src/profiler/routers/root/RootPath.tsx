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
    }

    render() {
        return (
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
