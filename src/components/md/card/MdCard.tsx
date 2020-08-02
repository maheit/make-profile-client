import React, {
    FC,
    useEffect,
    useContext,
    CSSProperties,
    useState,
} from "react";
import "./md-card.css";
// import ThemeContex from "../theme-provider/ThemeContex";

interface MdCardIF {
    id: string;
    children: React.ReactNode;
    lineWidth?: number;
    classes?: string;
    style?: CSSProperties;
    top?: boolean;
    left?: boolean;
    bottom?: boolean;
    right?: boolean;
}

export const MdCard: FC<MdCardIF> = (props: MdCardIF) => {
    const { left, right, bottom, top, lineWidth } = props;
    // const context = useContext(ThemeContex);
    const [linePosition, setLinePosition] = useState<string>();
    // useEffect(() => {
    //     const cardRoot: any = document.getElementById(props.id);

    //     cardRoot.style.setProperty(
    //         "--background-color",
    //         `${context.theme.primaryTheme.backgroundColor}`
    //     );
    // }, []);

    useEffect(() => {
        if (lineWidth) {
            const cardRoot: any = document.getElementById(props.id);
            cardRoot.style.setProperty("--size", `${lineWidth}px`);
        }
    }, [lineWidth]);

    useEffect(() => {
        let positionClass = "";
        if (left) {
            positionClass += " left";
        }
        if (right) {
            positionClass += " right";
        }
        if (bottom) {
            positionClass += " bottom";
        }
        if (top) {
            positionClass += " top";
        }
        setLinePosition(positionClass);
    }, [left, right, bottom, top]);

    return (
        <div
            id={props.id}
            key={props.id}
            className={`md-card-root ${linePosition} ${props.classes}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};
