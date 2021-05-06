import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@material-ui/core";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { customTheme } from "../config/theme";

export const AppThemeProvider = ({ children }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <>
          <CssBaseline />
          {children}
        </>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
