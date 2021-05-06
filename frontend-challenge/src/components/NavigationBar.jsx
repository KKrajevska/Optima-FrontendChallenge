import React from "react";
import data from "../constants/data.json";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import ROUTES from "../config/routes";
export const NavigationBar = () => {
  const history = useHistory();
  const onMenuButtonClick = (path) => {
    history.push(`/${path}`);
  };
  const buttons = data.menu.map((item, idx) => {
    return (
      item.name && (
        <Button
          key={idx}
          name={item.url}
          color="inherit"
          onClick={() => onMenuButtonClick(item.url)}
        >
          {item.name}
        </Button>
      )
    );
  });
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>{buttons}</Toolbar>
      </AppBar>
      <main>
        <Switch>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={`/${route.path}`}
              component={route.component}
            />
          ))}
          <Route
            key="default"
            path="/"
            component={() => <Redirect to="/products" />}
          />
        </Switch>
      </main>
    </>
  );
};
