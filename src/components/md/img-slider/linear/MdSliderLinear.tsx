import React, { FC, useCallback, useEffect, useState, useContext } from "react";
import "./md-slider-cycle.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ThemeContex from "../../theme-provider/ThemeContex";

interface MdSliderLinearPropsIf {
    images: HTMLImageElement[];
    auto?: {
        duration: number;
    };
    indicator?: boolean;
}

let activeIndexRef = 0;
let slideInterval: any;

const MdSliderLinear: FC<MdSliderLinearPropsIf> = (
    props: MdSliderLinearPropsIf
) => {
    const consumer = useContext(ThemeContex);
    const { auto } = props;
    const [isAutoSlide, setIsAutoSlide] = useState<boolean>(!!auto);
    const [duration, setDuration] = useState<number>(auto ? auto!.duration : 0);
    const [activeIndex, setActiveindex] = useState<number>(0);
    const [isNext, setIsNext] = useState<boolean>(true);
    const [isBefore, setIsBefore] = useState<boolean>(false);
    const addClickAnimation = useCallback((id: string) => {
        const element: HTMLElement | null = document.getElementById(`${id}`);
        const animationName: string = "bubbleanimation";
        if (!element!.className.includes(animationName)) {
            element!.className += ` ${animationName}`;
        }
        setTimeout(() => {
            element!.className = element!.className.replace(animationName, "");
        }, 500);
    }, []);

    const moveSlide = useCallback(
        (isForward: boolean) => {
            const slider: HTMLElement | null = document.getElementById(
                "image-slider"
            );
            if (isForward) {
                const slideWidth = slider!.clientWidth * (activeIndex + 1);
                slider!.style.transform = `translateX(-${slideWidth}px)`;
                validateMoveOptions(activeIndex + 1);
            } else {
                const slideWidth = slider!.clientWidth * (activeIndex - 1);
                slider!.style.transform = `translateX(-${slideWidth}px)`;
                validateMoveOptions(activeIndex - 1);
            }
        },
        [activeIndex]
    );
    const validateMoveOptions = useCallback((newIndex) => {
        if (newIndex - 1 >= 0) {
            setIsBefore(true);
        } else {
            setIsBefore(false);
        }
        if (newIndex + 1 >= props.images.length) {
            setIsNext(false);
        } else {
            setIsNext(true);
        }
        setActiveindex(newIndex);
        activeIndexRef = newIndex;
    }, []);

    const previousImgMove = useCallback(
        (event: any) => {
            addClickAnimation(event.currentTarget.id);

            intervalReset();
            moveSlide(false);
        },
        [activeIndex]
    );
    const nextImgMove = useCallback(
        (event: any) => {
            addClickAnimation(event.currentTarget.id);

            intervalReset();
            moveSlide(true);
        },
        [activeIndex]
    );

    const goToSlide = useCallback(
        (event: any) => {
            const imgIndex = Number.parseInt(event.currentTarget.dataset.index);

            intervalReset();
            slideNavigate(imgIndex);
        },
        [activeIndex]
    );

    const slideNavigate = useCallback(
        (imgIndex: number) => {
            // if (imgIndex !== activeIndex) {
            const slider: HTMLElement | null = document.getElementById(
                "image-slider"
            );
            const slideWidth = slider!.clientWidth * imgIndex;
            slider!.style.transform = `translateX(-${slideWidth}px)`;
            validateMoveOptions(imgIndex);
            // }
        },
        [activeIndex]
    );

    useEffect(() => {
        if (isAutoSlide) {
            slideInterval = setInterval(setTimer, duration);
        }
    }, []);

    useEffect(() => {
        const roomRoot: HTMLElement | null = document.getElementById(
            "md-slider-cycle"
        );
        roomRoot?.style.setProperty(
            "--primary-color",
            `${consumer.theme.primary.color}`
        );
        roomRoot?.style.setProperty("--total-images", `${props.images.length}`);
    }, [consumer]);

    const intervalReset = useCallback(() => {
        if (slideInterval && isAutoSlide) {
            clearInterval(slideInterval);
            slideInterval = setInterval(setTimer, duration);
        }
    }, [duration]);

    const setTimer = useCallback(() => {
        let move = activeIndexRef + 1;
        if (move <= 1) {
            move = 1;
        } else if (move >= props.images.length) {
            move = 0;
        }
        slideNavigate(move);
    }, []);

    return (
        <div className="md-slider-cycle-root" id="md-slider-cycle">
            <div className="md-slider-cycle-container">
                <div
                    className="md-slider-cycle-container-slide"
                    id="image-slider"
                >
                    {props.images.map((Node: HTMLImageElement, index) => {
                        return (
                            <div>
                                <img
                                    src={String(Node)}
                                    className="md-slider-cycle-img"
                                />
                            </div>
                        );
                    })}
                </div>
                <div
                    className="md-slider-cycle-container-actions"
                    style={{ top: "170px" }}
                >
                    <div>
                        {isBefore ? (
                            <button
                                className="md-slider-cycle-action-btn"
                                id="md-slider-left-arrow"
                                style={{
                                    left: 20,
                                }}
                                onClick={previousImgMove}
                            >
                                <ChevronLeftIcon />
                            </button>
                        ) : null}
                        {isNext ? (
                            <button
                                className="md-slider-cycle-action-btn"
                                id="md-slider-right-arrow"
                                style={{
                                    right: 20,
                                }}
                                onClick={nextImgMove}
                            >
                                <ChevronRightIcon />
                            </button>
                        ) : null}
                    </div>
                </div>
                {props.indicator ? (
                    <div
                        className="md-slider-cycle-notify"
                        style={{ bottom: "0px" }}
                    >
                        <div>
                            {props.images.map(
                                (Node: HTMLImageElement, index) => {
                                    return (
                                        <div
                                            className={`img-indicate ${
                                                activeIndex === index
                                                    ? "active"
                                                    : ""
                                            }`}
                                            data-index={index}
                                            onClick={goToSlide}
                                        ></div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export { MdSliderLinear, MdSliderLinearPropsIf };
