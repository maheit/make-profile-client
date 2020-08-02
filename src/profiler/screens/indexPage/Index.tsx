import React, { Component } from "react";
import { RootState } from "../../store/redux/redux-store";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import Header from "../header/Header";
import Slider from "./Slider";
import LinkDetail from "./LinkDetail";
import IntroSection from "./IntroSection";
import CopyRightsFooter from "../footer/CopyRightsFooter";

interface PropsIF {
    loggedIn: boolean;
}
interface OwnStateIf {}

class Index extends Component<PropsIF, OwnStateIf> {
    constructor(props: PropsIF) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <Slider height={"460px"} />
                <LinkDetail />
                <IntroSection />
                <CopyRightsFooter />
            </>
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
