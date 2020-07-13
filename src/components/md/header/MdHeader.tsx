import React, { FC, useContext, useEffect, useState } from "react";
import ThemeContex from "../theme-provider/ThemeContex";
import "./md-header.css";

type roomElements = React.ReactNode[] | string[] | number[];
interface PropsIf {
    leftRoom: roomElements;
    rightRoom: roomElements;
    id?: string;
}

const MdHeader: FC<PropsIf> = (props: PropsIf) => {
    const consumer = useContext(ThemeContex);
    const [leftElements, setLeftElements] = useState<roomElements>(
        props.leftRoom
    );
    const [rightElements, setRightElements] = useState<roomElements>(
        props.rightRoom
    );
    const [elementKey, setElementKey] = useState<string>(
        `mdsh-${Math.random() * 1000}`
    );
    // const [elementId, setElementId] = useState<string>( () => {
    //     return props.id
    // });
    useEffect(() => {}, []);
    return (
        <div
            key={elementKey}
            id={props.id!}
            className={"root-static-header"}
            style={{
                backgroundColor: consumer.theme.error.color,
                color: consumer.theme.primary.text,
                fontFamily: consumer.theme.style.fontFamily,
            }}
        >
            <div className={"static-header-container"}>
                <div className={"left-conatiner "}>{props.leftRoom}</div>
                <div className={"right-conatiner "}>{props.rightRoom}</div>
            </div>
        </div>
    );
};

export default MdHeader;
