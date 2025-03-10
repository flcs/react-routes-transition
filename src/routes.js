import React from "react";
import { Switch, useLocation, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./Styles/animation.css";

import Home from "./Views/Home";
import About from "./Views/About";

export default function Routes() {
  const location = useLocation();
  return (
    // <TransitionGroup>
    //   <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
    //   </CSSTransition>
    // </TransitionGroup>
  );
}
