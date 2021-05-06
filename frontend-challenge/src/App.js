import "./App.css";
import { AppThemeProvider } from "./context/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route
            key="navigation"
            path="/:navigation?"
            component={NavigationBar}
          />
        </Switch>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
