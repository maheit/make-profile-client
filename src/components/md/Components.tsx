import React, { FC } from "react";
import CircleRotateLoader from "./loaders/circle-rotate/CircleRotate";
import HeaderStaticBar from "./header/MdHeader";
import ThemeMaker from "./theme-provider/ThemeMaker";
export { CircleRotateLoader, ThemeMaker, HeaderStaticBar };

interface PropsIF {
    childrans: React.ReactNode;
}

const MDComponents: FC<PropsIF> = (props: PropsIF) => {
    return <div>{props.childrans}</div>;
};

export default MDComponents;
