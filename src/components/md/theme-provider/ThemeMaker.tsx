import React, { FC } from "react";
import ThemeContext from "./ThemeContex";

interface ThemeContextIF {
    primary: {
        color: string;
        text: string;
    };
    secondary: {
        color: string;
        text: string;
    };
    disabled: {
        color: string;
        text: string;
    };
    error: {
        color: string;
        text: string;
    };
    warning: {
        color: string;
        text: string;
    };
    info: {
        color: string;
        text: string;
    };
    success: {
        color: string;
        text: string;
    };
    style: {
        fontFamily: string;
    };
}

interface ThemeIF {
    primary?: {
        color: string;
        text: string;
    };
    secondary?: {
        color: string;
        text: string;
    };
    disabled?: {
        color: string;
        text: string;
    };
    error?: {
        color: string;
        text: string;
    };
    warning?: {
        color: string;
        text: string;
    };
    info?: {
        color: string;
        text: string;
    };
    success?: {
        color: string;
        text: string;
    };
    style?: {
        fontFamily: string;
    };
}

export const defaultTheme: ThemeContextIF = {
    primary: {
        color: "#651af0",
        text: "#ffffff",
    },
    secondary: {
        color: "#651af0",
        text: "#ffffff",
    },
    disabled: {
        color: "#651af0",
        text: "#ffffff",
    },
    error: {
        color: "#651af0",
        text: "#ffffff",
    },
    warning: {
        color: "#651af0",
        text: "#ffffff",
    },
    info: {
        color: "#651af0",
        text: "#ffffff",
    },
    success: {
        color: "#651af0",
        text: "#ffffff",
    },
    style: {
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
    return (
        <ThemeContext.Provider value={{ theme: defaultTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeMaker;
