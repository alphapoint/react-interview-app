import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from '../components/home-component';

const AppRouter = () => (
  <Router>
      <Route path="/" exact component={HomeComponent} />
  </Router>
);

export default AppRouter;