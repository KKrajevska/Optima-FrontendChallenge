import "./App.css";
import { AppThemeProvider } from "./context/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Products";
  }, []);
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
