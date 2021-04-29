import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/join" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </Provider>
  );
};

export default App;
