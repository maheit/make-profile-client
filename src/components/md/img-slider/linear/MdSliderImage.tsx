import React, { FC, useRef } from "react";

interface MdSliderImagePropsIf {
    image: HTMLImageElement;
    index: number;
    setActiveRef: (ref: any) => void;
}

const MdSliderImage: FC<MdSliderImagePropsIf> = (
    props: MdSliderImagePropsIf
) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    return (
        <img
            src={String(Node)}
            ref={imgRef}
            key={`${props.index}`}
            className="md-slider-cycle-img"
        />
    );
};
