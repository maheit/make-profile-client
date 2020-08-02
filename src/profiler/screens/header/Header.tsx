import React, { FC, useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store/redux/redux-store";
import { UserState } from "../../store/redux/types/auth";
import { HeaderStaticBar } from "components/md/Components";

import { formHeaderRightContainer, formHeaderLeftContainer } from "./functions";
import HeaderRightContainer from "./HeaderRightContainer";
import { ThemeMaker } from "components/md/Components";

interface HeaderIF {
    loggedIn: boolean;
    user: UserState;
}

const Header: FC<HeaderIF> = (props: HeaderIF) => {
    const { loggedIn } = props;
    const formHeaderRightConainerElement = useCallback(() => {
        return formHeaderRightContainer(loggedIn);
    }, [loggedIn]);

    const formHeaderLeftConainerElement = useCallback(() => {
        return formHeaderLeftContainer();
    }, []);

    return (
        <HeaderStaticBar gradient={true}>
            {formHeaderLeftConainerElement()}
            <HeaderRightContainer />
        </HeaderStaticBar>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        loggedIn: state.auth.loggedIn,
        user: state.auth.user,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
