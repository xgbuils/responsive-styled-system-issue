import React from "react";
import { ThemeProvider } from "emotion-theming";

const theme = {
  breakpoints: [512, 768, 1024],
  colors: {
    primary: "blue",
    secondary: "red",
    neutrals: ["#333", "#888"]
  },
  space: [0, 40, 80]
};

const DesignSystemProvider = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default DesignSystemProvider;