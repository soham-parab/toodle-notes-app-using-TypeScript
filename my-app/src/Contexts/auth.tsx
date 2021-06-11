import { createContext, useContext, useState } from "react";

export enum Theme {
   Dark = "Dark",
   Light = "Light",
}

export type ThemeContextType = {
   theme: Theme;
   setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
   theme: Theme.Dark,
   setTheme: (theme) => console.warn("no theme provider"),
});

export const ThemeProvider: React.FC = ({ children }) => {
   const [theme, setTheme] = useState(Theme.Dark);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useTheme = () => useContext(ThemeContext);
