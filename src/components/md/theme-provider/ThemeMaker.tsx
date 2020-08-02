import React, { FC, useState, useEffect } from "react";
import ThemeContext from "./ThemeContex";
import colors from "../../../colors/colors";

enum ThemeEnum {
    primary = "primary",
    secondary = "secondary",
    disabled = "disabled",
    error = "error",
    warning = "warning",
    info = "info",
    success = "success",
    style = "style",
    primaryTheme = "primaryTheme",
    secondaryTheme = "secondaryTheme",
}

enum ThemeStyleEnum {
    backgroundColor = "backgroundColor",
    color = "color",
    background = "background",
    boxShadow = "boxShadow",
    spacing = "spacing",
    fontFamily = "fontFamily",
}

export interface AnyMapIF {
    [key: string]: any;
}

interface ThemeContextIF extends AnyMapIF {
    [ThemeEnum.primaryTheme]: {
        [ThemeStyleEnum.background]: string;
        [ThemeStyleEnum.background]: string;
        [ThemeStyleEnum.boxShadow]: string;
        [ThemeStyleEnum.spacing]: string;
        [ThemeStyleEnum.fontFamily]: string;
        [ThemeStyleEnum.color]: string;
    };
    [ThemeEnum.secondaryTheme]: {
        [ThemeStyleEnum.background]: string;
        [ThemeStyleEnum.background]: string;
        [ThemeStyleEnum.boxShadow]: string;
        [ThemeStyleEnum.spacing]: string;
        [ThemeStyleEnum.fontFamily]: string;
        [ThemeStyleEnum.color]: string;
    };
    [ThemeEnum.primary]: {
        color: string;
        text: string;
    };
    [ThemeEnum.secondary]: {
        color: string;
        text: string;
    };
    [ThemeEnum.disabled]: {
        color: string;
        text: string;
    };
    [ThemeEnum.error]: {
        color: string;
        text: string;
    };
    [ThemeEnum.warning]: {
        color: string;
        text: string;
    };
    [ThemeEnum.info]: {
        color: string;
        text: string;
    };
    [ThemeEnum.success]: {
        color: string;
        text: string;
    };
    [ThemeEnum.style]: {
        fontFamily: string;
    };
}
interface ThemeStyleIF extends AnyMapIF {
    [ThemeStyleEnum.background]?: string;
    [ThemeStyleEnum.backgroundColor]?: string;
    [ThemeStyleEnum.boxShadow]?: string;
    [ThemeStyleEnum.spacing]?: string;
    [ThemeStyleEnum.fontFamily]?: string;
    [ThemeStyleEnum.color]?: string;
}

interface ThemeIF extends AnyMapIF {
    [ThemeEnum.primaryTheme]?: ThemeStyleIF;
    [ThemeEnum.secondaryTheme]?: ThemeStyleIF;
    [ThemeEnum.primary]?: {
        color: string;
        text: string;
    };
    [ThemeEnum.secondary]?: {
        color: string;
        text: string;
    };
    [ThemeEnum.disabled]?: {
        color: string;
        text: string;
    };
    [ThemeEnum.error]?: {
        color: string;
        text: string;
    };
    [ThemeEnum.warning]?: {
        color: string;
        text: string;
    };
    [ThemeEnum.info]?: {
        color: string;
        text: string;
    };
    [ThemeEnum.success]?: {
        color: string;
        text: string;
    };
}

export const defaultTheme: ThemeContextIF | AnyMapIF = {
    [ThemeEnum.primaryTheme]: {
        [ThemeStyleEnum.backgroundColor]: `${colors["LIGHT_BLUE"]["5"]}`,
        [ThemeStyleEnum.color]: "#ffffff",
        [ThemeStyleEnum.background]: `linear-gradient(175deg, ${colors["LIGHT_BLUE"]["5"]} 0%, ${colors["DEEP_PURPLE"]["5"]} 50%)`,
        [ThemeStyleEnum.boxShadow]: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        [ThemeStyleEnum.spacing]: "4px",
        [ThemeStyleEnum.fontFamily]: "'Times New Roman', Times, serif",
    },
    [ThemeEnum.secondaryTheme]: {
        [ThemeStyleEnum.backgroundColor]: `${colors["PURPLE"]["5"]}`,
        [ThemeStyleEnum.color]: "#ffffff",
        [ThemeStyleEnum.background]: `linear-gradient(45deg, ${colors["LIGHT_GREEN"]["5"]} 30%, ${colors["LIME"]["5"]} 90%)`,
        [ThemeStyleEnum.boxShadow]: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        [ThemeStyleEnum.spacing]: "4px",
        [ThemeStyleEnum.fontFamily]: "'Times New Roman', Times, serif",
    },
    [ThemeEnum.primary]: {
        color: `${colors["PINK"]["5"]}`,
        text: "#ffffff",
    },
    [ThemeEnum.secondary]: {
        color: `${colors["TEAL"]["5"]}`,
        text: "#ffffff",
    },
    [ThemeEnum.disabled]: {
        color: `${colors["GREY"]["5"]}`,
        text: "#000000",
    },
    [ThemeEnum.error]: {
        color: `${colors["RED"]["5"]}`,
        text: "#ffffff",
    },
    [ThemeEnum.warning]: {
        color: `${colors["LIME"]["5"]}`,
        text: "#ffffff",
    },
    [ThemeEnum.info]: {
        color: `${colors["BLUE"]["5"]}`,
        text: "#ffffff",
    },
    [ThemeEnum.success]: {
        color: `${colors["GREEN"]["5"]}`,
        text: "#ffffff",
    },
    [ThemeEnum.style]: {
        fontFamily: "'Times New Roman', Times, serif",
    },
};

interface PropsIF {
    theme: ThemeIF;
    children: React.ReactNode;
}

const ThemeMaker: FC<PropsIF> = (props: PropsIF) => {
    // const ThemeContext = React.createContext({
    //     theme: defaultTheme,
    // });
    const [themes, setThemes] = useState<ThemeContextIF | AnyMapIF>(
        defaultTheme
    );

    useEffect(() => {
        let localThemeObject: ThemeContextIF | AnyMapIF = {};
        localThemeObject = { ...defaultTheme };
        for (let key in ThemeEnum) {
            if (key in props.theme) {
                if (key === ThemeEnum.primaryTheme) {
                    for (let style in ThemeStyleEnum) {
                        if (props.theme[key] && style in props.theme[key]!) {
                            localThemeObject[key][style] = props.theme[key]![
                                style
                            ];
                        }
                    }
                } else {
                    localThemeObject[key] = props.theme[key];
                }
            }
            // else {
            //     localThemeObject[key] = defaultTheme[key];
            // }
        }
        setThemes(localThemeObject);
    }, [props.theme]);

    return (
        <ThemeContext.Provider value={{ theme: themes }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeMaker;
