import { Button, Avatar } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    root: {
        background: "red",
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        color: "white",
        height: 48,
        padding: "0 30px",
    },
}));

export const formHeaderRightContainer = (
    loggedIn: boolean,
    userName: string = ""
) => {
    if (loggedIn) {
        return (
            <Avatar alt={userName} title={userName}>
                <AccountCircleOutlined />
            </Avatar>
        );
    }
    return (
        <Button variant="outlined" color="inherit" size="small">
            Login
        </Button>
    );
};

export const formHeaderLeftContainer = () => {
    return (
        <div
            key={"company-name"}
            className="header-title flex-col flex-center "
        >
            MakeProfile
        </div>
    );
};
