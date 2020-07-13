import React, { Component } from "react";
import { RootState } from "../../store/redux/redux-store";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { HeaderStaticBar, ThemeMaker } from "components/md/Components";

interface PropsIF {
    loggedIn: boolean;
}
interface OwnStateIf {
    leftRoomElements: React.ReactNode[];
    rightRoomElements: React.ReactNode[];
}

class Index extends Component<PropsIF, OwnStateIf> {
    constructor(props: PropsIF) {
        super(props);
        this.state = {
            leftRoomElements: [],
            rightRoomElements: [],
        };
    }

    componentWillMount() {
        this.formHeaderLeftConainerElement();
        this.formHeaderRightConainerElement();
    }

    formHeaderRightConainerElement = () => {
        const rightContainer: React.ReactNode[] = [];
        const createAccount: React.ReactNode = (
            <div className="flex-row flex-center header-options">
                Create Account
            </div>
        );
        rightContainer.push(createAccount);

        const login: React.ReactNode = (
            <div className="flex-row flex-center header-options">Login</div>
        );
        rightContainer.push(login);
        this.setState({
            rightRoomElements: rightContainer,
        });
    };

    formHeaderLeftConainerElement = () => {
        const leftContainer: React.ReactNode[] = [];
        const title: React.ReactNode = (
            <div className="header-title flex-col flex-center ">
                MakeProfile
            </div>
        );
        leftContainer.push(title);
        const searchbar: React.ReactNode = <input type="text" />;
        leftContainer.push(searchbar);
        this.setState({
            leftRoomElements: leftContainer,
        });
    };

    render() {
        return (
            <ThemeMaker theme={{}}>
                <HeaderStaticBar
                    leftRoom={this.state.leftRoomElements}
                    rightRoom={this.state.rightRoomElements}
                >
                    {" "}
                </HeaderStaticBar>
            </ThemeMaker>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: OwnStateIf) => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {};
};

export default connect(mapStateToProps)(Index);
