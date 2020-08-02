import React, { FC, useContext } from "react";
import { MdCard } from "../../../components/md/Components";
import { makeStyles } from "@material-ui/core";
import colors from "../../../colors/colors";
import ListAltIcon from "@material-ui/icons/ListAlt";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Chip, Avatar } from "@material-ui/core";

interface IntroSectionProps {}

const useStyle = makeStyles(() => ({
    profilerIntroHeader: {
        fontFamily: '"Times New Roman", Times, serif',
        color: `var(--primary-color)`,
    },
    profilerIntroPara: {
        fontFamily: "Roboto",
        fontSize: 14,
        listStylePosition: "inside",
        color: `${colors["GREY"]["7"]}`,
    },
    padding: {
        padding: "12px 12px 24px",
    },
    contactSupportIcon: {
        right: "-50%",
        top: "-32%",
        zIndex: -1,
        height: "142%",
        color: "var(--primary-color)",
        width: "100%",
        opacity: "0.7",
    },
    serviceList: {
        fontSize: 16,
        listStylePosition: "inside",
        color: `${colors["GREY"]["8"]}`,
        listStyle: "none",
        "& > li": {
            margin: "8px",
        },
    },
    letsConnectTag: {
        padding: 16,
        fontSize: 18,
        margin: "8px  2px",
    },
}));

const IntroSection: FC<IntroSectionProps> = (props: IntroSectionProps) => {
    const classes = useStyle();
    return (
        <div>
            <div className={`${classes.padding} container`}>
                <div className={`row`}>
                    <div className={"col-md-6"}>
                        <MdCard
                            lineWidth={10}
                            left={true}
                            id={"what-resume"}
                            style={{ padding: "12px" }}
                        >
                            <div>
                                <h3
                                    className={`${classes.profilerIntroHeader}`}
                                >
                                    <ListAltIcon
                                        style={{
                                            width: "2rem",
                                            height: "4rem",
                                            margin: "-10px 4px 0",
                                        }}
                                    />
                                    Why you need a Resume
                                </h3>
                                <p className={`${classes.profilerIntroPara}`}>
                                    The resume is anything that shows your
                                    talents and skills to other people. It
                                    simply represents you instead of your
                                    physical appearance. It includes all the
                                    jobs you have held, as well as a list of
                                    skills that you have developed throughout
                                    your career and education. But, the resume
                                    is not your biography.
                                </p>
                            </div>
                        </MdCard>
                    </div>
                    <div className={"col-md-6"}>
                        <MdCard
                            id={"we-resume"}
                            lineWidth={10}
                            left={true}
                            style={{ padding: "12px" }}
                        >
                            <div>
                                <h3
                                    className={`${classes.profilerIntroHeader}`}
                                >
                                    <RecentActorsIcon
                                        style={{
                                            width: "2rem",
                                            height: "4rem",
                                            margin: "-10px 4px 0",
                                        }}
                                    />
                                    We help you to build professional Resume
                                </h3>
                                <ul className={`${classes.profilerIntroPara}`}>
                                    <li>
                                        Dont waste time on align your resume
                                        template
                                    </li>
                                    <li>
                                        Just enter your details in form, get
                                        your resume with in 10 min
                                    </li>
                                    <li>
                                        In addition You can get free portfolio
                                        site{" "}
                                    </li>
                                    <li>We provide unique QR code for you</li>
                                    <li>
                                        It simple and easy. Get start now. Get
                                        Your dream job
                                    </li>
                                </ul>
                            </div>
                        </MdCard>
                    </div>
                </div>
            </div>
            <div>
                <div className={`row overflow-hidden`}>
                    <div className={"col-md-6"}>
                        <ContactSupportIcon
                            className={`position-absolute ${classes.contactSupportIcon}`}
                        />
                        <div className={`d-md-flex justify-content-md-start`}>
                            <div style={{ margin: "12px 8px 12px 5%" }}>
                                <h2
                                    className={`${classes.profilerIntroHeader}`}
                                >
                                    Contact US
                                </h2>
                                <ul className={`${classes.serviceList}`}>
                                    <li>Data Analyticts</li>
                                    <li>Website Developments</li>
                                    <li>Software Services</li>
                                    <li>Queries</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div
                            className={`d-flex justify-content-center align-items-center`}
                            style={{ height: "100%" }}
                        >
                            <Chip
                                label="Let's Connect with US"
                                clickable
                                color="primary"
                                variant="outlined"
                                className={classes.letsConnectTag}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
