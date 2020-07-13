import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

interface params {
    loggedIn: boolean;
    component: any;
    exact: boolean;
    path: string;
}
// {loggedIn, component, ...rest}
export const PrivateScreen = (props: params) => {
    let Page = props.component;
    return (
        <Route
            exact={props.exact}
            path={props.path}
            render={() => {
                return props.loggedIn ? (
                    <props.component />
                ) : (
                    <Redirect to="/" />
                );
            }}
        />
    );
};
