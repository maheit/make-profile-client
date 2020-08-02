import React, { FC, useContext, useEffect, useState } from "react";
// import ThemeContex from "../theme-provider/ThemeContex";
import "./md-header.css";

type roomElements = React.ReactNode[] | string[] | number[];
interface PropsIf {
    id?: string;
    children?: React.ReactNode[];
    gradient?: boolean;
}

const MdHeader: FC<PropsIf> = (props: PropsIf) => {
    // const consumer = useContext(ThemeContex);
    const [elementKey, setElementKey] = useState<string>(
        `mdsh-${Math.random() * 1000}`
    );
    return (
        <div
            key={elementKey}
            id={props.id!}
            className={"root-static-header"}
            style={{
                background: props.gradient
                    ? "var(--primary-background)"
                    : "var(--primary-color)",
                color: "var(--primary-text)",
                fontFamily: "var(--font-family-1)",
            }}
        >
            <div className={"static-header-container"}>
                <div className={"static-header"}>
                    <div className={"left-conatiner "}>
                        {props.children && props.children[0]}
                    </div>
                    <div className={"right-conatiner "}>
                        {props.children && props.children[1]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MdHeader;
