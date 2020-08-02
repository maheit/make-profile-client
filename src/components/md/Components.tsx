import React, { FC } from "react";
import CircleRotateLoader from "./loaders/circle-rotate/CircleRotate";
import HeaderStaticBar from "./header/MdHeader";
import ThemeMaker from "./theme-provider/ThemeMaker";
import { MdSliderCycle } from "./img-slider/cycle/MdSliderCycle";
import { MdSliderPropsIF, MdSliderContentIF } from "./img-slider/SliderProps";
import { MdCard } from "./card/MdCard";
import ThemeContex from "./theme-provider/ThemeContex";
export { CircleRotateLoader, ThemeMaker, HeaderStaticBar, ThemeContex };
export { MdSliderCycle, MdSliderPropsIF, MdSliderContentIF };

export { MdCard };
interface PropsIF {
    childrens: React.ReactNode;
}

const MDComponents: FC<PropsIF> = (props: PropsIF) => {
    return <div>{props.childrens}</div>;
};

export default MDComponents;
