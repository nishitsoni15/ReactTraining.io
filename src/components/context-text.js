
import React , { createContext } from "react";

export const themes = {
    light:{
        color:'#000000',
        background:'#eeeeee',
    },
    dark:{
        color:'#ffffff',
        background:'#222222',
    },
};

export const ContextText = React.createContext(
    themes.dark
);