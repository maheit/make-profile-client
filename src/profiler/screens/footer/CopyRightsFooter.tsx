import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
interface CopyRightsFooterIF {}

const useStyle = makeStyles(() => ({
    footerRowHeight: {
        fontFamily: "Roboto",
        height: "auto",
        padding: 8,
        fontSize: 14,
        filter: "hue-rotate(35deg)",
        color: "var(--primary-text)",
        backgroundColor: "var(--primary-color)",
        "& a": {
            textDecoration: "none",
            color: "var(--primary-text)",
            transition: "1s",
            "& :hover": {
                textDecoration: "none",
                color: "var(--primary-text)",
                fontSize: 18,
            },
        },
    },
}));

const CopyRightsFooter: FC<CopyRightsFooterIF> = (
    props: CopyRightsFooterIF
) => {
    const classes = useStyle();
    return (
        <div className={`row ${classes.footerRowHeight}`}>
            <div className={`col-md-6`}>
                <div
                    className="d-flex justify-content-center align-items-center h-100"
                    style={{}}
                >
                    <a href="mailto:maheitdev@gmail.com">maheitdev@gmail.com</a>
                </div>
            </div>
            <div className={`col-md-6`}>
                <div
                    className="d-flex justify-content-center align-items-center h-100"
                    style={{}}
                >
                    &copy; 2020 MaheITDev Team.{" "}
                    <i style={{ marginLeft: 4 }}>All Rights Reserved.</i>
                </div>
            </div>
        </div>
    );
};

export default CopyRightsFooter;
