import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

interface params {
    loggedIn: boolean;
    component: any;
    exact: boolean;
    path: string;
}

export const PublicScreen = ({
    loggedIn,
    component,
    exact,
    path,
    ...rest
}: params) => {
    let Page = component;
    return (
        <Route
            exact={exact}
            path={path}
            render={() => {
                // console.log(JSON.stringify("Public Route " + JSON.stringify(props)));
                return <Page />;
            }}
        />
    );
};
