import React, { FC } from "react";
import { makeStyles, Chip, Avatar } from "@material-ui/core";
import { Done } from "@material-ui/icons";

const useStyle = makeStyles(() => ({
    profilerActionRoom: {
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    },
    chipMargin: {
        margin: "8px  2px",
        fontSize: 16,
    },
}));

interface LinkDetailIF {}

const LinkDetail: FC<LinkDetailIF> = (props: LinkDetailIF) => {
    const classes = useStyle();
    return (
        <div
            className={`homepage-details flex-row flex-center ${classes.profilerActionRoom}`}
        >
            <Chip
                label="Create Resume"
                clickable
                color="primary"
                variant="outlined"
                className={classes.chipMargin}
            />
            <Chip
                label="Create Portfolio"
                clickable
                color="primary"
                variant="outlined"
                className={classes.chipMargin}
            />
        </div>
    );
};

export default LinkDetail;
