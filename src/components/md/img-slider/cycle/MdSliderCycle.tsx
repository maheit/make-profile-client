import React, { FC, useCallback, useEffect, useState, useContext } from "react";
import "./md-slider-cycle.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ThemeContex from "../../theme-provider/ThemeContex";
import { MdSliderPropsIF, MdSliderContentIF } from "../SliderProps";

let activeIndexRef = 0;
let slideInterval: any;

const MdSliderCycle: FC<MdSliderPropsIF> = (props: MdSliderPropsIF) => {
    // const consumer = useContext(ThemeContex);
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
                const nextActiveIndex = activeIndex + 1;
                const slideWidth = slider!.clientWidth * nextActiveIndex;
                slider!.style.transform = `translateX(-${slideWidth}px)`;
                validateMoveOptions(nextActiveIndex);
            } else {
                const nextActiveIndex = activeIndex - 1;
                const slideWidth = slider!.clientWidth * nextActiveIndex;
                slider!.style.transform = `translateX(-${slideWidth}px)`;
                validateMoveOptions(nextActiveIndex);
            }
        },
        [activeIndex]
    );
    const validateMoveOptions = useCallback(
        (newIndex) => {
            if (newIndex - 1 >= 0) {
                setIsBefore(true);
            } else {
                setIsBefore(false);
            }
            if (newIndex + 1 >= props.contents.length) {
                setIsNext(false);
            } else {
                setIsNext(true);
            }
            textAnimation(activeIndexRef, newIndex);
            setActiveindex(newIndex);
            activeIndexRef = newIndex;
        },
        [activeIndex]
    );

    const textAnimation = useCallback(
        (activeIndex: number, nextActiveIndex: number) => {
            const contentArea: HTMLElement | null = document.getElementById(
                `md-slider-text-content-area${nextActiveIndex}`
            );
            const prevContentArea: HTMLElement | null = document.getElementById(
                `md-slider-text-content-area${activeIndex}`
            );
            const textHeader: HTMLElement | null = document.getElementById(
                `md-slider-text-header${nextActiveIndex}`
            );
            const prevTextHeader: HTMLElement | null = document.getElementById(
                `md-slider-text-header${activeIndex}`
            );
            const textLineSpliter: HTMLElement | null = document.getElementById(
                `md-slider-text-line-spliter${nextActiveIndex}`
            );
            const prevTextLineSpliter: HTMLElement | null = document.getElementById(
                `md-slider-text-line-spliter${activeIndex}`
            );
            const textSubHeader: HTMLElement | null = document.getElementById(
                `md-slider-text-subheader${nextActiveIndex}`
            );
            const prevTextSubHeader: HTMLElement | null = document.getElementById(
                `md-slider-text-subheader${activeIndex}`
            );
            contentArea!.style.display = "flex";
            textHeader!.style.display = "block";
            textLineSpliter!.style.display = "block";
            textSubHeader!.style.display = "block";
            contentArea!.classList.remove("md-slider-hide");
            textHeader!.classList.remove("md-slider-hide");
            textLineSpliter!.classList.remove("md-slider-hide");
            textSubHeader!.classList.remove("md-slider-hide");
            prevContentArea!.classList.add("md-slider-hide");
            prevTextHeader!.classList.add("md-slider-hide");
            prevTextLineSpliter!.classList.add("md-slider-hide");
            prevTextSubHeader!.classList.add("md-slider-hide");
        },
        []
    );

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
        const roomRoot: HTMLElement | null = document.getElementById(
            "md-slider-cycle"
        );
        roomRoot?.style.setProperty(
            "--total-images",
            `${props.contents.length}`
        );
        roomRoot?.style.setProperty("--slider-height", `${props.height}`);
        textAnimation(props.contents.length - 1, 0);
    }, []);

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
        } else if (move >= props.contents.length) {
            move = 0;
        }
        slideNavigate(move);
    }, []);

    return (
        <div
            className="md-slider-cycle-root"
            style={props.height ? { height: props.height } : {}}
            id="md-slider-cycle"
        >
            <div className="md-slider-cycle-container">
                <div
                    className="md-slider-cycle-container-slide"
                    id="image-slider"
                >
                    {props.contents.map((content: MdSliderContentIF, index) => {
                        return (
                            <div className="md-slider-content" key={index}>
                                <div className="md-slider-text-content">
                                    <div
                                        className="md-slider-text-content-area"
                                        id={`md-slider-text-content-area${index}`}
                                    >
                                        <div className="md-slider-text-content-area-container-div"></div>
                                        <div className="md-slider-text-area">
                                            <div
                                                className="md-slider-text-header"
                                                id={`md-slider-text-header${index}`}
                                                title={`${content.headerText}`}
                                            >
                                                {content.headerText}
                                            </div>
                                            <div
                                                className="md-slider-text-line-spliter"
                                                id={`md-slider-text-line-spliter${index}`}
                                            ></div>
                                            <div
                                                className="md-slider-text-subheader"
                                                id={`md-slider-text-subheader${index}`}
                                                title={`${content.subHeaderText}`}
                                            >
                                                {content.subHeaderText}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={String(content.image)}
                                    className="md-slider-cycle-img"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="md-slider-cycle-container-actions">
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
                            {props.contents.map(
                                (content: MdSliderContentIF, index) => {
                                    return (
                                        <div
                                            key={index}
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

export { MdSliderCycle };
