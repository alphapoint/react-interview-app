import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { Switch } from 'react-router';
import HomeComponent from '../components/home-component';

const AppRouter = () => (
  <Switch>
      <Route path="/" exact component={HomeComponent} />
  </Switch>
);

export default AppRouter;