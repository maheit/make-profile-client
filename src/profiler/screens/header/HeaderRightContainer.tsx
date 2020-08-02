import React, { FC } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store/redux/redux-store";
import { UserState } from "../../store/redux/types/auth";

import { Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import Gsign from "../../../asset/svg/icons8-google.svg";

interface HeaderRightContainerIF {
    loggedIn: boolean;
    user: UserState;
}

const useStyle = makeStyles(() => ({
    root: {
        transition: "5s",
        outline: "none !important",
    },
}));

const HeaderRightContainer: FC<HeaderRightContainerIF> = (
    props: HeaderRightContainerIF
) => {
    const classes = useStyle();
    const { loggedIn, user } = props;
    if (loggedIn) {
        return (
            <Avatar alt={user.userName} title={user.userName}>
                <AccountCircleOutlined />
            </Avatar>
        );
    }
    return (
        <Button
            variant="outlined"
            color="inherit"
            size="small"
            className={classes.root}
        >
            <img
                src={String(Gsign)}
                style={{ height: "24px", width: "24px", margin: "0 4px" }}
            />
            Login
        </Button>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        loggedIn: state.auth.loggedIn,
        user: state.auth.user,
    };
};

export default connect(mapStateToProps)(HeaderRightContainer);
