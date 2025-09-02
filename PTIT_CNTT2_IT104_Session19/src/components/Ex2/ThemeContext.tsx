import { createContext } from "react";

export const ThemeContext = createContext<{
    theme: string;
    toggleTheme: () => void;
} | null>(null);