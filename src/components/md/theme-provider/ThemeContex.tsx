import React from "react";
import { defaultTheme } from "./ThemeMaker";

const MyContext = React.createContext({
    theme: defaultTheme,
});

export default MyContext;
