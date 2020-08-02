import React, { FC, useMemo } from "react";
import { MdSliderCycle, MdSliderContentIF } from "components/md/Components";
import MacbookProWork from "../../../asset/images/slider/macbook-pro-work.jpg";
import PersonPlayingChess from "../../../asset/images/slider/person-playing-chess.jpg";
import profileAccount from "../../../asset/svg/profile.svg";
import digitalResume from "../../../asset/svg/resume.svg";

interface SliderIF {
    height: string;
}

const Slider: FC<SliderIF> = (props: SliderIF) => {
    const sliderImages: MdSliderContentIF[] = useMemo(() => {
        return [
            {
                image: profileAccount,
                headerText: "Profiler - Free online Resume Builder.",
                subHeaderText:
                    "Create your Profile and Resume Online - Fast & Easy",
            },
            {
                image: MacbookProWork,
                headerText: "Get a Portfolio website.",
                subHeaderText: "Show your talent in Digital Platform.",
            },
            {
                image: digitalResume,
                headerText: "Download Resume.",
                subHeaderText:
                    "Get your professional resume online -Just a Click.",
            },
            {
                image: PersonPlayingChess,
                headerText: "Work Smart, Get Things Done.",
                subHeaderText: "Land your dream job.",
            },
        ];
    }, []);
    return (
        <div style={{ position: "relative", height: props.height }}>
            <MdSliderCycle
                contents={sliderImages}
                indicator={true}
                height={props.height}
            />
        </div>
    );
};

export default Slider;
