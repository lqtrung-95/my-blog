import { createContext } from "react";

export const themes = {
  light: {
    type: "light",
    fontColor: "#0F172A",
    background: "#CBD5E1",
    cardBg: "#F5F5F5",
    btnBg: "#5182B8",
    btnText: "#FFFFFF",
  },
  dark: {
    type: "dark",
    fontColor: "#CBD5E1",
    background: "#0F172A",
    cardBg: "#1E293B",
    btnBg: "#335577",
    btnText: "#FFFFFF",
  },
};

export const ThemeContext = createContext({});
