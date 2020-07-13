import React, { FC, useState, useRef, useEffect, useCallback } from "react";
import Colors from "../../../../colors/colors";

import "./circle-rotate.css";

interface PropsIF {
    id: string;
    canvasHeight: number;
    canvasWidth: number;
    isFullScreen?: boolean;
}

interface circleMapIF {
    x: number;
    y: number;
    minX: number;
    maxX: number;
    symbolAdd: boolean;
    fillStyle: string;
    strokeStyle: string;
    colorKey: number;
}

let circleMap: circleMapIF = {
    x: 0,
    y: 0,
    minX: 0,
    maxX: 0,
    symbolAdd: true,
    fillStyle: Colors.AMBER[5],
    strokeStyle: Colors.AMBER[5],
    colorKey: 0,
};

let reqAnimationFrame: any | undefined;

const CircleRotate: FC<PropsIF> = (props: PropsIF) => {
    const [width, setWidth] = useState<number>(props.canvasWidth);
    const [height, setHeight] = useState<number>(props.canvasHeight);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [context, setContex] = useState<CanvasRenderingContext2D | null>(
        null
    );

    const onResizeEvent = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        if (canvasRef.current !== null) {
            const getContext = canvasRef.current!.getContext("2d");
            if (getContext) {
                circleMap = {
                    x: width / 2,
                    y: height / 2,
                    minX: width / 2 - 80,
                    maxX: width / 2 + 80,
                    symbolAdd: true,
                    fillStyle: Colors.AMBER[5],
                    strokeStyle: Colors.AMBER[5],
                    colorKey: 0,
                };
                setContex(context);
                getContext.lineWidth = 5;
                getContext.strokeRect(50, 50, 100, 100);
                cancelAnimationFrame(reqAnimationFrame);
                animation();
            }
        }
    }, [height, width]);
    useEffect(() => {
        console.log("UseEffect");
        if (props.isFullScreen) {
            window.addEventListener("resize", onResizeEvent);
            return function () {
                window.removeEventListener("resize", onResizeEvent);
            };
        }
    }, []);
    const animation = useCallback(() => {
        reqAnimationFrame = requestAnimationFrame(animation);
        const context = canvasRef.current!.getContext("2d");

        let x = circleMap.x;
        let symbolAdd = circleMap.symbolAdd;
        let fillStyle = circleMap.fillStyle;
        let strokeStyle = circleMap.strokeStyle;
        let colorKey: number = circleMap.colorKey;

        if (x < circleMap.minX) {
            symbolAdd = true;
        } else if (x >= circleMap.maxX) {
            symbolAdd = false;
        }
        if (symbolAdd) {
            x += 3;
        } else {
            x -= 3;
        }
        if (circleMap.symbolAdd !== symbolAdd) {
            const keys: string[] = Object.keys(Colors);
            colorKey += 1;
            if (colorKey >= keys.length) {
                colorKey = 0;
            }
            const color = Colors[keys[colorKey]]["5"];
            strokeStyle = color;
            fillStyle = color;
        }
        circleMap = {
            ...circleMap,
            x,
            symbolAdd,
            colorKey,
            strokeStyle,
            fillStyle,
        };
        context?.clearRect(0, 0, width, height);
        context?.beginPath();
        context!.arc(x, circleMap.y, 5, 0, 90, false);
        context!.fillStyle = `${fillStyle}`;
        context!.strokeStyle = `${strokeStyle}`;
        context!.shadowBlur = 0.5;
        context?.fill();
        context?.stroke();
        context?.closePath();
    }, [context, circleMap]);
    return (
        <div className={"viewport-wh"}>
            <canvas
                key={props.id}
                id={props.id}
                ref={canvasRef}
                width={`${width}`}
                height={`${height}`}
                style={{}}
            ></canvas>
        </div>
    );
};
export default CircleRotate;
